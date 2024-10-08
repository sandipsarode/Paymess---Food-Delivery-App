import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Specify the required fonts in the app
  useFonts({
    poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppins-light": require("./../assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "poppins-semiBold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
    "poppins-extraBold": require("./../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* If the user is authenticated, show the main app */}
      {isAuthenticated ? (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="tabs/home" />
          <Stack.Screen name="tabs/menu" />
          <Stack.Screen name="tabs/wallet" />
        </>
      ) : (
        <>
          <Stack.Screen name="auth/sign-in" />
          <Stack.Screen name="auth/sign-up" />
        </>
      )}
    </Stack>
  );
}
