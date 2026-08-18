export const typography = {
  display: "text-5xl lg:text-7xl",

  h1: "text-4xl lg:text-5xl",

  h2: "text-3xl lg:text-4xl",

  h3: "text-2xl lg:text-3xl",

  h4: "text-xl lg:text-2xl",

  body: "text-base",

  bodyLg: "text-lg",

  bodySm: "text-sm",

  caption: "text-xs",

  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  },

  color: {
    default: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    inverse: "text-background",
    success: "text-green-600",
    warning: "text-yellow-600",
    destructive: "text-red-700",
  },
} as const;

export type TextSize =
  | "body"
  | "bodyLg"
  | "bodySm"
  | "caption";

export type HeadingSize =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

export type TextVariant = keyof typeof typography.color;
export type FontWeight = keyof typeof typography.weight;