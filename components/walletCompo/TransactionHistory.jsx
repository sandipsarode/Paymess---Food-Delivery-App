import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

// Importing Icons from Expo-icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

// Reusable TransactionBlock component
const TransactionBlock = ({
  date,
  time,
  type,
  amount,
  balance,
  iconName,
  iconType,
  iconColor,
  bgColor,
  onPress,
}) => {
  const IconComponent =
    iconType === "MaterialCommunityIcons" ? MaterialCommunityIcons : Fontisto;

  return (
    <View>
      <Text style={styles.dateText}>{date}</Text>

      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.transactionContainer,
          type == "Failed"
            ? { backgroundColor: "#FFC8C8" }
            : { backgroundColor: "#fff" },
        ]}
      >
        {/* Icon */}
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: bgColor || Colors.BGCOLOR },
          ]}
        >
          <IconComponent name={iconName} size={28} color={iconColor} />
        </View>

        {/* Transaction Description */}
        <View style={styles.transactionDescription}>
          <Text style={styles.transTxt}>{type}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>

        {/* Transaction Amount and Balance */}
        <View style={styles.transactionAmountContainer}>
          <Text
            style={[
              styles.transTxt,
              // { color: iconColor },
              type == "Failed" ? { color: bgColor } : { color: iconColor },
            ]}
          >
            {amount}
          </Text>
          <Text style={styles.balanceText}>Closing Balance: {balance}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function TransactionHistory() {
  const router = useRouter();

  const transactions = [
    {
      date: "June 12, 2024",
      time: "19.07",
      type: "Paid",
      amount: "- ₹ 300",
      balance: "₹227",
      iconName: "wallet",
      iconType: "Fontisto",
      iconColor: Colors.VALENTINE_RED,
      onPress: () => router.push("/wallet-screens/paid-amount"),
    },
    {
      date: "June 02, 2024",
      time: "09.57",
      type: "Top Up",
      amount: "+ ₹ 300",
      balance: "₹527",
      iconName: "credit-card-plus",
      iconType: "MaterialCommunityIcons",
      iconColor: Colors.KELLY_GREEN,
    },
    {
      date: "June 05, 2024",
      time: "15.30",
      type: "Failed",
      amount: "₹ 500",
      balance: "₹527",
      iconName: "alert-circle",
      iconType: "MaterialCommunityIcons",
      iconColor: "#fff",
      bgColor: Colors.VALENTINE_RED,
    },
  ];

  return (
    <View>
      {transactions.map((transaction, index) => (
        <TransactionBlock key={index} {...transaction} />
      ))}
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  dateText: {
    fontFamily: "poppins",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  transactionContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
  },
  transactionDescription: {
    marginLeft: 15,
  },
  transTxt: {
    fontSize: 18,
    fontFamily: "poppins-semiBold",
  },
  timeText: {
    fontSize: 12,
    fontFamily: "poppins-light",
  },
  transactionAmountContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  balanceText: {
    fontSize: 10.5,
    fontFamily: "poppins-light",
  },
});
