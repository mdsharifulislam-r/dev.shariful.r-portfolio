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
  metadataBase: new URL("http://localhost:3000"),
  title: "MD Shariful Islam | Software Engineer",
  description:
    "Portfolio of MD Shariful Islam, a software engineer focused on backend systems, scalable APIs, and full-stack application delivery.",
  openGraph: {
    title: "MD Shariful Islam | Software Engineer",
    description:
      "Backend systems, API engineering, database integration, and full-stack product work from Bangladesh.",
    type: "website",
    siteName: "MD Shariful Islam",
    images: [{ url: "/logo.svg", alt: "MD Shariful Islam monogram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Shariful Islam | Software Engineer",
    description:
      "Backend systems, API engineering, database integration, and full-stack product work from Bangladesh.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
