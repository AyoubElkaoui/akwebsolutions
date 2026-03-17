import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akwebsolutions.nl"),
  title: {
    default:
      "Website Laten Maken Baarn | Webdesign & SEO | AK Web Solutions",
    template: "%s | AK Web Solutions",
  },
  description:
    "Professionele websites en webshops laten maken in Baarn. Freelance webdesigner voor MKB. Snelle Next.js websites, SEO en online marketing. Gratis adviesgesprek.",
  keywords: [
    "web development",
    "website laten maken",
    "custom websites",
    "SEO optimalisatie",
    "Next.js development",
    "React development",
    "webdesign Baarn",
    "website bouwen",
    "software development",
    "business web solutions",
    "e-commerce",
    "webshop laten maken",
    "moderne websites",
    "snelle websites",
  ],
  authors: [{ name: "AK Web Solutions" }],
  creator: "AK Web Solutions",
  publisher: "AK Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://akwebsolutions.nl",
    siteName: "AK Web Solutions",
    title: "AK Web Solutions - Professionele Websites & Web Development",
    description:
      "Snelle, SEO-geoptimaliseerde websites en custom web development oplossingen. Van strategie tot live website in 2-4 weken.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Web Solutions - Professionele Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Web Solutions - Professionele Websites & Web Development",
    description:
      "Snelle, SEO-geoptimaliseerde websites en custom web development oplossingen. Van strategie tot live website in 2-4 weken.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://akwebsolutions.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="alternate" hrefLang="nl" href="https://akwebsolutions.nl" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://akwebsolutions.nl"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <StructuredData />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
