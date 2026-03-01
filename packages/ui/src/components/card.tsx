import * as React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "../lib/cn";

export function Card({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <View
      className={cn("rounded-2xl border border-border bg-card p-4", className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return <View className={cn("mb-3", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return <View className={cn("", className)} {...props} />;
}
