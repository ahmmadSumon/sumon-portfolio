import React from "react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CircularTextWithButton from "../components/CircularTextBtn";
import { ThemeProvider } from "@/components/theme-provider";
import LightRays from "@/components/LightRays";
import MobileHyperspeedWrapper from "@/components/MobileHyperspeedWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: {
    default: "Arif Ahmmad Sumon | Full Stack Web Developer",
    template: "%s | Arif Ahmmad Sumon",
  },
  description:
    "Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB. I build high-performance, scalable web solutions from UI to API.",
  keywords: [
    "web developer",
    "full stack developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "frontend developer",
    "Bangladesh",
    "Ahmmad Sumon",
  ],
  authors: [{ name: "Arif Ahmmad Sumon" }],
  openGraph: {
    title: "Arif Ahmmad Sumon | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.",
    url: "https://sumon-portfolio-five.vercel.app",
    siteName: "Arif Ahmmad Sumon Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Ahmmad Sumon | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#06D001",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} relative`}>
        <GoogleAnalytics />
        {/* ✅ Backgrounds */}
        {/* Desktop background */}
        <div
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* ✅ Mobile Hyperspeed Background */}
        <MobileHyperspeedWrapper />

        {/* Floating circular button */}
        <div className="absolute top-[60vh] left-20 m-10 transform -translate-x-1/2 z-10 hidden xl:block">
          <CircularTextWithButton />
        </div>

        {/* Header + Page transitions */}
        <Header />
        <StairTransition />
        <PageTransition>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
