import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

// Importing Expo Icons
import Ionicons from "@expo/vector-icons/Ionicons";

// Importing ColorCode
import { Colors } from "../../constants/Colors";

export default function PaidAmount() {
  const router = useRouter();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingVertical: 55,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back" size={28} color={Colors.VALENTINE_RED} />
      </TouchableOpacity>

      {/* Transaction Description */}
      <View
        style={{
          padding: 20,
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "openSans-bold",
          }}
        >
          ₹ 300
        </Text>

        {/* Payment Details */}
        <View style={{}}>
          {/* Status */}
          <View style={styles.alignment}>
            <Ionicons
              name="checkmark-circle"
              size={21}
              color={Colors.KELLY_GREEN}
            />
            <Text style={styles.paymentTxt}>Completed</Text>
          </View>

          {/* Divider */}
          <View
            style={{
              flexDirection: "row",
              width: "60%",
              marginVertical: 3,
            }}
          >
            <View style={styles.line} />
          </View>

          {/* Date and Time */}
          <View style={styles.alignment}>
            <Text style={styles.paymentTxt}>12th June 2024, 8:45 pm</Text>
          </View>
        </View>

        {/* Delivery Info */}
        <View>
          {/* Status */}
          <View style={styles.alignment}>
            <Ionicons
              name="checkmark-circle"
              size={21}
              color={Colors.KELLY_GREEN}
            />
            <Text style={styles.paymentTxt}>Deliver to</Text>
          </View>

          {/* Divider */}
          <View
            style={{
              flexDirection: "row",
              width: "60%",
              marginVertical: 3,
              margin: "auto",
            }}
          >
            <View style={styles.line} />
          </View>

          {/* Address */}
          <View style={styles.alignment}>
            <Text style={styles.paymentTxt}>
              Hanwate Complex 1st Floor, Ring Road, Gondia
            </Text>
          </View>
        </View>
      </View>

      {/* Menu Card */}
      <View
        style={{
          marginTop: 20,
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderRadius: 10,
          elevation: 3,
          backgroundColor: Colors.BGCOLOR,
        }}
      >
        <View style={styles.menuHead}>
          <Text style={styles.menuTitle}>Lunch</Text>
          <Text style={styles.menuPrice}>₹ 110</Text>
        </View>
        <Text style={styles.menuItem}>
          1 Shabji + Rice + Daal Fry + 3 Chapati + Salad
        </Text>

        {/* Divider */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginVertical: 10,
          }}
        >
          <View style={[styles.line, { height: 0.5 }]} />
        </View>

        <View style={styles.menuHead}>
          <Text style={styles.menuTitle}>Dinner</Text>
          <Text style={styles.menuPrice}>₹ 190</Text>
        </View>
        <Text style={styles.menuItem}>
          2 Shabji + Rice + Daal Fry + 3 Chapati + Salad + Mango Juice
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.BOULDER,
  },
  paymentTxt: {
    fontSize: 12,
    fontFamily: "openSans-bold",
    color: Colors.BOULDER,
    textAlign: "center",
  },
  menuHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 22,
    fontFamily: "pacifico",
    color: Colors.VALENTINE_RED,
  },
  menuPrice: {
    fontSize: 18,
    fontFamily: "openSans-bold",
  },
  menuItem: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    marginTop: 5,
  },
});
