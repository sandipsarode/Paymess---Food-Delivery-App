import { useEffect, useState } from "react";
import SplashScreen from "./../components/SplashScreen";
import { Text, View } from "react-native";

import SignIn from "./auth/sign-in/index";

export default function Index() {
  // Display the Splash Screen based on condition
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Show Splash Screen */}
      {isShowSplash ? <SplashScreen /> : <SignIn />}
    </View>
  );
}
