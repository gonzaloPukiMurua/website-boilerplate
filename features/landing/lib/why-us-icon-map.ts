import { History, Archive, Banknote, Headphones, type LucideIcon } from "lucide-react";
import type { WhyUsIcon } from "@/config/content/why-us";

export const whyUsIconMap: Record<WhyUsIcon, LucideIcon> = {
  experiencia: History,
  stock: Archive,
  precio: Banknote,
  servicio: Headphones,
};