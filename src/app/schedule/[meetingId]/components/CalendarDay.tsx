"use client";

import { Label } from "@/app/globalStyles";
import {
  CalendarBody,
  CalendarDayCont,
  CalendarDayHeader,
  CalendarTimeButton,
} from "../style";

export default function CalendarDay({
  date,
  onSelect,
  selected,
}: {
  date: Date;
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  const onClick = (id: string) => {
    onSelect(id);
  };

  const times = [
    { id: "1", start: "9:00 AM", end: "9:30 AM" },
    { id: "2", start: "9:30 AM", end: "10:00 AM" },
    { id: "3", start: "10:00 AM", end: "10:30 AM" },
    { id: "4", start: "10:30 AM", end: "11:00 AM" },
  ];

  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <CalendarDayCont>
      <CalendarDayHeader>
        <Label className="noBottom big">{day}</Label>
        <Label className="noBottom thin">{date.toDateString()}</Label>
      </CalendarDayHeader>
      <CalendarBody>
        {times.map((time) => (
          <CalendarTimeButton
            key={time.id}
            selected={selected === time.id}
            onClick={() => onClick(time.id)}
          >
            {time.start} - {time.end}
          </CalendarTimeButton>
        ))}
      </CalendarBody>
    </CalendarDayCont>
  );
}
