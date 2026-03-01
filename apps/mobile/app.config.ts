import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Expo Fastify Seed",
  slug: "expo-fastify-seed",
  scheme: "seed",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  runtimeVersion: { policy: "fingerprint" },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.example.seed",
  },
  android: {
    package: "com.example.seed",
  },
  plugins: ["expo-router"],
  extra: {
    env: process.env.EXPO_PUBLIC_ENV ?? "dev",
  },
};

export default config;
