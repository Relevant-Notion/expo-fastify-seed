import React from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

/* eslint-disable @typescript-eslint/no-explicit-any */
vi.mock("react-native", () => ({
  View: React.forwardRef(({ children, className, ...props }: any, ref: any) =>
    React.createElement("div", { ...props, className, ref }, children),
  ),
  Text: React.forwardRef(({ children, className, ...props }: any, ref: any) =>
    React.createElement("span", { ...props, className, ref }, children),
  ),
  TextInput: React.forwardRef(({ className, ...props }: any, ref: any) =>
    React.createElement("input", { ...props, className, ref }),
  ),
  Pressable: React.forwardRef(
    ({ children, className, ...props }: any, ref: any) =>
      React.createElement(
        "button",
        { ...props, className, ref },
        typeof children === "function"
          ? children({ pressed: false })
          : children,
      ),
  ),
  SafeAreaView: React.forwardRef(
    ({ children, className, ...props }: any, ref: any) =>
      React.createElement("div", { ...props, className, ref }, children),
  ),
  ScrollView: React.forwardRef(
    ({ children, className, ...props }: any, ref: any) =>
      React.createElement("div", { ...props, className, ref }, children),
  ),
}));
/* eslint-enable @typescript-eslint/no-explicit-any */
