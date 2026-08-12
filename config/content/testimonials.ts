export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  rating: number;
}

export const testimonials = {
  title: "Lo que dicen nuestros clientes",
  items: [
    { id: "juan-perez", quote: "Excelente atención y stock permanente. Como instalador, necesito respuestas rápidas y Beta nunca me falla con los materiales técnicos.", author: "Juan Pérez", role: "Instalador Matriculado", avatarSrc: "/images/testimonials/juan-perez.jpg", rating: 5 },
    { id: "maria-rodriguez", quote: "El asesoramiento para la iluminación de mi local fue clave. Productos de primera calidad y un soporte técnico que marca la diferencia.", author: "María Rodríguez", role: "Propietaria de Comercio", avatarSrc: "/images/testimonials/maria-rodriguez.jpg", rating: 5 },
    { id: "carlos-sosa", quote: "Trabajamos con Beta para nuestras obras de gran escala. La logística y los tiempos de entrega son ejemplares en la provincia.", author: "Ing. Carlos Sosa", role: "Constructora del Centro", avatarSrc: "/images/testimonials/carlos-sosa.jpg", rating: 5 },
  ] satisfies Testimonial[],
};