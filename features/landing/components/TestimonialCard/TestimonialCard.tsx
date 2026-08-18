import Image from "next/image";
import { Star } from "lucide-react";
import { Text } from "@/design-system";
import type { Testimonial } from "@/config/content/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-destructive text-destructive" />
        ))}
      </div>
      <Text size="bodySm" className="mb-6 italic text-white">
        "{item.quote}"
      </Text>
      <div className="flex items-center gap-3">
        <Image src={item.avatarSrc} alt={item.author} width={40} height={40} className="rounded-full object-cover" />
        <div>
          <Text size="bodySm" weight="semibold" className="text-white">{item.author}</Text>
          <Text size="caption" className="text-white">{item.role}</Text>
        </div>
      </div>
    </div>
  );
}