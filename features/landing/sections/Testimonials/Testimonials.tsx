import { Section, Container, Grid, Heading } from "@/design-system";
import { TestimonialCard } from "@/features/landing/components/TestimonialCard";
import { TestimonialsProps } from "./testimonials.types";

export function Testimonials({ title, items }: TestimonialsProps) {
  return (
    <Section
      spacing="lg"
      className="bg-gradient-to-br from-[#0a1454] via-[#151b6b] to-[#2a1a6b]"
    >
      <Container>
        <Heading level="h2" className="mb-12 text-center text-white">
          {title}
        </Heading>
        <Grid cols={{ base: 1, sm: 3 }} gap="lg">
          {items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}