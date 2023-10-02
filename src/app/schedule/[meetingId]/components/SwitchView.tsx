"use client";

import {
  Button,
  InlineError,
  Input,
  Label,
  Section,
  TxtLarge1,
  TxtLarge2,
  TxtRegular,
} from "@/app/globalStyles";
import {
  MeetingState,
  useGetCalendarForMeetingQuery,
  useGetMeetingByIdQuery,
  useScheduleMeetingMutation,
} from "@/generated/client";
import { formatDateToCustomString } from "@/utils";
import * as Joi from "joi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Avatar, ScheduleCalendarCont, ScheduleInfo } from "../style";
import CalendarDayList from "./CalendarDayList";

const InputSchema = Joi.object({
  invitedEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email",
      "string.empty": "Please enter a valid email",
      "any.required": "Please enter a valid email",
    }),
});

const CalendarCContC = ({
  calendarRes,
  onContinue,
  selected,
  setSelected,
}: {
  calendarRes: ReturnType<typeof useGetCalendarForMeetingQuery>;
  onContinue: () => void;
  selected: string | null;
  setSelected: (id: string | null) => void;
}) => {
  return (
    <ScheduleCalendarCont>
      <Section>
        <TxtLarge2 className="center">
          Pick a time that works best for you
        </TxtLarge2>
      </Section>
      <Label className="center">Select the time on</Label>
      <CalendarDayList
        days={calendarRes.data?.calendarForMeeting!}
        selected={selected}
        setSelected={setSelected}
      />
      <Section className="center">
        <Button $hero onClick={onContinue}>
          Continue
        </Button>
      </Section>
    </ScheduleCalendarCont>
  );
};

const InfoContC = ({
  invitedEmail,
  setInvitedEmail,
  setShown,
}: {
  invitedEmail: string | null | undefined;
  setInvitedEmail: (email: string | null) => void;
  setShown: (shown: "INTRO" | "CALENDAR" | "SCHEDULED") => void;
}) => {
  const isValidEmail = InputSchema.validate({ invitedEmail });

  return (
    <ScheduleInfo>
      <Section className="noBottom">
        <Avatar src="/schedule/avatar.jpeg" />
      </Section>
      <Section className="noTop center">
        <TxtLarge1 className="center">Hey there!</TxtLarge1>
        <TxtRegular className="center">
          Please provide your email so we can send you a confirmation email.
        </TxtRegular>
        <Section className="noBottom">
          <Input
            placeholder="Email"
            value={invitedEmail}
            onChange={(e: any) => {
              setInvitedEmail(e.target.value);
            }}
          ></Input>
          {isValidEmail.error && invitedEmail !== undefined && (
            <InlineError>{isValidEmail.error.message}</InlineError>
          )}
        </Section>
      </Section>
      <Section className="noTop center">
        <Button
          disabled={!!isValidEmail.error || !invitedEmail}
          $hero
          onClick={() => {
            if (isValidEmail.error || !invitedEmail) {
              return;
            }
            setShown("CALENDAR");
          }}
        >
          Choose a time
        </Button>
      </Section>
    </ScheduleInfo>
  );
};

const ScheduledContC = ({
  meetingRes,
}: {
  meetingRes: ReturnType<typeof useGetMeetingByIdQuery>;
}) => {
  return (
    <ScheduleInfo>
      <Section className="noBottom">
        <Avatar src="/schedule/avatar.jpeg" />
      </Section>
      <Section className="noTop center">
        <TxtLarge1 className="center noBottom">
          Your meeting has been scheduled!
        </TxtLarge1>
        <Label className="center">{`${formatDateToCustomString(
          new Date(meetingRes.data?.meeting.startDate)
        )}`}</Label>
        <Section className="noBottom">
          <TxtRegular className="center">
            We&aposve sent a confirmation email to
            <strong>{meetingRes.data?.meeting.invitedEmail}</strong>. Please
            check your inbox.
          </TxtRegular>
        </Section>
      </Section>
    </ScheduleInfo>
  );
};

export default function Schedule({ meetingId }: { meetingId: string }) {
  const router = useRouter();

  const [selected, setSelected] = useState<string | null>(null);
  const [invitedEmail, setInvitedEmail] = useState<string | null | undefined>(
    undefined
  );

  const calendarRes = useGetCalendarForMeetingQuery({
    variables: { meetingId },
  });

  const [schedule, scheduleRes] = useScheduleMeetingMutation({
    refetchQueries: ["GetMeetingById"],
  });

  const [shown, setShown] = useState<"INTRO" | "CALENDAR" | "SCHEDULED">(
    "INTRO"
  );
  if (!meetingId) {
    router.replace("/404");
  }

  const meetingRes = useGetMeetingByIdQuery({
    variables: { meetingId },
  });

  useEffect(() => {
    console.log({ meetingId, meetingData: meetingRes.data?.meeting });
    if (
      meetingRes.called &&
      !meetingRes.loading &&
      !meetingRes.data?.meeting.id
    ) {
      router.replace("/404");
    }

    if (meetingRes.data?.meeting.state === MeetingState.Scheduled) {
      setShown("SCHEDULED");
    }
  }, [meetingRes]);

  if (!calendarRes.data) {
    return <ClipLoader color="white" size={200} />;
  }

  const onContinue = async () => {
    if (!invitedEmail) return;

    await schedule({
      variables: {
        invitedEmail,
        meetingId,
        time: selected!,
      },
    });

    setShown("SCHEDULED");
  };

  return (
    <>
      {shown === "INTRO" && (
        <InfoContC
          invitedEmail={invitedEmail}
          setInvitedEmail={setInvitedEmail}
          setShown={setShown}
        />
      )}
      {shown === "CALENDAR" && (
        <CalendarCContC
          selected={selected}
          setSelected={setSelected}
          onContinue={onContinue}
          calendarRes={calendarRes}
        />
      )}
      {shown === "SCHEDULED" && <ScheduledContC meetingRes={meetingRes} />}
    </>
  );
}
