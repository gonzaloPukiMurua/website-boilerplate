export interface SeoConfig {
  titleTemplate: string;
  defaultTitle: string;
  keywords?: string[];
  ogImage?: string;
}

export const seo: SeoConfig = {
  titleTemplate: "%s | Website Name",
  defaultTitle: "Website Name",
  keywords: [],
  ogImage: undefined,
};