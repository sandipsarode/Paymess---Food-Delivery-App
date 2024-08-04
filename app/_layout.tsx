import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    roboto: require("./../assets/fonts/Roboto-Medium.ttf"),
    pacifico: require("./../assets/fonts/Pacifico-Regular.ttf"),
    openSans: require("./../assets/fonts/OpenSans-Regular.ttf"),
    "openSans-semiBold": require("./../assets/fonts/OpenSans-SemiBold.ttf"),
    "openSans-bold": require("./../assets/fonts/OpenSans-Bold.ttf"),
    "openSans-extraBold": require("./../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
