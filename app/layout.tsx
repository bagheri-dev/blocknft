import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "blockNFT",
  description: "Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
