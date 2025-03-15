import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  // we want to add the index header that we see
  // we expand the stack component to this <Stack></Stack>
  return (
    <Stack>
      {/* 2. and within it we do this  */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(movies/[id])" options={{ headerShown: false }} />
    </Stack>
  );
}
