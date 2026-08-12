import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    "flex",
    "h-10",
    "w-full",
    "appearance-none",
    "rounded-md",
    "border",
    "border-border",
    "bg-background",
    "px-3",
    "py-2",
    "pr-9",
    "text-sm",
    "text-foreground",
    "transition-colors",
    "duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",

        error:
          "border-destructive focus-visible:ring-destructive",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);
