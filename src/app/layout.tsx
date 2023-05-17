"use client";
import { jsx } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
//style
import { theme } from "../styles/theme";

import { Roboto } from "next/font/google";

import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "@/services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from "@/services/queryClient";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

if (process.env.NODE_ENV === "development") {
  makeServer();
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <SideBarDrawerProvider>{children}</SideBarDrawerProvider>
            </ChakraProvider>
          </CacheProvider>
          
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  );
}
