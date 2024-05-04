export interface StoreGetProductsProductParams {
    /**
     * The ID of the sales channel the customer is viewing the product from.
     */
    sales_channel_id?: string;
    /**
     * The ID of the cart. This is useful for accurate pricing based on the cart's context.
     */
    cart_id?: string;
    /**
     * The ID of the region. This is useful for accurate pricing based on the selected region.
     */
    region_id?: string;
    /**
     * Comma-separated relations that should be expanded in the returned product.
     */
    expand?: string;
    /**
     * Comma-separated fields that should be included in the returned product.
     */
    fields?: string;
    /**
     * A 3 character ISO currency code. This is useful for accurate pricing based on the selected currency.
     */
    currency_code?: string;
}
