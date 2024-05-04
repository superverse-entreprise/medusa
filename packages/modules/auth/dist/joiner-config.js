"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinerConfig = exports.entityNameToLinkableKeysMap = exports.LinkableKeys = void 0;
const _models_1 = require("./models");
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.LinkableKeys = {
    auth_user_id: _models_1.AuthUser.name,
};
const entityLinkableKeysMap = {};
Object.entries(exports.LinkableKeys).forEach(([key, value]) => {
    entityLinkableKeysMap[value] ?? (entityLinkableKeysMap[value] = []);
    entityLinkableKeysMap[value].push({
        mapTo: key,
        valueFrom: key.split("_").pop(),
    });
});
exports.entityNameToLinkableKeysMap = entityLinkableKeysMap;
exports.joinerConfig = {
    serviceName: modules_sdk_1.Modules.AUTH,
    primaryKeys: ["id"],
    linkableKeys: exports.LinkableKeys,
    alias: {
        name: ["auth_user", "auth_users"],
        args: {
            entity: _models_1.AuthUser.name,
        },
    },
};
