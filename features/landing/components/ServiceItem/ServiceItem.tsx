import { Heading, Text } from "@/design-system";
import type { ServiceItem as ServiceItemType } from "@/config/content/service";

export function ServiceItem({ item }: { item: ServiceItemType }) {
  return (
    <div className="border-l-2 border-primary/30 pl-4">
      <Heading level="h3" size="h4" className="mb-2">{item.title}</Heading>
      <Text size="bodySm" variant="muted">{item.description}</Text>
    </div>
  );
}