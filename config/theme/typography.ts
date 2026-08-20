export interface FontRoleConfig {
  /**
   * CSS custom property name that the corresponding next/font loader in
   * app/layout.tsx writes the loaded font-family into (its `variable`
   * option). Role-based, not font-name-based, so swapping the Google Font
   * that backs a role never requires touching app/globals.css.
   */
  cssVariable: string;
  /** System fallback stack appended after the loaded font. */
  fallback: string[];
}

export const fontRoles = {
  sans: {
    cssVariable: "--font-body-raw",
    fallback: ["Arial", "Helvetica", "sans-serif"],
  },
  heading: {
    cssVariable: "--font-heading-raw",
    fallback: ["Arial", "Helvetica", "sans-serif"],
  },
  mono: {
    cssVariable: "--font-mono-raw",
    fallback: ["monospace"],
  },
} as const satisfies Record<string, FontRoleConfig>;

export type FontRole = keyof typeof fontRoles;
