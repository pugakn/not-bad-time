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

export const MeetingsTableCont = styled.table`
  z-index: 1;
  padding: 2.5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
  max-width: 80%;
  max-height: 300px;
  overflow-y: scroll;
  gap: calc(var(--rhythm) * 0.8);

  td {
    padding: calc(var(--rhythm) * 0.4);
    text-align: center;
  }
`;

export const MeetingsTableRow = styled.tr`
  width: 100%;
`;

export const MeetingsTableCol = styled.td`
  border-radius: var(--border-radius-small);
  background-color: ${(props) => props.theme.colors.surface};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: var(--space-mono), monospace;
`;
