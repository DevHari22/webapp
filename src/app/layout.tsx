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
  metadataBase: new URL("https://spectrum7tech.com"),
  title: "Spectrum 7 | Full-Spectrum Enterprise Digital & AI Solutions",
  description:
    "Architecting mission-critical digital systems across core technological pillars: Cloud DevOps, Applied AI, Enterprise Integration, Zero-Trust Cybersecurity, and Scaled Automation.",
  keywords: [
    "Spectrum 7",
    "Enterprise Software",
    "Cloud Architecture",
    "DevOps",
    "Applied AI",
    "Next.js Development",
    "Zero-Trust Cybersecurity",
    "Data Streaming",
    "Boomi iPaaS",
    "UiPath Automation",
  ],
  authors: [{ name: "Spectrum 7 Technologies" }],
  openGraph: {
    title: "Spectrum 7 | Enterprise Digital & AI Engineering",
    description: "Engineering Intelligent Systems for Connected Enterprises.",
    url: "https://spectrum7tech.com",
    siteName: "Spectrum 7",
    images: [
      {
        url: "/logo.png",
        width: 340,
        height: 80,
        alt: "Spectrum 7 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-theme="light">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
