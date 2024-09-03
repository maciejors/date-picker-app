import { Stack } from "expo-router";
import { registerTranslation, en } from "react-native-paper-dates";

registerTranslation("en", en);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
