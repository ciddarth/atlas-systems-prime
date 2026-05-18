import { Inter } from "next/font/google";
import "./globals.css";
import AosInit from "./components/AosInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://prime.atlassystems.com"),
  title: {
    default: "PRIME® by Atlas Systems | Automated Compliance & Directories",
    template: "%s | Atlas Systems PRIME",
  },
  description: "PRIME is an AI-powered automated provider onboarding, compliance monitoring, and CMS-compliant directory generation platform developed by Atlas Systems.",
  keywords: [
    "Atlas Systems PRIME",
    "provider directory compliance",
    "CMS compliance directory",
    "provider onboarding",
    "automated credentialing",
    "health plan directories",
    "healthcare provider data assessment",
  ],
  authors: [{ name: "Atlas Systems", url: "https://atlassystems.com" }],
  creator: "Atlas Systems",
  publisher: "Atlas Systems",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PRIME® by Atlas Systems | Automated Compliance & Directories",
    description: "PRIME is an AI-powered automated provider onboarding, compliance monitoring, and CMS-compliant directory generation platform developed by Atlas Systems.",
    url: "https://prime.atlassystems.com",
    siteName: "Atlas Systems PRIME",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/general/banner-img-prime.png",
        width: 1200,
        height: 600,
        alt: "PRIME automated compliance directories preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME® by Atlas Systems | Automated Compliance & Directories",
    description: "PRIME is an AI-powered automated provider onboarding, compliance monitoring, and CMS-compliant directory generation platform developed by Atlas Systems.",
    images: ["/images/general/banner-img-prime.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/images/general/fav-icon-prime.png",
    shortcut: "/images/general/fav-icon-prime.png",
    apple: "/images/general/fav-icon-prime.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* 
          TODO: Google Tag Manager (GTM) Analytics Integration
          
          Recommended Method (Next.js Optimized Third-Parties package):
          1. Install package:
             npm install @next/third-parties
          2. Import the component at the top of layout.js:
             import { GoogleTagManager } from "@next/third-parties/google";
          3. Add the component right here inside the <head> tag:
             <GoogleTagManager gtmId="GTM-XXXXXX" />
        */}
      </head>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
