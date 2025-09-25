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
  title: "Grand Regency Hotel - Luxury Hotel in Silchar, Assam",
  description: "Experience luxury hospitality at Grand Regency Hotel in Silchar, Assam. Modern amenities, exceptional service, and comfortable accommodations for business and leisure travelers.",
  keywords: "hotel, luxury, Silchar, Assam, accommodation, Grand Regency",
  openGraph: {
    title: "Grand Regency Hotel - Luxury Hotel in Silchar",
    description: "Experience luxury hospitality in the heart of Silchar, Assam",
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
