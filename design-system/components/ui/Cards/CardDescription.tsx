import { Text } from "@/design-system/components/core/Text";

import type { TextProps } from "@/design-system/components/core/Text";

export function CardDescription(
  props: TextProps<"p">,
) {
  return (
    <Text
      variant="muted"
      size="bodySm"
      {...props}
    />
  );
}