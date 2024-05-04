import { Context, DAL, ProductCategoryTransformOptions, ProductTypes } from "@medusajs/types";
import { DALUtils } from "@medusajs/utils";
import { SqlEntityManager } from "@mikro-orm/postgresql";
import { ProductCategory } from "../models";
export type ReorderConditions = {
    targetCategoryId: string;
    originalParentId: string | null;
    targetParentId: string | null | undefined;
    originalRank: number;
    targetRank: number | undefined;
    shouldChangeParent: boolean;
    shouldChangeRank: boolean;
    shouldIncrementRank: boolean;
    shouldDeleteElement: boolean;
};
export declare const tempReorderRank = 99999;
export declare class ProductCategoryRepository extends DALUtils.MikroOrmBaseTreeRepository<ProductCategory> {
    buildFindOptions(findOptions?: DAL.FindOptions<ProductCategory>, familyOptions?: ProductCategoryTransformOptions): {
        where: {
            id?: string | DAL.OperatorMap<string> | undefined;
            name?: undefined;
            description?: undefined;
            handle?: undefined;
            mpath?: undefined;
            is_active?: undefined;
            is_internal?: undefined;
            rank?: undefined;
            parent_category_id?: undefined;
            parent_category?: undefined;
            category_children?: {
                id?: undefined;
                name?: undefined;
                description?: undefined;
                handle?: undefined;
                mpath?: undefined;
                is_active?: undefined;
                is_internal?: undefined;
                rank?: undefined;
                parent_category_id?: undefined;
                parent_category?: undefined;
                category_children?: any | undefined;
                created_at?: undefined;
                updated_at?: undefined;
                deleted_at?: undefined;
                products?: {
                    id?: undefined;
                    title?: undefined;
                    handle?: undefined;
                    subtitle?: undefined;
                    description?: undefined;
                    is_giftcard?: undefined;
                    status?: undefined;
                    thumbnail?: undefined;
                    options?: {
                        id?: undefined;
                        title?: undefined;
                        product_id?: undefined;
                        product?: undefined;
                        values?: {
                            id?: undefined;
                            value?: undefined;
                            option_id?: undefined;
                            option?: undefined;
                            variants?: {
                                id?: undefined;
                                title?: undefined;
                                sku?: undefined;
                                barcode?: undefined;
                                ean?: undefined;
                                upc?: undefined;
                                inventory_quantity?: undefined;
                                allow_backorder?: undefined;
                                manage_inventory?: undefined;
                                hs_code?: undefined;
                                origin_country?: undefined;
                                mid_code?: undefined;
                                material?: undefined;
                                weight?: undefined;
                                length?: undefined;
                                height?: undefined;
                                width?: undefined;
                                metadata?: undefined;
                                variant_rank?: undefined;
                                product_id?: undefined;
                                product?: undefined;
                                options?: any | undefined;
                                created_at?: undefined;
                                updated_at?: undefined;
                                deleted_at?: undefined;
                                onInit?: undefined;
                            } | undefined;
                            metadata?: undefined;
                            created_at?: undefined;
                            updated_at?: undefined;
                            deleted_at?: undefined;
                            onInit?: undefined;
                        } | undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    variants?: {
                        id?: undefined;
                        title?: undefined;
                        sku?: undefined;
                        barcode?: undefined;
                        ean?: undefined;
                        upc?: undefined;
                        inventory_quantity?: undefined;
                        allow_backorder?: undefined;
                        manage_inventory?: undefined;
                        hs_code?: undefined;
                        origin_country?: undefined;
                        mid_code?: undefined;
                        material?: undefined;
                        weight?: undefined;
                        length?: undefined;
                        height?: undefined;
                        width?: undefined;
                        metadata?: undefined;
                        variant_rank?: undefined;
                        product_id?: undefined;
                        product?: undefined;
                        options?: any | undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    weight?: undefined;
                    length?: undefined;
                    height?: undefined;
                    width?: undefined;
                    origin_country?: undefined;
                    hs_code?: undefined;
                    mid_code?: undefined;
                    material?: undefined;
                    collection_id?: undefined;
                    collection?: undefined;
                    type_id?: undefined;
                    type?: undefined;
                    tags?: {
                        id?: undefined;
                        value?: undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        products?: any | undefined;
                        onInit?: undefined;
                    } | undefined;
                    images?: {
                        id?: undefined;
                        url?: undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        products?: any | undefined;
                        onInit?: undefined;
                        onCreate?: undefined;
                    } | undefined;
                    categories?: any | undefined;
                    discountable?: undefined;
                    external_id?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    metadata?: undefined;
                    onInit?: undefined;
                } | undefined;
                onInit?: undefined;
                onCreate?: undefined;
            } | undefined;
            created_at?: undefined;
            updated_at?: undefined;
            deleted_at?: undefined;
            products?: {
                id?: undefined;
                title?: undefined;
                handle?: undefined;
                subtitle?: undefined;
                description?: undefined;
                is_giftcard?: undefined;
                status?: undefined;
                thumbnail?: undefined;
                options?: {
                    id?: undefined;
                    title?: undefined;
                    product_id?: undefined;
                    product?: undefined;
                    values?: {
                        id?: undefined;
                        value?: undefined;
                        option_id?: undefined;
                        option?: undefined;
                        variants?: {
                            id?: undefined;
                            title?: undefined;
                            sku?: undefined;
                            barcode?: undefined;
                            ean?: undefined;
                            upc?: undefined;
                            inventory_quantity?: undefined;
                            allow_backorder?: undefined;
                            manage_inventory?: undefined;
                            hs_code?: undefined;
                            origin_country?: undefined;
                            mid_code?: undefined;
                            material?: undefined;
                            weight?: undefined;
                            length?: undefined;
                            height?: undefined;
                            width?: undefined;
                            metadata?: undefined;
                            variant_rank?: undefined;
                            product_id?: undefined;
                            product?: undefined;
                            options?: any | undefined;
                            created_at?: undefined;
                            updated_at?: undefined;
                            deleted_at?: undefined;
                            onInit?: undefined;
                        } | undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    onInit?: undefined;
                } | undefined;
                variants?: {
                    id?: undefined;
                    title?: undefined;
                    sku?: undefined;
                    barcode?: undefined;
                    ean?: undefined;
                    upc?: undefined;
                    inventory_quantity?: undefined;
                    allow_backorder?: undefined;
                    manage_inventory?: undefined;
                    hs_code?: undefined;
                    origin_country?: undefined;
                    mid_code?: undefined;
                    material?: undefined;
                    weight?: undefined;
                    length?: undefined;
                    height?: undefined;
                    width?: undefined;
                    metadata?: undefined;
                    variant_rank?: undefined;
                    product_id?: undefined;
                    product?: undefined;
                    options?: any | undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    onInit?: undefined;
                } | undefined;
                weight?: undefined;
                length?: undefined;
                height?: undefined;
                width?: undefined;
                origin_country?: undefined;
                hs_code?: undefined;
                mid_code?: undefined;
                material?: undefined;
                collection_id?: undefined;
                collection?: undefined;
                type_id?: undefined;
                type?: undefined;
                tags?: {
                    id?: undefined;
                    value?: undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    products?: any | undefined;
                    onInit?: undefined;
                } | undefined;
                images?: {
                    id?: undefined;
                    url?: undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    products?: any | undefined;
                    onInit?: undefined;
                    onCreate?: undefined;
                } | undefined;
                categories?: any | undefined;
                discountable?: undefined;
                external_id?: undefined;
                created_at?: undefined;
                updated_at?: undefined;
                deleted_at?: undefined;
                metadata?: undefined;
                onInit?: undefined;
            } | undefined;
            onInit?: undefined;
            onCreate?: undefined;
        } & DAL.BaseFilterable<{
            id?: string | DAL.OperatorMap<string> | undefined;
            name?: undefined;
            description?: undefined;
            handle?: undefined;
            mpath?: undefined;
            is_active?: undefined;
            is_internal?: undefined;
            rank?: undefined;
            parent_category_id?: undefined;
            parent_category?: undefined;
            category_children?: {
                id?: undefined;
                name?: undefined;
                description?: undefined;
                handle?: undefined;
                mpath?: undefined;
                is_active?: undefined;
                is_internal?: undefined;
                rank?: undefined;
                parent_category_id?: undefined;
                parent_category?: undefined;
                category_children?: any | undefined;
                created_at?: undefined;
                updated_at?: undefined;
                deleted_at?: undefined;
                products?: {
                    id?: undefined;
                    title?: undefined;
                    handle?: undefined;
                    subtitle?: undefined;
                    description?: undefined;
                    is_giftcard?: undefined;
                    status?: undefined;
                    thumbnail?: undefined;
                    options?: {
                        id?: undefined;
                        title?: undefined;
                        product_id?: undefined;
                        product?: undefined;
                        values?: {
                            id?: undefined;
                            value?: undefined;
                            option_id?: undefined;
                            option?: undefined;
                            variants?: {
                                id?: undefined;
                                title?: undefined;
                                sku?: undefined;
                                barcode?: undefined;
                                ean?: undefined;
                                upc?: undefined;
                                inventory_quantity?: undefined;
                                allow_backorder?: undefined;
                                manage_inventory?: undefined;
                                hs_code?: undefined;
                                origin_country?: undefined;
                                mid_code?: undefined;
                                material?: undefined;
                                weight?: undefined;
                                length?: undefined;
                                height?: undefined;
                                width?: undefined;
                                metadata?: undefined;
                                variant_rank?: undefined;
                                product_id?: undefined;
                                product?: undefined;
                                options?: any | undefined;
                                created_at?: undefined;
                                updated_at?: undefined;
                                deleted_at?: undefined;
                                onInit?: undefined;
                            } | undefined;
                            metadata?: undefined;
                            created_at?: undefined;
                            updated_at?: undefined;
                            deleted_at?: undefined;
                            onInit?: undefined;
                        } | undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    variants?: {
                        id?: undefined;
                        title?: undefined;
                        sku?: undefined;
                        barcode?: undefined;
                        ean?: undefined;
                        upc?: undefined;
                        inventory_quantity?: undefined;
                        allow_backorder?: undefined;
                        manage_inventory?: undefined;
                        hs_code?: undefined;
                        origin_country?: undefined;
                        mid_code?: undefined;
                        material?: undefined;
                        weight?: undefined;
                        length?: undefined;
                        height?: undefined;
                        width?: undefined;
                        metadata?: undefined;
                        variant_rank?: undefined;
                        product_id?: undefined;
                        product?: undefined;
                        options?: any | undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    weight?: undefined;
                    length?: undefined;
                    height?: undefined;
                    width?: undefined;
                    origin_country?: undefined;
                    hs_code?: undefined;
                    mid_code?: undefined;
                    material?: undefined;
                    collection_id?: undefined;
                    collection?: undefined;
                    type_id?: undefined;
                    type?: undefined;
                    tags?: {
                        id?: undefined;
                        value?: undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        products?: any | undefined;
                        onInit?: undefined;
                    } | undefined;
                    images?: {
                        id?: undefined;
                        url?: undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        products?: any | undefined;
                        onInit?: undefined;
                        onCreate?: undefined;
                    } | undefined;
                    categories?: any | undefined;
                    discountable?: undefined;
                    external_id?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    metadata?: undefined;
                    onInit?: undefined;
                } | undefined;
                onInit?: undefined;
                onCreate?: undefined;
            } | undefined;
            created_at?: undefined;
            updated_at?: undefined;
            deleted_at?: undefined;
            products?: {
                id?: undefined;
                title?: undefined;
                handle?: undefined;
                subtitle?: undefined;
                description?: undefined;
                is_giftcard?: undefined;
                status?: undefined;
                thumbnail?: undefined;
                options?: {
                    id?: undefined;
                    title?: undefined;
                    product_id?: undefined;
                    product?: undefined;
                    values?: {
                        id?: undefined;
                        value?: undefined;
                        option_id?: undefined;
                        option?: undefined;
                        variants?: {
                            id?: undefined;
                            title?: undefined;
                            sku?: undefined;
                            barcode?: undefined;
                            ean?: undefined;
                            upc?: undefined;
                            inventory_quantity?: undefined;
                            allow_backorder?: undefined;
                            manage_inventory?: undefined;
                            hs_code?: undefined;
                            origin_country?: undefined;
                            mid_code?: undefined;
                            material?: undefined;
                            weight?: undefined;
                            length?: undefined;
                            height?: undefined;
                            width?: undefined;
                            metadata?: undefined;
                            variant_rank?: undefined;
                            product_id?: undefined;
                            product?: undefined;
                            options?: any | undefined;
                            created_at?: undefined;
                            updated_at?: undefined;
                            deleted_at?: undefined;
                            onInit?: undefined;
                        } | undefined;
                        metadata?: undefined;
                        created_at?: undefined;
                        updated_at?: undefined;
                        deleted_at?: undefined;
                        onInit?: undefined;
                    } | undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    onInit?: undefined;
                } | undefined;
                variants?: {
                    id?: undefined;
                    title?: undefined;
                    sku?: undefined;
                    barcode?: undefined;
                    ean?: undefined;
                    upc?: undefined;
                    inventory_quantity?: undefined;
                    allow_backorder?: undefined;
                    manage_inventory?: undefined;
                    hs_code?: undefined;
                    origin_country?: undefined;
                    mid_code?: undefined;
                    material?: undefined;
                    weight?: undefined;
                    length?: undefined;
                    height?: undefined;
                    width?: undefined;
                    metadata?: undefined;
                    variant_rank?: undefined;
                    product_id?: undefined;
                    product?: undefined;
                    options?: any | undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    onInit?: undefined;
                } | undefined;
                weight?: undefined;
                length?: undefined;
                height?: undefined;
                width?: undefined;
                origin_country?: undefined;
                hs_code?: undefined;
                mid_code?: undefined;
                material?: undefined;
                collection_id?: undefined;
                collection?: undefined;
                type_id?: undefined;
                type?: undefined;
                tags?: {
                    id?: undefined;
                    value?: undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    products?: any | undefined;
                    onInit?: undefined;
                } | undefined;
                images?: {
                    id?: undefined;
                    url?: undefined;
                    metadata?: undefined;
                    created_at?: undefined;
                    updated_at?: undefined;
                    deleted_at?: undefined;
                    products?: any | undefined;
                    onInit?: undefined;
                    onCreate?: undefined;
                } | undefined;
                categories?: any | undefined;
                discountable?: undefined;
                external_id?: undefined;
                created_at?: undefined;
                updated_at?: undefined;
                deleted_at?: undefined;
                metadata?: undefined;
                onInit?: undefined;
            } | undefined;
            onInit?: undefined;
            onCreate?: undefined;
        }>;
        options?: DAL.OptionsQuery<ProductCategory, any> | undefined;
    };
    find(findOptions?: DAL.FindOptions<ProductCategory>, transformOptions?: ProductCategoryTransformOptions, context?: Context): Promise<ProductCategory[]>;
    buildProductCategoriesWithTree(include: {
        descendants?: boolean;
        ancestors?: boolean;
    }, productCategories: ProductCategory[], findOptions?: DAL.FindOptions<ProductCategory>, context?: Context): Promise<ProductCategory[]>;
    findAndCount(findOptions?: DAL.FindOptions<ProductCategory>, transformOptions?: ProductCategoryTransformOptions, context?: Context): Promise<[ProductCategory[], number]>;
    delete(id: string, context?: Context): Promise<void>;
    create(data: ProductTypes.CreateProductCategoryDTO, context?: Context): Promise<ProductCategory>;
    update(id: string, data: ProductTypes.UpdateProductCategoryDTO, context?: Context): Promise<ProductCategory>;
    protected fetchReorderConditions(productCategory: ProductCategory, data: ProductTypes.UpdateProductCategoryDTO, shouldDeleteElement?: boolean): ReorderConditions;
    protected performReordering(manager: SqlEntityManager, conditions: ReorderConditions): Promise<void>;
    protected shiftSiblings(manager: SqlEntityManager, conditions: ReorderConditions): Promise<void>;
}
