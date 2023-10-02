"use client";
import {
  MeetingState,
  useCreateMeetingMutation,
  useDeleteMeetingMutation,
  useGetMeetingsForUserQuery,
} from "@/generated/client";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext, FirebaseAuth } from "../Firebase";
import {
  Button,
  Logo,
  PageCont,
  PageContOverlay,
  Section,
  Tag,
} from "../globalStyles";
import {
  LogOutButton,
  MeetingsTableCol,
  MeetingsTableCont,
  MeetingsTableRow,
} from "./style";

import { formatDateToCustomString } from "@/utils";
import { FaCopy, FaTrash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCopyToClipboard } from "usehooks-ts";

const Home = () => {
  const meetingsData = useGetMeetingsForUserQuery({
    fetchPolicy: "network-only",
  });

  console.log({ meetingsData: meetingsData.data?.meetingsForUser });
  const [createMeeting, createMeetingRes] = useCreateMeetingMutation({
    refetchQueries: ["GetMeetingsForUser"],
  });
  const [deleteMeeting, deleteMeetingRes] = useDeleteMeetingMutation({
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
        <thead>
          <tr>
            <th>Link</th>
            <th>Date</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
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
                {!meeting.startDate && <MeetingsTableCol>N/A</MeetingsTableCol>}
                <MeetingsTableCol>
                  {meeting.invitedEmail || "N/A"}
                </MeetingsTableCol>
                <MeetingsTableCol>
                  <Tag
                    className={
                      meeting.state === MeetingState.Scheduled ? "positive" : ""
                    }
                  >
                    {meeting.state}
                  </Tag>
                </MeetingsTableCol>
                <MeetingsTableCol>
                  <Button
                    $negative
                    disabled={deleteMeetingRes.loading}
                    onClick={() => {
                      onDeleteClick(meeting.id);
                    }}
                  >
                    <FaTrash />
                    {deleteMeetingRes.loading && (
                      <ClipLoader color="primary" size={10} />
                    )}
                  </Button>
                </MeetingsTableCol>
              </MeetingsTableRow>
            );
          })}
        </tbody>
      </MeetingsTableCont>
    );
  };

  return (
    <PageCont>
      <ToastContainer />
      <PageContOverlay />
      <LogOutButton $primary onClick={signout}>
        Log out
      </LogOutButton>
      {(meetingsData.data?.meetingsForUser?.length || 0) > 0 && (
        <MeetingTableC />
      )}
      <Section>
        <Button
          $primary
          onClick={onCreateMeeting}
          disabled={createMeetingRes.loading}
        >
          {createMeetingRes.loading && <ClipLoader color="white" size={10} />}
          Create Meeting
        </Button>
      </Section>

      <Logo src="/schedule/logo.svg" />
    </PageCont>
  );
};

export default Home;
