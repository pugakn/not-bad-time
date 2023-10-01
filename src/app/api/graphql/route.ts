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

import admin from "firebase-admin";

//@ts-ignore
if (!global.FirebaseAdmin) {
  let serviceAccount = require("/firebase-admin-keys.json");
  //@ts-ignore
  global.FirebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

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
  async context(req: any, res: NextApiResponse) {
    const authTokenHeader = req.request.headers.get("authorization");
    let userId = null;
    if (authTokenHeader) {
      admin.auth().verifyIdToken;
      const r = await admin
        .auth()
        .verifyIdToken(authTokenHeader.replace("Bearer ", ""));
      userId = r.uid;
    }

    return {
      req: req.request,
      res,
      userId,
    } as Context;
  },
});

export { handleRequest as GET, handleRequest as POST };
