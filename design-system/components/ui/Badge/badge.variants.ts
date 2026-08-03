import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-2.5 py-0.5",
    "text-xs",
    "font-medium",
    "transition-colors",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",

        secondary:
          "bg-secondary text-secondary-foreground",

        outline:
          "border border-border bg-background text-foreground",

        success:
          "bg-green-100 text-green-800",

        warning:
          "bg-yellow-100 text-yellow-800",

        destructive:
          "bg-destructive text-destructive-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);