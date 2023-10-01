import { Logo, ScheduleCont, ScheduleOverlay } from "./style";
import SwitchView from "./SwitchView";

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
