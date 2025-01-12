import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/provider";

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
        className={`font-lato antialiased bg-background text-white overflow-x-hidden overflow-y-scroll`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
