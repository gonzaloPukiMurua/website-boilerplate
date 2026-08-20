export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  rating: number;
}

export interface TestimonialsProps {
  title: string;
  items: Testimonial[];
}
