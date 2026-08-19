export const branding = {
  name: "Beta Electricidad",
  logo: "/images/logo.svg",
  homeHref: "/",
} as const;

export type BrandingConfig = typeof branding;