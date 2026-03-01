/// <reference types="nativewind/types" />

// Extend React Native components with className support (missing from react-native-css-interop)
import "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
    cssInterop?: boolean;
  }
  interface TextProps {
    className?: string;
    cssInterop?: boolean;
  }
  interface PressableProps {
    className?: string;
    cssInterop?: boolean;
  }
  interface TextInputProps {
    className?: string;
    cssInterop?: boolean;
  }
}
