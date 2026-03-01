import * as React from "react";
import { Pressable, type PressableProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";
import { Text } from "./text";

const buttonVariants = cva(
  "rounded-xl px-4 py-3 items-center justify-center active:opacity-90",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        outline: "border border-border bg-transparent",
        ghost: "bg-transparent",
        destructive: "bg-destructive",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-3",
        lg: "h-14 px-6",
      },
      disabled: {
        true: "opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = PressableProps &
  VariantProps<typeof buttonVariants> & {
    title?: string;
    className?: string;
  };

export function Button({
  title,
  children,
  className,
  disabled,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, size, disabled: !!disabled }),
        className,
      )}
      {...props}
    >
      {title ? (
        <Text
          className={cn(
            "font-semibold",
            variant === "outline" || variant === "ghost"
              ? "text-foreground"
              : "text-primary-foreground",
          )}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
