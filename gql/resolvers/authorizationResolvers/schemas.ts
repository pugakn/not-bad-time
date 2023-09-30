import Joi from "joi";

export const MeetingsByUserIdArgs = Joi.object({
  userId: Joi.string().required(),
});
