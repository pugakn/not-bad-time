import { CreateMeetingInput, Resolvers } from "@/generated/server";
import { Context } from "@/gql/resolvers/types.js";
export default {
  Query: {
    meetingsFroUser: async (_: unknown, {}, context: Context) => {
      console.log({ _, context });
      return {} as any;
    },
  },
  Mutation: {
    createMeeting: async (_: unknown, { input }, context: Context) => {
      return {} as any;
    },
  },
} as Partial<Resolvers>;
