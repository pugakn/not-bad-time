import { calendar } from "@googleapis/calendar";
import { Logo, ScheduleCont, ScheduleOverlay } from "./style";
import SwitchView from "./SwitchView";

export default function Schedule() {
  console.log(calendar("v3").events.list());
  return (
    <ScheduleCont>
      <ScheduleOverlay />
      <Logo src="/schedule/logo.svg" />
      <SwitchView />
    </ScheduleCont>
  );
}
