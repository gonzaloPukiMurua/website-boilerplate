import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-xl",
    "border",
    "bg-card",
    "text-card-foreground",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        default: "shadow-sm",

        outlined: "shadow-none",

        elevated: "shadow-lg",

        interactive: [
          "shadow-sm",
          "hover:shadow-lg",
          "cursor-pointer",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);