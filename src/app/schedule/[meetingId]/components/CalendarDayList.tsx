"use client";
import { CalendarDay as CalendarDayT } from "@/generated/client";
import { CalendarSection } from "../style";
import CalendarDay from "./CalendarDay";

export default function Schedule({
  days,
  selected,
  setSelected,
}: {
  days: CalendarDayT[];
  selected: string | null;
  setSelected: (id: string | null) => void;
}) {
  return (
    <CalendarSection>
      {days.map((day) => (
        <CalendarDay
          key={day.date}
          onSelect={setSelected}
          selected={selected}
          date={new Date(day.date)}
          times={day.times}
        />
      ))}
    </CalendarSection>
  );
}
