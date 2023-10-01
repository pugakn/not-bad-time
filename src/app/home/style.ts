"use client";

import { Button } from "@/app/globalStyles";
import styled from "styled-components";

export const LogOutButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.bg};
  @media (max-width: 768px) {
    bottom: 1rem;
    left: calc(50vw - 2.5rem);
  }
`;

export const MeetingsTableCont = styled.div`
  z-index: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
  max-width: 80%;
  max-height: 300px;
  overflow-y: scroll;
  gap: calc(var(--rhythm) * 0.8);
`;

export const MeetingsTableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: calc(var(--rhythm) * 1);
  width: 100%;
`;

export const MeetingsTableCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: var(--border-radius-small);
  background-color: ${(props) => props.theme.colors.surface};
`;
