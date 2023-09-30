import { shield } from "graphql-shield";
import { isDenied, validateQuery } from "./rules";
import { MeetingsByUserIdArgs } from "./schemas";

export default shield(
  {
    Query: {
      meetingsByUserId: validateQuery(MeetingsByUserIdArgs),
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
