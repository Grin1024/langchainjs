import { logVersion010MigrationWarning } from "../util/entrypoint_deprecation.js";

/* #__PURE__ */ logVersion010MigrationWarning({
  oldEntrypointName: "vectorstores/vercel_postgres",
});
export * from "@langchain/community/vectorstores/vercel_postgres";