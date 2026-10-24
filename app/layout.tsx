import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { BookingProvider } from "@/context/BookingContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://powergym.fit"),
  title: "POWER GYM — Build Power. Break Limits | Elite Training & Biomechanics",
  description:
    "Experience elite dark-aesthetic fitness training, Olympic equipment, certified master coaches, cold plunge recovery, and customized nutrition protocols.",
  keywords: [
    "Power Gym",
    "Elite Gym",
    "Strength Training",
    "Olympic Weightlifting",
    "CrossFit",
    "Recovery Lounge",
    "Cold Plunge",
    "Personal Trainer",
  ],
  authors: [{ name: "Power Gym High Performance" }],
  openGraph: {
    title: "POWER GYM — Build Power. Break Limits",
    description:
      "State-of-the-art gym with Olympic lifting platforms, HIIT arenas, certified CSCS coaches, and infrared sauna recovery.",
    url: "https://powergym.fit",
    siteName: "POWER GYM",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Power Gym Athlete Deadlift Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#FFE600] selection:text-black">
        <BookingProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </BookingProvider>
      </body>
    </html>
  );
}
