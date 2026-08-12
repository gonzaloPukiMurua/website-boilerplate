import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";
import type { ContactIcon } from "@/config/content/contact";

export const contactIconMap: Record<ContactIcon, LucideIcon> = {
  address: MapPin,
  phone: Phone,
  email: Mail,
};
