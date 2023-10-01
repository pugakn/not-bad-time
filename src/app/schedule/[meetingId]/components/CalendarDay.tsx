"use client";

import { Label } from "@/app/globalStyles";
import { CalendarTime } from "@/generated/client";
import { useMemo } from "react";
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
  times,
}: {
  date: Date;
  selected: string | null;
  times: CalendarTime[];
  onSelect: (id: string) => void;
}) {
  const onClick = (id: string) => {
    onSelect(id);
  };
  const day = useMemo(
    () => date.toLocaleDateString("en-US", { weekday: "long" }),
    [date]
  );

  return (
    <CalendarDayCont>
      <CalendarDayHeader>
        <Label className="noBottom big">{day}</Label>
        <Label className="noBottom thin">{date.toDateString()}</Label>
      </CalendarDayHeader>
      <CalendarBody>
        {times.map((time) => {
          const startTimeStr = new Date(time.time).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          const endTime = new Date(time.time);
          endTime.setMinutes(endTime.getMinutes() + 30);
          const endTimeStr = endTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          return (
            <CalendarTimeButton
              key={time.time}
              selected={selected === time.time}
              onClick={() => onClick(time.time)}
            >
              {startTimeStr} - {endTimeStr}
            </CalendarTimeButton>
          );
        })}
      </CalendarBody>
    </CalendarDayCont>
  );
}
