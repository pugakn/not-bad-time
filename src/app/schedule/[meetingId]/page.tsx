import { calendar } from "@googleapis/calendar";
import { Logo, ScheduleCont, ScheduleOverlay } from "./style";
import SwitchView from "./SwitchView";

export default function Schedule() {
  return (
    <ScheduleCont>
      <ScheduleOverlay />
      <Logo src="/schedule/logo.svg" />
      <SwitchView />
    </ScheduleCont>
  );
}
