import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type AsProp<T extends ElementType> = {
  as?: T;
};

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {},
> = PropsWithChildren<
  Props &
    AsProp<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof Props | "as">
>;