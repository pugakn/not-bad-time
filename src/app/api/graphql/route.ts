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
import { NextApiRequest, NextApiResponse } from "next";

const typeDefs = [Schema];

const armor = new EnvelopArmor();
const enhancements = armor.protect();

const schema = createSchema({
  typeDefs: [typeDefs, ...scalarTypeDefs],
  resolvers: {
    ...resolvers,
  } as Resolvers,
});

const { handleRequest } = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: applyMiddleware(schema, authorizationResolvers.generate(schema)),
  plugins: [...enhancements.plugins],
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
  async context(req: NextApiRequest, res: NextApiResponse) {
    return {
      req,
      res,
    } as Context;
  },
});

export { handleRequest as GET, handleRequest as POST };
