export interface AdminPostAppsReq {
    /**
     * Name of the application for to generate the token for.
     */
    application_name: string;
    /**
     * State of the application.
     */
    state: string;
    /**
     * The code for the generated token.
     */
    code: string;
}
