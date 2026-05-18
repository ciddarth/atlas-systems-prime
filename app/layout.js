import { Inter } from "next/font/google";
import "./globals.css";
import AosInit from "./components/AosInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Atlas Systems Prime",
  description: "Advanced Automated Compliance and Onboarding Solutions by Atlas Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
