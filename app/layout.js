import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from 'next-themes';
import SEO from '@/components/SEO';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rayan Shafi",
  description: "Personal Portfolio Website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
                <SEO />
                <meta name="google-site-verification" content="qT9R3oBiu0hF0Zx3yP70XVcQdK26E4LsQORulDPaMjE" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
