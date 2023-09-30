"use client";

import { ReactNode } from "react";
import { GlobalStyles } from "@/app/globalStyles";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./Firebase";
import {
  ApolloClient as _ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const ApolloClient = new _ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

const theme = {
  colors: {
    primary: "#6400e0",
    secondary: "#ff00c7",
    bg: "#FFFFFF",
    surface: "#F9F9FE",
  },
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={ApolloClient}>
          <AuthProvider>{children}</AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
