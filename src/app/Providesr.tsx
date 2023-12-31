"use client";

import { GlobalStyles } from "@/app/globalStyles";
import {
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  ApolloClient as _ApolloClient,
} from "@apollo/client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { AuthProvider, FirebaseAuth } from "./Firebase";

import { setContext } from "apollo-link-context";
const authLink = setContext((_, { headers }) => {
  return FirebaseAuth?.currentUser?.getIdToken().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/graphql",
});

const link = ApolloLink.from([authLink as unknown as ApolloLink, httpLink]);
export const ApolloClient = new _ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/graphql",
  cache: new InMemoryCache(),
  link,
});

const theme = {
  colors: {
    primary: "#6400e0",
    secondary: "#ff00c7",
    bg: "#FFFFFF",
    surface: "#F9F9FE",
    positive: "#00e0a0",
    negative: "#e00000",
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
