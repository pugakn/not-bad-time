"use client";

import { Button, pressableStyle, txtRegularBold } from "@/app/globalStyles";
import styled from "styled-components";

export type ThemeStyle = {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    surface: string;
  };
};

export const ScheduleCont = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/schedule/bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ScheduleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.66);
`;

export const ScheduleInfo = styled.div`
  z-index: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const Avatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

export const Logo = styled.img`
  z-index: 1;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  filter: invert(1);
  @media (max-width: 768px) {
    top: 1rem;
    left: calc(50vw - 5rem);
  }
`;

export const ScheduleCalendarCont = styled.div`
  z-index: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  > * {
    color: ${(props) => props.theme.colors.bg};
  }
`;

export const CalendarSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: calc(var(--rhythm) * 1);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CalendarDayCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--border-radius-small);
  background-color: ${(props) => props.theme.colors.surface};
  min-width: 16rem;
  min-height: 19rem;
`;

export const CalendarDayHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: var(--border-radius-small) var(--border-radius-small) 0 0;
  width: 100%;
  > * {
    color: ${(props) => props.theme.colors.bg};
  }
`;

export const CalendarBody = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0.8rem;
  width: 100%;
  height: 100%;
  gap: calc(var(--rhythm) * 0.5);
`;

export const CalendarTimeButton = styled.button<{
  selected?: boolean;
}>`
  ${txtRegularBold}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-family: var(--space-mono), monospace;
  border-radius: var(--border-radius);
  height: calc(var(--rhythm) * 1.5);
  padding: 0 calc(var(--body-size) * 1.5);
  white-space: nowrap;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: 100%;

  &:disabled,
  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  ${(p) =>
    p.selected
      ? `
    background-color: ${p.theme.colors.primary};
    color: ${p.theme.colors.bg};
    
    `
      : `
      ${pressableStyle}
      `}
`;
