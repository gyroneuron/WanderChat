import { Stack, Tabs } from "expo-router"
import index from "."


export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="+not-found"/>
      <Stack.Screen name="index"/>
    </Stack>

  )
}