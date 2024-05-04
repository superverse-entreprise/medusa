/**
 * The details of the products to add to the product category.
 */
export interface AdminPostProductCategoriesCategoryProductsBatchReq {
    /**
     * The IDs of the products to add to the product category
     */
    product_ids: Array<{
        /**
         * The ID of the product
         */
        id: string;
    }>;
}
