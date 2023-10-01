import { rule } from "graphql-shield";
import { cloneDeep } from "lodash";
import { GraphQLError } from "graphql";
import permitAndValidate from "@/gql/utils/permitAndValidate";
import admin from "firebase-admin";

export const validateQuery = (argsJsonSchema: any) =>
  rule({ cache: "contextual" })(async (_, args) => {
    try {
      const newArgs = cloneDeep(permitAndValidate(args, argsJsonSchema));
      // permitAndValidate may coerce args or omit disallowed keys,
      // so we need to overwrite the original args
      Object.keys(args).forEach((key) => delete args[key]);
      Object.assign(args, newArgs);
    } catch (e: any) {
      return Promise.reject(new GraphQLError(e.name, ...(e.logs || [])));
    }
    return true;
  });

export const isDenied = rule()(() => {
  return Promise.reject(new GraphQLError("Forbidden"));
});

export const isAuthed = rule({ cache: "contextual" })(async (_, __, ctx) => {
  const { userId } = ctx;
  if (userId) return true;
  return Promise.reject(new GraphQLError("No session found"));
});

export const isMeetingOwner = rule({ cache: "contextual" })(
  async (_, { meetingId }, ctx) => {
    const { userId } = ctx;
    const meeting = await admin
      .firestore()
      .collection("meetings")
      .doc(meetingId)
      .get();
    if (!meeting?.exists) return Promise.reject(new GraphQLError("Forbidden"));
    if (meeting?.data()?.userId === userId) return true;
    return Promise.reject(new GraphQLError("Forbidden"));
  }
);
