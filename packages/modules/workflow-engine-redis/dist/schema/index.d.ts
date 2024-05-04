declare const _default: "\nscalar DateTime\nscalar JSON\n\nenum TransactionState {\n  NOT_STARTED\n  INVOKING\n  WAITING_TO_COMPENSATE\n  COMPENSATING\n  DONE\n  REVERTED\n  FAILED\n}\n\ntype WorkflowExecution {\n  id: ID!\n  created_at: DateTime!\n  updated_at: DateTime!\n  deleted_at: DateTime\n  workflow_id: string\n  transaction_id: string\n  execution: JSON\n  context: JSON\n  state: TransactionState\n}\n";
export default _default;
//# sourceMappingURL=index.d.ts.map