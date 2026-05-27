import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael's Pizza | Clarksville, TN",
  description:
    "Pizza, frozen custard, daily deals, dine-in, carryout, and delivery at Michael's Pizza in Clarksville, TN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
