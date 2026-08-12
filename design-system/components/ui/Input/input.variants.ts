import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex",
    "h-10",
    "w-full",
    "rounded-md",
    "border",
    "border-border",
    "bg-background",
    "px-3",
    "py-2",
    "text-sm",
    "text-foreground",
    "placeholder:text-muted-foreground",
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
