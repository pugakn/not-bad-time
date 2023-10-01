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
  useGetCalendarForMeetingQuery,
  useGetMeetingByIdQuery,
  useScheduleMeetingMutation,
} from "@/generated/client";
import * as Joi from "joi";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
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

export default function Schedule({ meetingId }: { meetingId: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [invitedEmail, setInvitedEmail] = useState<string | null | undefined>(
    undefined
  );

  const calendarRes = useGetCalendarForMeetingQuery({
    variables: { meetingId },
  });
  const [schedule, scheduleRes] = useScheduleMeetingMutation();

  const [shown, setShown] = useState<"INTRO" | "CALENDAR" | "SCHEDULED">(
    "INTRO"
  );
  if (!meetingId) {
    redirect("/404");
  }

  const meetingData = useGetMeetingByIdQuery({
    variables: { meetingId },
  });

  useEffect(() => {
    console.log({ meetingId, meetingData: meetingData.data?.meeting });
    if (
      meetingData.called &&
      !meetingData.loading &&
      !meetingData.data?.meeting.id
    ) {
      redirect("/404");
    }
  }, [meetingData]);

  if (!calendarRes.data) {
    return <div>Loading...</div>;
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
    </>
  );
}
