import { BigNumberRawValue, DAL } from "@medusajs/types";
import { BigNumber } from "@medusajs/utils";
import { OptionalProps } from "@mikro-orm/core";
import LineItem from "./line-item";
import Order from "./order";
type OptionalLineItemProps = DAL.EntityDateColumns;
export default class OrderItem {
    [OptionalProps]?: OptionalLineItemProps;
    id: string;
    order_id: string;
    version: number;
    order: Order;
    item_id: string;
    item: LineItem;
    quantity: BigNumber | number;
    raw_quantity: BigNumberRawValue;
    fulfilled_quantity: BigNumber | number;
    raw_fulfilled_quantity: BigNumberRawValue;
    shipped_quantity: BigNumber | number;
    raw_shipped_quantity: BigNumberRawValue;
    return_requested_quantity: BigNumber | number;
    raw_return_requested_quantity: BigNumberRawValue;
    return_received_quantity: BigNumber | number;
    raw_return_received_quantity: BigNumberRawValue;
    return_dismissed_quantity: BigNumber | number;
    raw_return_dismissed_quantity: BigNumberRawValue;
    written_off_quantity: BigNumber | number;
    raw_written_off_quantity: BigNumberRawValue;
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
