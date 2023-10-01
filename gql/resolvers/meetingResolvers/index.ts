import { Meeting, MeetingState, Resolvers } from "@/generated/server";
import { Context } from "@/gql/resolvers/types.js";
import admin from "firebase-admin";
import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    meeting: async (_: unknown, { meetingId }, context: Context) => {
      console.log("meeting: ", context.userId);

      const meeting = await admin
        .firestore()
        .collection("meetings")
        .doc(meetingId)
        .get();

      return meeting.data() as Meeting;
    },
    meetingsForUser: async (_: unknown, {}, context: Context) => {
      console.log("meetingsForUser: ", context.userId);

      const userMeetings = await admin
        .firestore()
        .collection("meetings")
        .where("userId", "==", context.userId)
        .get();

      const data = userMeetings.docs.map((doc) => {
        return doc.data();
      });
      return data as Meeting[];
    },
  },
  Mutation: {
    deleteMeeting: async (_: unknown, { meetingId }, context: Context) => {
      console.log("deleteMeeting: ", context.userId);

      await admin.firestore().collection("meetings").doc(meetingId).delete();
      return true;
    },
    createMeeting: async (_: unknown, {}, context: Context) => {
      console.log("createMeeting: ", context.userId);

      //const startDate = new Date(input.startDate);
      //const endDate = new Date(startDate.getTime() + 30 * 60000);
      const meeting = {
        userId: context.userId,
        state: MeetingState.Pending,
        id: uuidv4(),
        endDate: null,
        startDate: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      admin.firestore().collection("meetings").doc(meeting.id).set(meeting);
      return meeting;
    },
  },
} as Partial<Resolvers>;
