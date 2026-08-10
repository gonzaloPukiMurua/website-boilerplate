export const branding = {
  name: "Landing Boilerplate",
  logo: "/images/logo.svg",
  homeHref: "/",
} as const;

export type BrandingConfig = typeof branding;