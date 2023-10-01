import Joi from "joi";

export const MeetingsForUserArgs = Joi.object({});
export const MeetingsByIdArgs = Joi.object({
  meetingId: Joi.string().required(),
});
export const CreateMeetingArgs = Joi.object({});
export const DeleteMeetingArgs = Joi.object({
  meetingId: Joi.string().required(),
});
