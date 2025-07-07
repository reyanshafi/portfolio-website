import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from 'next-themes';
import SEO from '@/components/SEO';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Rayan Shafi",
  description: "Personal Portfolio Website built with Next.js and Tailwind CSS",
  keywords: "Rayan Shafi, Full Stack Developer, React, Next.js, Web Developer",
  author: "Rayan Shafi",
  robots: "index, follow",
  openGraph: {
    type: 'website',
    title: 'Rayan Shafi - Full Stack Developer',
    description: 'Personal Portfolio Website built with Next.js and Tailwind CSS',
    url: 'https://yourwebsite.com',
    siteName: 'Rayan Shafi Portfolio',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEO />
        <meta name="google-site-verification" content="qT9R3oBiu0hF0Zx3yP70XVcQdK26E4LsQORulDPaMjE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Add cache control meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}>
        <ServiceWorkerRegistration />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Scroll Progress Bar */}
          <ScrollProgressBar />
          
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main>{children}</main>
          <Analytics />

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
