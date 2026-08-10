import type { Metadata } from "next";
import { 
  seo, 
  site,
  branding,
  contact,
 } from "@/config/site";
import { LocalBusinessJsonLd } from "@/design-system/components/seo/LocalBusinessJsonLd.tsx";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },

  description: site.description,

  keywords: seo.keywords,

  openGraph: {
    title: seo.defaultTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd
          site={site}
          contact={contact}
          branding={branding}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
