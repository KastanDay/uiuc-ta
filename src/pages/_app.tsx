import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";


import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};


export default api.withTRPC(MyApp);
