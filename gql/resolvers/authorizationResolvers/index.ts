import { shield } from "graphql-shield";
import { isDenied, validateQuery } from "./rules";

export default shield(
  {
    Query: {
      "*": isDenied,
    },

    Mutation: {
      "*": isDenied,
    },
  },
  {
    // All queries must be allowlisted
    allowExternalErrors: true,
  }
);
