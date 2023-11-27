import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>$TOLY COIN</title>
        <meta name="description" content="FUCK A ROLY, BUY SOME $TOLY" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="tolycoin.com" />
        <meta property="og:title" content="$TOLY COIN" />
        <meta property="og:description" content="FUCK A ROLY, BUY SOME $TOLY" />
        <meta property="og:image" content="/images/branding7.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="tolycoin.com" />
        <meta property="twitter:title" content="$TOLY COIN" />
        <meta
          property="twitter:description"
          content="FUCK A ROLY, BUY SOME $TOLY"
        />
        <meta property="twitter:image" content="/images/branding7.jpg" />

        {/* Additional tags can be added as needed */}
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
