"use client";

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

export const ScheduleInfo = styled.div<{
  theme: ThemeStyle;
}>`
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

export const ScheduleCalendarCont = styled.div<{
  theme: ThemeStyle;
}>`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const CalendarDay = styled.div<{
  theme: ThemeStyle;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
`;
