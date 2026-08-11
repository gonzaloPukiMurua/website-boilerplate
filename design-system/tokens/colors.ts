export const colors = {
  background: {
    default: "bg-background",
    muted: "bg-muted",
    card: "bg-card",
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    destructive: "bg-destructive",
  },

  text: {
    default: "text-foreground",
    card: "text-card-foreground",
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    muted: "text-muted-foreground",
    accent: "text-accent-foreground",
    destructive: "text-destructive-foreground",
  },

  border: {
    default: "border-border",
  },

  ring: {
    default: "ring-ring",
  },
} as const;

export type ColorBackground =
  keyof typeof colors.background;

export type ColorText =
  keyof typeof colors.text;

export type ColorBorder =
  keyof typeof colors.border;

export type ColorRing =
  keyof typeof colors.ring;