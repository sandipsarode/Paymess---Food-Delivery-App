import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
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
    roboto: require("./../assets/fonts/Roboto-Medium.ttf"),
    pacifico: require("./../assets/fonts/Pacifico-Regular.ttf"),
    openSans: require("./../assets/fonts/OpenSans-Regular.ttf"),
    "openSans-light": require("./../assets/fonts/OpenSans-Light.ttf"),
    "openSans-semiBold": require("./../assets/fonts/OpenSans-SemiBold.ttf"),
    "openSans-bold": require("./../assets/fonts/OpenSans-Bold.ttf"),
    "openSans-extraBold": require("./../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* If the user is authenticated, show the main app */}
      {isAuthenticated ? (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="tabs/explore" />
          <Stack.Screen name="tabs/wallet" />
          <Stack.Screen name="tabs/history" />
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
