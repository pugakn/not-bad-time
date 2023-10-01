import {
  CalendarDay,
  Meeting,
  MeetingState,
  Resolvers,
} from "@/generated/server";
import { Context } from "@/gql/resolvers/types.js";
import admin from "firebase-admin";
import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    meeting: async (_: unknown, { meetingId }, context: Context) => {
      console.log("meeting: ", meetingId);

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
    calendarForMeeting: async (_: unknown, { meetingId }, context: Context) => {
      console.log("calendarForMeeting: ", meetingId);
      function generateCalendar() {
        const userTimeZone = "America/New_York";
        const today = DateTime.now().setZone(userTimeZone);
        const calendar = [];

        for (let i = 0; i < 3; i++) {
          const currentDate = today.plus({ days: 1 + i });
          const workingHoursStart = currentDate.set({ hour: 9, minute: 0 });
          const workingHoursEnd = currentDate.set({ hour: 17, minute: 0 });

          const timeslots = [];

          let currentTime = workingHoursStart.plus({
            hours: Math.floor(Math.random() * 3),
          });
          while (currentTime < workingHoursEnd && timeslots.length < 4) {
            timeslots.push({
              time: currentTime.toISO(),
              available: true,
              id: uuidv4(),
            });
            currentTime = currentTime.plus({ minutes: 30 });
          }

          const calendarDay = {
            date: currentDate.toISO(),
            times: timeslots,
            id: uuidv4(),
          };

          calendar.push(calendarDay);
        }

        return calendar as CalendarDay[];
      }

      const calendar = generateCalendar();
      return calendar;
    },
  },
  Mutation: {
    scheduleMeeting: async (
      _: unknown,
      { meetingId, time, invitedEmail },
      context: Context
    ) => {
      console.log("scheduleMeeting: ", meetingId);

      time = DateTime.fromISO(new Date(time).toISOString());

      const meeting = await admin
        .firestore()
        .collection("meetings")
        .doc(meetingId)
        .get();

      const meetingData = meeting.data() as Meeting;
      meetingData.state = MeetingState.Scheduled;
      meetingData.startDate = time.toISO();
      meetingData.endDate = time.plus({ minutes: 30 }).toISO();
      meetingData.updatedAt = new Date();
      meetingData.invitedEmail = invitedEmail.toLowerCase();

      await admin
        .firestore()
        .collection("meetings")
        .doc(meetingId)
        .set(meetingData);

      return meetingData;
    },
    deleteMeeting: async (_: unknown, { meetingId }, context: Context) => {
      console.log("deleteMeeting: ", context.userId);

      await admin.firestore().collection("meetings").doc(meetingId).delete();
      return true;
    },
    createMeeting: async (_: unknown, {}, context: Context) => {
      console.log("createMeeting: ", context.userId);

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
