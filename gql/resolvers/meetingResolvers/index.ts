import { CreateMeetingInput, Resolvers } from "@/generated/server";
import { Context } from "@/gql/resolvers/types.js";
export default {
  Query: {},
  Mutation: {
    createMeeting: async (_: unknown, { input }, context: Context) => {
      return {} as any;
    },
  },
} as Partial<Resolvers>;
