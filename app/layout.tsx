import type { Metadata } from "next";
import { 
  seo, 
  site,
  branding,
  contact,
 } from "@/config/site";
import { LocalBusinessJsonLd } from "@/design-system/components/seo/LocalBusinessJsonLd";
import { Hanken_Grotesk, Epilogue, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";


const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
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
      className={`${hankenGrotesk.variable} ${epilogue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd
          site={site}
          contact={contact}
          branding={branding}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
