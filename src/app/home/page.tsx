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
import { formatDateToCustomString } from "@/utils";

export default function Schedule() {
  const meetingsData = useGetMeetingsForUserQuery();

  console.log({ meetingsData: meetingsData.data?.meetingsForUser.length });
  const [createMeeting, createMeetingRes] = useCreateMeetingMutation({
    refetchQueries: ["GetMeetingsForUser"],
  });
  const [deleteMeeting] = useDeleteMeetingMutation({
    refetchQueries: ["GetMeetingsForUser"],
  });

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
    const onDeleteClick = (meetingId: string) => {
      deleteMeeting({ variables: { meetingId } });
    };
    return (
      <MeetingsTableCont>
        {meetingsData.data?.meetingsForUser.map((meeting) => {
          return (
            <MeetingsTableRow key={meeting.id}>
              <MeetingsTableCol>
                <Button
                  $primary
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
                  $primary
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
      <LogOutButton $primary onClick={signout}>
        Log out
      </LogOutButton>
      {(meetingsData.data?.meetingsForUser?.length || 0) > 0 && (
        <MeetingTableC />
      )}
      <Section>
        <Button $primary onClick={onCreateMeeting}>
          Create Meeting
        </Button>
      </Section>

      <Logo src="/schedule/logo.svg" />
    </ScheduleCont>
  );
}
