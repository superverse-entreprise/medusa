var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require(`fs-extra`);
const path = require(`path`);
const { promisifiedSpawn } = require(`../utils/promisified-spawn`);
const { registryUrl } = require(`./verdaccio-config`);
const NPMRCContent = `${registryUrl.replace(/https?:/g, ``)}/:_authToken="medusa-dev"`;
const { getMonorepoPackageJsonPath, } = require(`../utils/get-monorepo-package-json-path`);
const { registerCleanupTask } = require(`./cleanup-tasks`);
/**
 * Edit package.json to:
 *  - adjust version to temporary one
 *  - change version selectors for dependencies that
 *    will be published, to make sure that yarn
 *    install them in local site
 */
const adjustPackageJson = ({ monoRepoPackageJsonPath, packageName, versionPostFix, packagesToPublish, ignorePackageJSONChanges, packageNameToPath, }) => {
    // we need to check if package depend on any other package to will be published and
    // adjust version selector to point to dev version of package so local registry is used
    // for dependencies.
    const monorepoPKGjsonString = fs.readFileSync(monoRepoPackageJsonPath, `utf-8`);
    const monorepoPKGjson = JSON.parse(monorepoPKGjsonString);
    monorepoPKGjson.version = `${monorepoPKGjson.version}-dev-${versionPostFix}`;
    packagesToPublish.forEach((packageThatWillBePublished) => {
        if (monorepoPKGjson.dependencies &&
            monorepoPKGjson.dependencies[packageThatWillBePublished]) {
            const currentVersion = JSON.parse(fs.readFileSync(getMonorepoPackageJsonPath({
                packageName: packageThatWillBePublished,
                packageNameToPath,
            }), `utf-8`)).version;
            monorepoPKGjson.dependencies[packageThatWillBePublished] = `${currentVersion}-dev-${versionPostFix}`;
        }
    });
    const temporaryMonorepoPKGjsonString = JSON.stringify(monorepoPKGjson);
    const unignorePackageJSONChanges = ignorePackageJSONChanges(packageName, [
        monorepoPKGjsonString,
        temporaryMonorepoPKGjsonString,
    ]);
    // change version and dependency versions
    fs.outputFileSync(monoRepoPackageJsonPath, temporaryMonorepoPKGjsonString);
    return {
        newPackageVersion: monorepoPKGjson.version,
        unadjustPackageJson: registerCleanupTask(() => {
            // restore original package.json
            fs.outputFileSync(monoRepoPackageJsonPath, monorepoPKGjsonString);
            unignorePackageJSONChanges();
        }),
    };
};
/**
 * Anonymous publishing require dummy .npmrc
 * See https://github.com/verdaccio/verdaccio/issues/212#issuecomment-308578500
 * This is `npm publish` (as in linked comment) and `yarn publish` requirement.
 * This is not verdaccio restriction.
 */
const createTemporaryNPMRC = ({ pathToPackage, root }) => {
    const NPMRCPathInPackage = path.join(pathToPackage, `.npmrc`);
    fs.outputFileSync(NPMRCPathInPackage, NPMRCContent);
    const NPMRCPathInRoot = path.join(root, `.npmrc`);
    fs.outputFileSync(NPMRCPathInRoot, NPMRCContent);
    return registerCleanupTask(() => {
        fs.removeSync(NPMRCPathInPackage);
        fs.removeSync(NPMRCPathInRoot);
    });
};
const publishPackage = ({ packageName, packagesToPublish, versionPostFix, ignorePackageJSONChanges, packageNameToPath, root, }) => __awaiter(this, void 0, void 0, function* () {
    const monoRepoPackageJsonPath = getMonorepoPackageJsonPath({
        packageName,
        packageNameToPath,
    });
    const { unadjustPackageJson, newPackageVersion } = adjustPackageJson({
        monoRepoPackageJsonPath,
        packageName,
        packageNameToPath,
        versionPostFix,
        packagesToPublish,
        ignorePackageJSONChanges,
    });
    const pathToPackage = path.dirname(monoRepoPackageJsonPath);
    const uncreateTemporaryNPMRC = createTemporaryNPMRC({ pathToPackage, root });
    // npm publish
    const publishCmd = [
        `npm`,
        [`publish`, `--tag`, `medusa-dev`, `--registry=${registryUrl}`],
        {
            cwd: pathToPackage,
        },
    ];
    console.log(`Publishing ${packageName}@${newPackageVersion} to local registry`);
    try {
        yield promisifiedSpawn(publishCmd);
        console.log(`Published ${packageName}@${newPackageVersion} to local registry`);
    }
    catch (e) {
        console.error(`Failed to publish ${packageName}@${newPackageVersion}`, e);
        process.exit(1);
    }
    uncreateTemporaryNPMRC();
    unadjustPackageJson();
    return newPackageVersion;
});
exports.publishPackage = publishPackage;
//# sourceMappingURL=publish-package.js.map