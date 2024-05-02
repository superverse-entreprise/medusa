/**
 * @oas [get] /admin/workflows-executions/{workflow_id}/{transaction_id}
 * operationId: GetWorkflowsExecutionsWorkflow_idTransaction_id
 * summary: "List "
 * description: Retrieve a list of  in a workflows execution. The  can be filtered
 *   by fields like FILTER FIELDS. The  can also be paginated.
 * x-authenticated: true
 * parameters:
 *   - name: workflow_id
 *     in: path
 *     description: The workflows execution's workflow id.
 *     required: true
 *     schema:
 *       type: string
 *   - name: transaction_id
 *     in: path
 *     description: The workflows execution's transaction id.
 *     required: true
 *     schema:
 *       type: string
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: >-
 *       curl
 *       '{backend_url}/admin/workflows-executions/{workflow_id}/{transaction_id}'
 *       \
 * 
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Workflows Executions
 * responses:
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         required:
 *           - fields
 *         properties:
 *           fields:
 *             type: string
 *             title: fields
 *             description: The workflows execution's fields.
 * 
*/

