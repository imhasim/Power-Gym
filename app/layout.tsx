import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { JoinProvider } from "@/context/JoinContext";

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
  title: "POWER GYM — Get Strong, Fit, and Healthy",
  description:
    "Welcome to Power Gym. High quality gym equipment, friendly coaches, fun workouts, and clean recovery saunas to help you reach your goals.",
  keywords: [
    "Power Gym",
    "Gym",
    "Weight Training",
    "Fitness Workouts",
    "Sauna and Cold Plunge",
    "Personal Trainer",
  ],
  authors: [{ name: "Power Gym" }],
  openGraph: {
    title: "POWER GYM — Get Strong, Fit, and Healthy",
    description:
      "Modern gym with free weights, cardio workouts, friendly personal coaches, and relaxing saunas.",
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#FFE600] selection:text-black"
      >
        <JoinProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </JoinProvider>
      </body>
    </html>
  );
}
