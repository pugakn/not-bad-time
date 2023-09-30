"use client";

import {
  Button,
  Label,
  Section,
  TxtLarge1,
  TxtLarge2,
  TxtRegular,
} from "@/app/globalStyles";
import {
  Avatar,
  CalendarBody,
  CalendarDayHeader,
  CalendarSection,
  CalendarTimeButton,
  Logo,
  ScheduleCalendarCont,
  ScheduleCont,
  ScheduleInfo,
  ScheduleOverlay,
} from "./style";
import { useState } from "react";
import CalendarDay from "./CalendarDay";

export default function Schedule() {
  const [showCalendar, setShowCalendar] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  const days = [
    { id: "1", date: "12/12/2021" },
    { id: "2", date: "12/12/2021" },
  ];

  const CalendarCContC = () => {
    return (
      <ScheduleCalendarCont>
        <Section>
          <TxtLarge2 className="center">
            Pick a time that works best for you
          </TxtLarge2>
        </Section>
        <Label className="center">Select the time on</Label>
        <CalendarSection>
          {days.map((day) => (
            <CalendarDay
              key={day.id}
              onSelect={setSelected}
              selected={selected}
              date={new Date(day.date)}
            />
          ))}
        </CalendarSection>
        <Section className="center">
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
