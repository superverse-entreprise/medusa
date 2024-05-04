/**
 * The details of the products to delete from the product category.
 */
export interface AdminDeleteProductCategoriesCategoryProductsBatchReq {
    /**
     * The IDs of the products to delete from the product category.
     */
    product_ids: Array<{
        /**
         * The ID of a product
         */
        id: string;
    }>;
}
