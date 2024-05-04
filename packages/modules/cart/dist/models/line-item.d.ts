import { BigNumberRawValue, DAL } from "@medusajs/types";
import { BigNumber } from "@medusajs/utils";
import { Collection, OptionalProps } from "@mikro-orm/core";
import Cart from "./cart";
import LineItemAdjustment from "./line-item-adjustment";
import LineItemTaxLine from "./line-item-tax-line";
type OptionalLineItemProps = "is_discoutable" | "is_tax_inclusive" | "compare_at_unit_price" | "requires_shipping" | "cart" | DAL.SoftDeletableEntityDateColumns;
export default class LineItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    cart_id: string;
    cart: Cart;
    title: string;
    subtitle: string | null;
    thumbnail: string | null;
    quantity: number;
    variant_id: string | null;
    product_id: string | null;
    product_title: string | null;
    product_description: string | null;
    product_subtitle: string | null;
    product_type: string | null;
    product_collection: string | null;
    product_handle: string | null;
    variant_sku: string | null;
    variant_barcode: string | null;
    variant_title: string | null;
    variant_option_values: Record<string, unknown> | null;
    requires_shipping: boolean;
    is_discountable: boolean;
    is_tax_inclusive: boolean;
    compare_at_unit_price?: BigNumber | number | null;
    raw_compare_at_unit_price: BigNumberRawValue | null;
    unit_price: BigNumber | number;
    raw_unit_price: BigNumberRawValue;
    tax_lines: Collection<LineItemTaxLine, object>;
    adjustments: Collection<LineItemAdjustment, object>;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
