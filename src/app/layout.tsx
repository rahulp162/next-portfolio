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
  title: "Full-Stack Developer Portfolio | React, Next.js, MERN Stack",
  description:
    "Professional portfolio showcasing modern web development projects built with React, Next.js, and MERN stack. Specializing in scalable SaaS applications and e-commerce solutions.",
  keywords:
    "Full-Stack Developer, React Developer, Next.js, MERN Stack, JavaScript, TypeScript, Web Development, SaaS, Portfolio",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing modern web development projects",
    type: "website",
  },
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
