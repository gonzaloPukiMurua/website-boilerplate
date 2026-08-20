export interface Brand {
  id: string;
  name: string;
  logoSrc: string;
}

export interface BrandsProps {
  title: string;
  items: Brand[];
}
