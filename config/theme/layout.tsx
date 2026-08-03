export const layout = {
  container: {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  },

  section: {
    none: "py-0",
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
    xl: "py-32",
  },
} as const;

export type ContainerSize = keyof typeof layout.container;
export type SectionSpacing = keyof typeof layout.section;