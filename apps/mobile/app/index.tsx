import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, CardContent, CardHeader, Text } from "@seed/ui";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center p-4 gap-4">
        <Text className="text-2xl font-bold">Welcome to your app</Text>
        <Text className="text-muted-foreground text-center">
          This is a seed project. Start building your screens here.
        </Text>
        <Card className="w-full">
          <CardHeader>
            <Text className="text-lg font-semibold">Getting Started</Text>
          </CardHeader>
          <CardContent>
            <Text className="text-sm text-muted-foreground">
              Edit app/index.tsx to customize this screen.
            </Text>
            <Button title="Let's go" className="mt-4" onPress={() => {}} />
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
}
