import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freeze",
  description: "The most advanced AI Powered Aim Assist on the market.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#0e0e0f] text-white">
        {children}
      </body>
    </html>
  );
}
