import Joi from "joi";

export const MeetingsForUserArgs = Joi.object({});
export const CreateMeetingArgs = Joi.object({});
export const DeleteMeetingArgs = Joi.object({
  id: Joi.string().required(),
});
