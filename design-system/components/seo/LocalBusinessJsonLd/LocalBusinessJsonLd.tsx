import type { ContactConfig } from "@/config/site";
import type { SiteConfig } from "@/config/site";
import type { BrandingConfig } from "@/config/site";

interface LocalBusinessJsonLdProps {
  site: SiteConfig;
  contact: ContactConfig;
  branding: BrandingConfig;
}

export function LocalBusinessJsonLd({
  site,
  contact,
  branding,
}: LocalBusinessJsonLdProps) {
  const logo = new URL(branding.logo, site.url).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    logo,
    ...(contact.phone && {
      telephone: contact.phone,
    }),
    ...(contact.email && {
      email: contact.email,
    }),
    ...(contact.address &&
      contact.city &&
      contact.state &&
      contact.country && {
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          addressLocality: contact.city,
          addressRegion: contact.state,
          ...(contact.postalCode && { postalCode: contact.postalCode }),
          addressCountry: contact.country,
        },
      }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}