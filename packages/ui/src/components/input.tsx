import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { cn } from "../lib/cn";

export type InputProps = TextInputProps & { className?: string };

export function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      placeholderTextColor="#6B7280"
      className={cn(
        "h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground",
        className,
      )}
      {...props}
    />
  );
}
