export const BREAKPOINTS = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] as const;

export type Breakpoint = (typeof BREAKPOINTS)[number];