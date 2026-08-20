export interface ServiceItemContent {
  id: string;
  title: string;
  description: string;
}

export interface ServicesProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItemContent[];
}
