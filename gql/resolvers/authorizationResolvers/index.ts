import { chain, shield } from "graphql-shield";
import {
  MeetingExists,
  isAuthed,
  isDenied,
  isMeetingOwner,
  validateQuery,
} from "./rules";
import {
  CreateMeetingArgs,
  DeleteMeetingArgs,
  MeetingsByIdArgs,
  MeetingsForUserArgs,
  ScheduleMeetingArgs,
} from "./schemas";

export default shield(
  {
    Query: {
      meetingsForUser: chain(isAuthed, validateQuery(MeetingsForUserArgs)),
      meeting: chain(validateQuery(MeetingsByIdArgs)),
      calendarForMeeting: chain(validateQuery(MeetingsByIdArgs)),
      "*": isDenied,
    },

    Mutation: {
      deleteMeeting: chain(
        isAuthed,
        isMeetingOwner,
        validateQuery(DeleteMeetingArgs)
      ),
      createMeeting: chain(isAuthed, validateQuery(CreateMeetingArgs)),
      scheduleMeeting: chain(MeetingExists, validateQuery(ScheduleMeetingArgs)),
      "*": isDenied,
    },
  },
  {
    // All queries must be allowlisted
    allowExternalErrors: true,
  }
);
