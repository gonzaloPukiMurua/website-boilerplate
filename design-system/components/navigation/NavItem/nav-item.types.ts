import { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}