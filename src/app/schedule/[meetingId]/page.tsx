import { Logo, PageCont, PageContOverlay } from "@/app/globalStyles";
import SwitchView from "./components/SwitchView";

export default function Schedule({
  params,
}: {
  params: { meetingId: string };
}) {
  const meetingId = params.meetingId;

  return (
    <PageCont>
      <PageContOverlay />
      <Logo src="/schedule/logo.svg" />
      <SwitchView meetingId={meetingId} />
    </PageCont>
  );
}
