export interface SeoConfig {
  titleTemplate: string;
  defaultTitle: string;
  keywords?: string[];
  ogImage?: string;
}

export const seo: SeoConfig = {
  titleTemplate: "%s | Beta Electricidad",
  defaultTitle: "Beta Electricidad — Materiales eléctricos en La Falda, Córdoba",
  keywords: [
    "materiales eléctricos La Falda",
    "electricidad Córdoba",
    "iluminación LED",
    "instrumental de medición eléctrica",
    "venta mayorista materiales eléctricos",
  ],
  ogImage: undefined,
};