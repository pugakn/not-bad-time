import { shield, chain } from "graphql-shield";
import { isAuthed, isDenied, isMeetingOwner, validateQuery } from "./rules";
import {
  CreateMeetingArgs,
  DeleteMeetingArgs,
  MeetingsForUserArgs,
} from "./schemas";

export default shield(
  {
    Query: {
      meetingsForUser: chain(isAuthed, validateQuery(MeetingsForUserArgs)),
      "*": isDenied,
    },

    Mutation: {
      deleteMeeting: chain(
        isAuthed,
        isMeetingOwner,
        validateQuery(DeleteMeetingArgs)
      ),
      createMeeting: chain(isAuthed, validateQuery(CreateMeetingArgs)),
      "*": isDenied,
    },
  },
  {
    // All queries must be allowlisted
    allowExternalErrors: true,
  }
);
