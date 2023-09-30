import { rule } from "graphql-shield";
import { cloneDeep } from "lodash";
import { GraphQLError } from "graphql";
import permitAndValidate from "@/gql/utils/permitAndValidate";

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
