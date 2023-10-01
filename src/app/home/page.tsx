"use client";
import { Logo, ScheduleCont, ScheduleOverlay } from "./style";
import { Button } from "../globalStyles";
import { AuthContext, FirebaseAuth } from "../Firebase";
import { FaGoogle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import {
  useCreateMeetingMutation,
  useGetMeetingsForUserQuery,
} from "@/generated/client";

export default function Schedule() {
  const res = useGetMeetingsForUserQuery({});
  const [createMeeting, createMeetingRes] = useCreateMeetingMutation();
  console.log({ createMeetingRes });

  const signout = () => {
    FirebaseAuth.signOut();
  };

  const onCreateMeeting = async () => {
    const res = await createMeeting();
    console.log({ res });
  };

  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (!authContext.user) redirect("/auth");
  }, [authContext]);

  return (
    <ScheduleCont>
      <ScheduleOverlay />
      <Button primary onClick={signout}>
        Log out
      </Button>
      <Button primary onClick={onCreateMeeting}>
        Create Meeting
      </Button>

      <Logo src="/schedule/logo.svg" />
    </ScheduleCont>
  );
}
