"use client";
import {
  LogOutButton,
  Logo,
  MeetingsTableCol,
  MeetingsTableCont,
  MeetingsTableRow,
  ScheduleCont,
  ScheduleOverlay,
} from "./style";
import { Button, Section } from "../globalStyles";
import { AuthContext, FirebaseAuth } from "../Firebase";
import { FaGoogle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import {
  useCreateMeetingMutation,
  useDeleteMeetingMutation,
  useGetMeetingsForUserQuery,
} from "@/generated/client";

import { FaCopy, FaTrash } from "react-icons/fa";
import { useCopyToClipboard } from "usehooks-ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function formatDateToCustomString(date: Date, onlyTime = false) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure the day and month are formatted with leading zeros if necessary
  const formattedDayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDateString = `${dayOfWeek} ${month} ${formattedDayOfMonth} ${hours}:${formattedMinutes}`;

  return onlyTime ? formattedDateString.split(" ")[3] : formattedDateString;
}

export default function Schedule() {
  const meetingsData = useGetMeetingsForUserQuery({
    fetchPolicy: "network-only",
  });
  console.log({ meetingsData });
  const [createMeeting, createMeetingRes] = useCreateMeetingMutation();
  const [deleteMeeting] = useDeleteMeetingMutation();

  const signout = () => {
    FirebaseAuth.signOut();
  };

  const onCreateMeeting = async () => {
    createMeeting();
  };

  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (!authContext.user) redirect("/auth");
  }, [authContext]);

  const MeetingTableC = () => {
    const [value, copy] = useCopyToClipboard();
    const onCopyClick = (id: string) => {
      copy(`${process.env.NEXT_PUBLIC_BASE_URL}/schedule/${id}`);
      toast("Copied to clipboard! 📋", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        type: "success",
      });
    };
    const onDeleteClick = (id: string) => {
      deleteMeeting({ variables: { id } });
    };
    return (
      <MeetingsTableCont>
        {meetingsData.data?.meetingsForUser.map((meeting) => {
          return (
            <MeetingsTableRow key={meeting.id}>
              <MeetingsTableCol>
                <Button
                  primary
                  onClick={() => {
                    onCopyClick(meeting.id);
                  }}
                >
                  <FaCopy />
                  Copy link
                </Button>
              </MeetingsTableCol>
              {meeting.startDate && (
                <MeetingsTableCol>
                  {formatDateToCustomString(new Date(meeting.startDate))} -{" "}
                  {formatDateToCustomString(new Date(meeting.endDate), true)}
                </MeetingsTableCol>
              )}
              <MeetingsTableCol>{meeting.state}</MeetingsTableCol>
              <MeetingsTableCol>{meeting.invitedEmail}</MeetingsTableCol>
              <MeetingsTableCol>
                <Button
                  primary
                  onClick={() => {
                    onDeleteClick(meeting.id);
                  }}
                >
                  <FaTrash />
                </Button>
              </MeetingsTableCol>
            </MeetingsTableRow>
          );
        })}
      </MeetingsTableCont>
    );
  };

  return (
    <ScheduleCont>
      <ToastContainer />
      <ScheduleOverlay />
      <LogOutButton primary onClick={signout}>
        Log out
      </LogOutButton>
      {(meetingsData.data?.meetingsForUser?.length || 0) > 0 && (
        <MeetingTableC />
      )}
      <Section>
        <Button primary onClick={onCreateMeeting}>
          Create Meeting
        </Button>
      </Section>

      <Logo src="/schedule/logo.svg" />
    </ScheduleCont>
  );
}
