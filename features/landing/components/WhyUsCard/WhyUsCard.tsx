import { Heading, Text, Icon } from "@/design-system";
import { whyUsIconMap } from "@/features/landing/lib/why-us-icon-map";
import type { WhyUsItem } from "@/config/content/why-us";

export function WhyUsCard({ item }: { item: WhyUsItem }) {
  return (
    <div className="rounded-lg bg-muted p-6">
      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10 text-destructive">
        <Icon icon={whyUsIconMap[item.icon]} size={20} />
      </span>
      <Heading level="h3" size="h4" className="mb-2">{item.title}</Heading>
      <Text size="bodySm" variant="default">{item.description}</Text>
    </div>
  );
}