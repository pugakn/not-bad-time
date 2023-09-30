"use client";

import {
  Button,
  Label,
  Section,
  TxtLarge1,
  TxtRegular,
} from "@/app/globalStyles";
import {
  Avatar,
  Logo,
  ScheduleCalendarCont,
  ScheduleCont,
  ScheduleInfo,
} from "./style";
import { useState } from "react";

export default function Schedule() {
  const [showCalendar, setShowCalendar] = useState(true);

  const theme = {
    colors: {
      primary: "#0070f3",
      secondary: "#ff0000",
      bg: "#ffffff",
      surface: "#ffffff",
    },
  };

  const CalendarCContC = () => {
    return (
      <ScheduleCalendarCont theme={theme}>
        <TxtLarge1 className="center">
          Pick a time that works best for you
        </TxtLarge1>
        <Label className="center">Select the time on</Label>
        <Section className="noTop center">
          <Button hero>Continue</Button>
        </Section>
      </ScheduleCalendarCont>
    );
  };

  const InfoContC = () => {
    return (
      <ScheduleInfo theme={theme}>
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
          <Button hero>Choose a time</Button>
        </Section>
      </ScheduleInfo>
    );
  };

  return (
    <ScheduleCont>
      <Logo src="/schedule/logo.svg" />
      {!showCalendar && <InfoContC />}
      {showCalendar && <CalendarCContC />}
    </ScheduleCont>
  );
}
