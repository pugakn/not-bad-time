import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["./gql/schemas/*.gql"],
  documents: ["./gql/mutations/*.gql", "./gql/queries/*.gql"],
  generates: {
    "./generated/server.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
        "typescript-apollo-client-helpers",
      ],
    },
    "./generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
