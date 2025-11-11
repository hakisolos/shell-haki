import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haki – Backend Developer",
  description:
    "Professional Backend Developer specialising in APIs, microservices, and database architecture. Experienced in JavaScript, Python, and Go for building scalable, high-performance systems.",
  keywords: [
    "Backend Developer",
    "API Development",
    "Microservices",
    "Node.js",
    "Python",
    "Go",
    "Haki",
  ],
  openGraph: {
    title: "Haki – Backend Developer",
    description:
      "Professional Backend Developer skilled in APIs, microservices & database systems.",
    url: "https://hakidev.my.id",
    siteName: "Haki Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://hakidev.my.id"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
