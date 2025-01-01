'use client'
import "./globals.css";
import { Providers } from "./redux/providers";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
