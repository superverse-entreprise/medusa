import type { ShippingProfile } from "./ShippingProfile";
/**
 * The list of shipping profiles.
 */
export interface AdminShippingProfilesListRes {
    /**
     * An array of shipping profiles details.
     */
    shipping_profiles: Array<ShippingProfile>;
}
