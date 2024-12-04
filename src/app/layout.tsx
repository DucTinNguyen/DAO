import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

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
  // metadataBase: new URL("https://www.cellprotocol.science"),
  title: "Longevity biotechnology by replacement",
  description: "Supporting research to develop alternatives extending human longevity",
  openGraph: {
    title: "Longevity biotechnology by replacement",
    description: "Supporting research to develop alternatives extending human longevity",
    // url: new URL("https://www.cellprotocol.science")
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
