import SwitchView from "./components/SwitchView";
import { Logo, ScheduleCont, ScheduleOverlay } from "./style";

export default function Schedule({
  params,
}: {
  params: { meetingId: string };
}) {
  const meetingId = params.meetingId;

  return (
    <ScheduleCont>
      <ScheduleOverlay />
      <Logo src="/schedule/logo.svg" />
      <SwitchView meetingId={meetingId} />
    </ScheduleCont>
  );
}
