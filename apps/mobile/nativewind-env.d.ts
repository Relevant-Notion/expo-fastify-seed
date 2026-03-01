// Extend React Native component props with className support for NativeWind
import "react-native";

declare module "react-native" {
  interface PressableProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }

  interface ScrollViewProps {
    className?: string;
  }
}

declare module "react-native-safe-area-context" {
  interface SafeAreaViewProps {
    className?: string;
  }
}
