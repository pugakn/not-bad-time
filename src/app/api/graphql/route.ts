import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { createSchema } from "graphql-yoga";
import { createYoga } from "graphql-yoga";
import { applyMiddleware } from "graphql-middleware";
import { EnvelopArmor } from "@escape.tech/graphql-armor";
import { Context } from "@/gql/resolvers/types";
import authorizationResolvers from "@/gql/resolvers/authorizationResolvers";
import Schema from "@/gql/schemas/Schema.gql";
import resolvers from "@/gql/resolvers";
import { Resolvers } from "@/generated/server";

const typeDefs = [Schema];

const armor = new EnvelopArmor();
const enhancements = armor.protect();

const schema = createSchema({
  typeDefs: [typeDefs, ...scalarTypeDefs],
  resolvers: {
    ...resolvers,
  } as Resolvers,
});

const { handleRequest } = createYoga({
  schema: applyMiddleware(schema, authorizationResolvers.generate(schema)),
  plugins: [...enhancements.plugins],
  async context(req: Request) {
    return {} as any;
  },
});

export { handleRequest as GET, handleRequest as POST };
