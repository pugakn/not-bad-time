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
  CalendarDay,
  CalendarDayHeader,
  Logo,
  ScheduleCalendarCont,
  ScheduleCont,
  ScheduleInfo,
  ScheduleOverlay,
} from "./style";
import { useState } from "react";

export default function Schedule() {
  const [showCalendar, setShowCalendar] = useState(true);

  const CalendarCContC = () => {
    return (
      <ScheduleCalendarCont>
        <TxtLarge1 className="center">
          Pick a time that works best for you
        </TxtLarge1>
        <Label className="center">Select the time on</Label>
        <Section className="noTop center">
          <CalendarDay>
            <CalendarDayHeader>
              <TxtRegular>Mon</TxtRegular>
              <TxtRegular>12</TxtRegular>
            </CalendarDayHeader>
          </CalendarDay>
          <Button hero>Continue</Button>
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
          <Button hero>Choose a time</Button>
        </Section>
      </ScheduleInfo>
    );
  };

  return (
    <ScheduleCont>
      <ScheduleOverlay />
      <Logo src="/schedule/logo.svg" />
      {!showCalendar && <InfoContC />}
      {showCalendar && <CalendarCContC />}
    </ScheduleCont>
  );
}
