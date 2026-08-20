export interface ThemeColorTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  ring: string;
}

export const lightColors: ThemeColorTokens = {
  background: "0 0% 95%",
  foreground: "232 10% 30%",

  card: "0 0% 100%",
  cardForeground: "232 10% 30%",

  primary: "222 100% 21%",
  primaryForeground: "0 0% 100%",

  secondary: "1 61% 43%",
  secondaryForeground: "0 0% 100%",

  muted: "0 0% 90%",
  mutedForeground: "232 8% 45%",

  accent: "0 0% 90%",
  accentForeground: "232 10% 30%",

  destructive: "0 84% 60%",
  destructiveForeground: "0 0% 100%",

  border: "0 0% 87%",
  ring: "222 100% 21%",
};

export const darkColors: Partial<ThemeColorTokens> = {
  background: "222 47% 6%",
  foreground: "210 40% 98%",

  card: "222 47% 8%",
  cardForeground: "210 40% 98%",

  secondary: "217 33% 17%",
  secondaryForeground: "210 40% 98%",

  muted: "217 33% 17%",
  mutedForeground: "215 20% 65%",

  accent: "217 33% 17%",
  accentForeground: "210 40% 98%",

  border: "217 33% 20%",
};
