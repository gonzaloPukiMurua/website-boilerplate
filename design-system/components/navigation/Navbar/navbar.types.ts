import { ReactNode } from "react";

export interface NavbarProps {
  logo: ReactNode;
  navigation: ReactNode;
  actions?: ReactNode;
  className?: string;
}