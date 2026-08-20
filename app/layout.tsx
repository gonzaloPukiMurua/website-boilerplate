import type { Metadata } from "next";
import {
  seo,
  site,
  branding,
  contact,
 } from "@/config/site";
import { LocalBusinessJsonLd } from "@/design-system/components/seo/LocalBusinessJsonLd";
import { Toaster } from "@/design-system";
import { Hanken_Grotesk, Epilogue, Geist_Mono } from "next/font/google";
import { generateThemeCss } from "@/config/theme/generateThemeCss";
import "./globals.css";
import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";

// next/font requires the `variable` option to be a literal string, so these
// three values can't be read from config/theme/typography.ts at runtime —
// they must match the `cssVariable` field of fontRoles.sans/heading/mono
// there exactly. To swap which Google Font backs a role, change the import +
// call below; app/globals.css never needs to change since it only wires up
// the role names (--font-sans, --font-heading, --font-mono), not these.
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body-raw",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-heading-raw",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin"],
});

const themeCss = generateThemeCss();

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
      <head>
        <style id="theme-tokens" dangerouslySetInnerHTML={{ __html: themeCss }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd
          site={site}
          contact={contact}
          branding={branding}
        />
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
