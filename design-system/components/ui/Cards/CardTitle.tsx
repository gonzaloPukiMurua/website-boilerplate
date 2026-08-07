import { Heading } from "@/design-system/components/core/Heading";

import type { HeadingProps } from "@/design-system/components/core/Heading";

export function CardTitle(
  props: HeadingProps<"h3">,
) {
  return (
    <Heading
      level="h3"
      size="h4"
      {...props}
    />
  );
}