import { useEffect, useState } from "react";
import { View } from "react-native";

import SplashScreen from "../components/splashScreen/SplashScreen";
import SignIn from "./auth/sign-in/index";

import Wallet from "./(tabs)/wallet";
import Coupon from "../components/walletCompo/Coupon";
// import CouponVoucher from "../components/wallet/CouponVoucher";
import Explore from "./(tabs)/explore";
import History from "./(tabs)/history";

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
      {/* <Explore /> */}
      {/* <History /> */}
      {/* <Wallet /> */}
      {/* <Coupon /> */}
      {/* <CouponVoucher /> */}
    </View>
  );
}
