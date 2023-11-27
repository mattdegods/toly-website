import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$TOLY COIN",
  description: "FUCK A ROLY, BUY SOME $TOLY",
  openGraph: {
    images: ["/images/branding7.png"],
    description: "FUCK A ROLY, BUY SOME $TOLY",
  },
  twitter: {
    images: ["/images/branding7.png"],
    card: "summary_large_image",
    description: "FUCK A ROLY, BUY SOME $TOLY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
