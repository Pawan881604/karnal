import { ReactNode } from "react";
import { Montserrat_Alternates } from "next/font/google";

import "./globals.css";  // Global CSS file
import { Toaster } from 'react-hot-toast';
import Header from "@/module/layout/header/Header";
import Footer from "@/module/layout/footer/Footer";
import type { Metadata } from "next";
import StoreProvider from "@/store";

// Font configuration (optional)
const montserrat_Alternates = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "600"], });
interface RootLayoutProps {
  children: ReactNode;
}
export const viewport = "width=device-width, initial-scale=1";
export const metadata: Metadata = {
  title: {
    default: "Home Page",
    template: "%s | KarnalWebTech",
  },
  description: "Your go-to tech partner in Karnal, providing top-notch web development services and digital solutions.",
  keywords: ["web development", "Karnal web tech", "digital solutions", "SEO", "Next.js", "KarnalWebTech"],
  openGraph: {
    title: "KarnalWebTech",
    description: "Innovative web solutions for your business, designed by KarnalWebTech.",
    url: "https://www.karnalwebtech.com",
    siteName: "KarnalWebTech",
    images: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=490,fit=crop,q=95/m2WrzgBy7ZcEOgWj/logo1-1-YBgynG911Bh0OWvN.png",
        width: 800,
        height: 600,
        alt: "KarnalWebTech Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    title: "KarnalWebTech",
    description: "Your trusted tech partner in web development and digital solutions.",
    images: ["https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=490,fit=crop,q=95/m2WrzgBy7ZcEOgWj/logo1-1-YBgynG911Bh0OWvN.png"],
  },
  robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.karnalwebtech.com",
  },
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat_Alternates.className}>
        <StoreProvider>
          <Header />
          {children}
          <Toaster
          />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
