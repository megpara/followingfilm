import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Following",
  description: "A short film starring Melissa Joan Hart"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="Following" key="ogtitle" />
        <meta
        property="og:description"
        content="A short film starring Melissa Joan Hart"
        key="ogdesc"
        />
        <meta property="og:image" content="https://followingthefilm.com/following.png" />
        <link rel="stylesheet" href="https://use.typekit.net/rnf8yrx.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
