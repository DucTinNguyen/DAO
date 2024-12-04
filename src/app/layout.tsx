import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Head from "next/head";

const roboto = localFont({
  src: [
    {
      path: "./fonts/roboto/RobotoMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/roboto/RobotoMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

const reiswar = localFont({
  src: "./fonts/reiswar/Reiswar.woff2",
  variable: "--font-reiswar",
  weight: "500",
});

// export const metadata: Metadata = {
//   title: "Replacement for Lifespan Extension",
//   description: "Funding and incubating replacement research to extend human lifespan",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mitosisdao.science"),
  title: "MitosisDAO",
  description: "Supporting research to develop alternatives extending human longevity",
  openGraph: {
    title: "MitosisDAO",
    description: "Supporting research to develop alternatives extending human longevity",
    url: new URL("https://www.mitosisdao.science")
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>MitosisDAO</title>
        <meta
          name="description"
          content="Supporting research to develop alternatives extending human longevity"
        />
        <meta property="og:image" content="./opengraph-image.jpg"></meta>
        <meta property="og:url" content="https://www.mitosisdao.science"></meta>
        <meta property="og:title" content="MitosisDAO"></meta>
        <meta property="og:site_name" content="https://www.mitosisdao.science"></meta>
        <meta
          property="og:description"
          content="Supporting research to develop alternatives extending human longevity"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${roboto.variable} ${reiswar.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
