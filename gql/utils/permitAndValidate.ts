import * as Joi from "joi";

export default function permitAndValidate<T>(data: T, schema: Joi.Schema): T {
  const { error, value } = schema.validate(data, { stripUnknown: true });
  if (error) {
    throw new Error("requiredParams");
  }
  return value;
}
