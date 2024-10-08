import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing the Components
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
import Divider from "../../components/commonComponents/Divider";

import CouponCardSec from "./../../components/walletCompo/CouponCardSec";
import AddAmountSec from "./../../components/walletCompo/AddAmountSec";
import TransactionHistory from "./../../components/walletCompo/TransactionHistory";

export default function Wallet() {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      {/* Header Content */}
      <LinearGradient
        colors={[Colors.GOLDEN_FIZZ, Colors.SUPERNOVA]}
        style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      >
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: 40,
            paddingBottom: 15,
          }}
        >
          <HeaderAddressProfileBar />

          {/* Header Title */}
          <Text
            style={{
              fontSize: 22,
              fontFamily: "poppins-extraBold",
              color: Colors.EAGLE_GREEN,
              letterSpacing: 5,
              textAlign: "center",
              marginTop: 25,
            }}
          >
            WALLET
          </Text>
        </View>
      </LinearGradient>

      {/* Coupon Section */}
      <CouponCardSec />

      {/* Available Balance Section */}
      <AddAmountSec />

      {/* Transaction Divider */}
      <Divider
        name={"Transaction"}
        color={Colors.BOULDER}
        fontSize={12}
        fontFamily={"poppins-bold"}
      />

      {/* Card according to transaction */}
      <View
        style={[
          styles.container,
          { paddingHorizontal: 0, paddingVertical: 20, marginBottom: 80 },
        ]}
      >
        {/* Paid Transaction */}
        <TransactionHistory />
      </View>
    </ScrollView>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
    borderRadius: 10,
    elevation: 5,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.3,
  },
});
