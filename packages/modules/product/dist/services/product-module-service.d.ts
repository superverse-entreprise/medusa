import { Context, DAL, IEventBusModuleService, InternalModuleDeclaration, ModuleJoinerConfig, ModulesSdkTypes, ProductTypes } from "@medusajs/types";
import { Image, Product, ProductCategory, ProductCollection, ProductOption, ProductOptionValue, ProductTag, ProductType, ProductVariant } from "../models";
import { ProductCategoryService, ProductService } from ".";
import { ModulesSdkUtils } from "@medusajs/utils";
import { UpdateCollectionInput, UpdateProductInput, UpdateProductOptionInput, UpdateProductVariantInput } from "../types";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    productService: ProductService<any>;
    productVariantService: ModulesSdkTypes.InternalModuleService<any, any>;
    productTagService: ModulesSdkTypes.InternalModuleService<any>;
    productCategoryService: ProductCategoryService<any>;
    productCollectionService: ModulesSdkTypes.InternalModuleService<any>;
    productImageService: ModulesSdkTypes.InternalModuleService<any>;
    productTypeService: ModulesSdkTypes.InternalModuleService<any>;
    productOptionService: ModulesSdkTypes.InternalModuleService<any>;
    productOptionValueService: ModulesSdkTypes.InternalModuleService<any>;
    eventBusModuleService?: IEventBusModuleService;
};
declare const ProductModuleService_base: new (container: InjectedDependencies) => ModulesSdkUtils.AbstractModuleService<InjectedDependencies, ProductTypes.ProductDTO, {
    ProductCategory: {
        dto: ProductTypes.ProductCategoryDTO;
        singular: "Category";
        plural: "Categories";
    };
    ProductCollection: {
        dto: ProductTypes.ProductCollectionDTO;
        singular: "Collection";
        plural: "Collections";
    };
    ProductOption: {
        dto: ProductTypes.ProductOptionDTO;
        singular: "Option";
        plural: "Options";
    };
    ProductTag: {
        dto: ProductTypes.ProductTagDTO;
        singular: "Tag";
        plural: "Tags";
    };
    ProductType: {
        dto: ProductTypes.ProductTypeDTO;
        singular: "Type";
        plural: "Types";
    };
    ProductVariant: {
        dto: ProductTypes.ProductVariantDTO;
        singular: "Variant";
        plural: "Variants";
    };
}>;
export default class ProductModuleService<TProduct extends Product = Product, TProductVariant extends ProductVariant = ProductVariant, TProductTag extends ProductTag = ProductTag, TProductCollection extends ProductCollection = ProductCollection, TProductCategory extends ProductCategory = ProductCategory, TProductImage extends Image = Image, TProductType extends ProductType = ProductType, TProductOption extends ProductOption = ProductOption, TProductOptionValue extends ProductOptionValue = ProductOptionValue> extends ProductModuleService_base implements ProductTypes.IProductModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly productService_: ProductService<TProduct>;
    protected readonly productVariantService_: ModulesSdkTypes.InternalModuleService<TProductVariant>;
    protected readonly productCategoryService_: ProductCategoryService<TProductCategory>;
    protected readonly productTagService_: ModulesSdkTypes.InternalModuleService<TProductTag>;
    protected readonly productCollectionService_: ModulesSdkTypes.InternalModuleService<TProductCollection>;
    protected readonly productImageService_: ModulesSdkTypes.InternalModuleService<TProductImage>;
    protected readonly productTypeService_: ModulesSdkTypes.InternalModuleService<TProductType>;
    protected readonly productOptionService_: ModulesSdkTypes.InternalModuleService<TProductOption>;
    protected readonly productOptionValueService_: ModulesSdkTypes.InternalModuleService<TProductOptionValue>;
    protected readonly eventBusModuleService_?: IEventBusModuleService;
    constructor({ baseRepository, productService, productVariantService, productTagService, productCategoryService, productCollectionService, productImageService, productTypeService, productOptionService, productOptionValueService, eventBusModuleService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    createVariants(data: ProductTypes.CreateProductVariantDTO[], sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    createVariants(data: ProductTypes.CreateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    protected createVariants_(data: ProductTypes.CreateProductVariantDTO[], sharedContext?: Context): Promise<ProductVariant[]>;
    upsertVariants(data: ProductTypes.UpsertProductVariantDTO[], sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    upsertVariants(data: ProductTypes.UpsertProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    updateVariants(id: string, data: ProductTypes.UpdateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    updateVariants(selector: ProductTypes.FilterableProductVariantProps, data: ProductTypes.UpdateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    protected updateVariants_(data: UpdateProductVariantInput[], sharedContext?: Context): Promise<TProductVariant[]>;
    createTags(data: ProductTypes.CreateProductTagDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTagDTO[]>;
    updateTags(data: ProductTypes.UpdateProductTagDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTagDTO[]>;
    createTypes(data: ProductTypes.CreateProductTypeDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    createTypes(data: ProductTypes.CreateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    upsertTypes(data: ProductTypes.UpsertProductTypeDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    upsertTypes(data: ProductTypes.UpsertProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    updateTypes(id: string, data: ProductTypes.UpdateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    updateTypes(selector: ProductTypes.FilterableProductTypeProps, data: ProductTypes.UpdateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    createOptions(data: ProductTypes.CreateProductOptionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    createOptions(data: ProductTypes.CreateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    protected createOptions_(data: ProductTypes.CreateProductOptionDTO[], sharedContext?: Context): Promise<ProductOption[]>;
    upsertOptions(data: ProductTypes.UpsertProductOptionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    upsertOptions(data: ProductTypes.UpsertProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    updateOptions(id: string, data: ProductTypes.UpdateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    updateOptions(selector: ProductTypes.FilterableProductOptionProps, data: ProductTypes.UpdateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    protected updateOptions_(data: UpdateProductOptionInput[], sharedContext?: Context): Promise<ProductOption[]>;
    createCollections(data: ProductTypes.CreateProductCollectionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    createCollections(data: ProductTypes.CreateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    createCollections_(data: ProductTypes.CreateProductCollectionDTO[], sharedContext?: Context): Promise<TProductCollection[]>;
    upsertCollections(data: ProductTypes.UpsertProductCollectionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    upsertCollections(data: ProductTypes.UpsertProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    updateCollections(id: string, data: ProductTypes.UpdateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    updateCollections(selector: ProductTypes.FilterableProductCollectionProps, data: ProductTypes.UpdateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    protected updateCollections_(data: UpdateCollectionInput[], sharedContext?: Context): Promise<TProductCollection[]>;
    createCategory(data: ProductTypes.CreateProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO>;
    createCategory_(data: ProductTypes.CreateProductCategoryDTO, sharedContext?: Context): Promise<ProductCategory>;
    updateCategory(categoryId: string, data: ProductTypes.UpdateProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO>;
    deleteCategory(categoryId: string, sharedContext?: Context): Promise<void>;
    create(data: ProductTypes.CreateProductDTO[], sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    create(data: ProductTypes.CreateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    upsert(data: ProductTypes.UpsertProductDTO[], sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    upsert(data: ProductTypes.UpsertProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    update(id: string, data: ProductTypes.UpdateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    update(selector: ProductTypes.FilterableProductProps, data: ProductTypes.UpdateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    protected create_(data: ProductTypes.CreateProductDTO[], sharedContext?: Context): Promise<TProduct[]>;
    protected update_(data: UpdateProductInput[], sharedContext?: Context): Promise<TProduct[]>;
    protected normalizeCreateProductInput(product: ProductTypes.CreateProductDTO, sharedContext?: Context): Promise<ProductTypes.CreateProductDTO>;
    protected normalizeUpdateProductInput(product: UpdateProductInput, sharedContext?: Context): Promise<UpdateProductInput>;
    protected static normalizeCreateProductCollectionInput(collection: ProductTypes.CreateProductCollectionDTO): ProductTypes.CreateProductCollectionDTO;
    protected static normalizeUpdateProductCollectionInput(collection: ProductTypes.CreateProductCollectionDTO | UpdateCollectionInput): ProductTypes.CreateProductCollectionDTO | UpdateCollectionInput;
    protected static assignOptionsToVariants(variants: ProductTypes.CreateProductVariantDTO[] | ProductTypes.UpdateProductVariantDTO[], options: ProductOption[]): ProductTypes.CreateProductVariantDTO[] | ProductTypes.UpdateProductVariantDTO[];
}
export {};
