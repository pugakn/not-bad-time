"use client";
import { Logo, ScheduleCont, ScheduleOverlay } from "./style";
import { Button } from "../globalStyles";
import { AuthContext, FirebaseAuth } from "../Firebase";
import { FaGoogle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { useGetMeetingsForUserQuery } from "@/generated/client";

export default function Schedule() {
  const res = useGetMeetingsForUserQuery({});
  console.log(res);

  const signout = () => {
    FirebaseAuth.signOut();
  };

  const createMeeting = () => {};

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
      <Button primary onClick={createMeeting}>
        Create Meeting
      </Button>

      <Logo src="/schedule/logo.svg" />
    </ScheduleCont>
  );
}
