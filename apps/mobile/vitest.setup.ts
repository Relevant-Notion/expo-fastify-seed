import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// Mock React Native core components
vi.mock("react-native", async () => {
  const React = await import("react");

  const View = React.forwardRef(
    ({ children, testID, ...props }: any, ref: any) =>
      React.createElement(
        "div",
        { ...props, "data-testid": testID, ref },
        children,
      ),
  );
  View.displayName = "View";

  const Text = React.forwardRef(
    ({ children, testID, ...props }: any, ref: any) =>
      React.createElement(
        "span",
        { ...props, "data-testid": testID, ref },
        children,
      ),
  );
  Text.displayName = "Text";

  const Pressable = React.forwardRef(
    ({ children, testID, ...props }: any, ref: any) =>
      React.createElement(
        "button",
        { ...props, "data-testid": testID, ref },
        typeof children === "function"
          ? children({ pressed: false })
          : children,
      ),
  );
  Pressable.displayName = "Pressable";

  const SafeAreaView = React.forwardRef(
    ({ children, testID, contentContainerStyle, ...props }: any, ref: any) =>
      React.createElement(
        "div",
        { ...props, "data-testid": testID, ref },
        children,
      ),
  );
  SafeAreaView.displayName = "SafeAreaView";

  const ScrollView = React.forwardRef(
    ({ children, testID, contentContainerStyle, ...props }: any, ref: any) =>
      React.createElement(
        "div",
        { ...props, "data-testid": testID, ref },
        children,
      ),
  );
  ScrollView.displayName = "ScrollView";

  return {
    View,
    Text,
    Pressable,
    SafeAreaView,
    ScrollView,
  };
});

// Mock react-native-safe-area-context
vi.mock("react-native-safe-area-context", async () => {
  const React = await import("react");
  const SafeAreaView = React.forwardRef(
    ({ children, testID, ...props }: any, ref: any) =>
      React.createElement(
        "div",
        { ...props, "data-testid": testID, ref },
        children,
      ),
  );
  SafeAreaView.displayName = "SafeAreaView";
  const SafeAreaProvider = ({ children }: any) =>
    React.createElement(
      "div",
      { "data-testid": "safe-area-provider" },
      children,
    );
  SafeAreaProvider.displayName = "SafeAreaProvider";
  return { SafeAreaView, SafeAreaProvider };
});

// Mock Expo Router
vi.mock("expo-router", async () => {
  const React = await import("react");
  const Stack = ({ screenOptions, ...props }: any) =>
    React.createElement("div", { "data-testid": "stack" }, props.children);
  Stack.displayName = "Stack";
  Stack.Screen = ({ name, options, ...props }: any) =>
    React.createElement(
      "span",
      { "data-testid": "screen", "data-name": name },
      name,
    );

  const Tabs = ({ screenOptions, ...props }: any) =>
    React.createElement("div", { "data-testid": "tabs" }, props.children);
  Tabs.displayName = "Tabs";
  Tabs.Screen = ({ name, options, ...props }: any) =>
    React.createElement(
      "span",
      { "data-testid": "tab-screen", "data-name": name },
      name,
    );

  return {
    Stack,
    Tabs,
    useSegments: () => [],
    useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
    Redirect: ({ href }: any) =>
      React.createElement("div", {
        "data-testid": "redirect",
        "data-href": href,
      }),
  };
});

// Mock Expo Status Bar
vi.mock("expo-status-bar", async () => {
  const React = await import("react");
  return {
    StatusBar: ({ style, ...props }: any) =>
      React.createElement("div", {
        "data-testid": "status-bar",
        "data-style": style,
        ...props,
      }),
  };
});

// Mock @seed/ui components
vi.mock("@seed/ui", async () => {
  const React = await import("react");
  return {
    Button: ({ title, children, onPress, ...props }: any) =>
      React.createElement(
        "button",
        { ...props, onClick: onPress },
        title || children,
      ),
    Card: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    CardHeader: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    CardContent: ({ children, ...props }: any) =>
      React.createElement("div", props, children),
    Text: ({ children, ...props }: any) =>
      React.createElement("span", props, children),
    Input: ({ onChangeText, ...props }: any) =>
      React.createElement("input", {
        ...props,
        onChange: (e: any) => onChangeText?.(e.target.value),
      }),
  };
});
