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
  const [selected, setSelected] = useState<string | null>(null);

  const days = [
    { id: "1", date: "12/12/2021" },
    { id: "2", date: "12/12/2021" },
  ];

  return (
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
  );
}
