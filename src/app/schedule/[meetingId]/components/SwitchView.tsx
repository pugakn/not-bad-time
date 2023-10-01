"use client";
import {
  Button,
  Label,
  Section,
  TxtLarge1,
  TxtLarge2,
  TxtRegular,
} from "@/app/globalStyles";
import { useGetMeetingByIdQuery } from "@/generated/client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, ScheduleCalendarCont, ScheduleInfo } from "../style";
import CalendarDayList from "./CalendarDayList";

export default function Schedule({ meetingId }: { meetingId: string }) {
  const [showCalendar, setShowCalendar] = useState(true);
  if (!meetingId) {
    redirect("/404");
  }

  const meetingData = useGetMeetingByIdQuery({
    variables: { meetingId },
  });

  useEffect(() => {
    console.log({ meetingId, meetingData: meetingData.data?.meeting });
    if (
      meetingData.called &&
      !meetingData.loading &&
      !meetingData.data?.meeting.id
    ) {
      redirect("/404");
    }
  }, [meetingData]);

  const CalendarCContC = () => {
    return (
      <ScheduleCalendarCont>
        <Section>
          <TxtLarge2 className="center">
            Pick a time that works best for you
          </TxtLarge2>
        </Section>
        <Label className="center">Select the time on</Label>
        <CalendarDayList />
        <Section className="center">
          <Button $hero>Continue</Button>
        </Section>
      </ScheduleCalendarCont>
    );
  };

  const InfoContC = () => {
    return (
      <ScheduleInfo>
        <Section className="noBottom">
          <Avatar src="/schedule/avatar.jpeg" />
        </Section>
        <Section className="noTop center">
          <TxtLarge1 className="center">Hey there!</TxtLarge1>
          <TxtRegular className="center">
            Please click the button below to select a meeting with me at a time
            convenient for you.
          </TxtRegular>
        </Section>
        <Section className="noTop center">
          <Button $hero>Choose a time</Button>
        </Section>
      </ScheduleInfo>
    );
  };

  return (
    <>
      {!showCalendar && <InfoContC />}
      {showCalendar && <CalendarCContC />}
    </>
  );
}