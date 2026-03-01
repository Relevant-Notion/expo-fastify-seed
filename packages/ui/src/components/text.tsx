import * as React from "react";
import { Text as RNText, type TextProps } from "react-native";
import { cn } from "../lib/cn";

export type SeedTextProps = TextProps & {
  className?: string;
};

export function Text({ className, ...props }: SeedTextProps) {
  return (
    <RNText className={cn("text-base text-foreground", className)} {...props} />
  );
}
