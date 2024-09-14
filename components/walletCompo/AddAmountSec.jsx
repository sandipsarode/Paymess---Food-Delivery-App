import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

// Importing Icons from Expo-icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";

export default function AddAmountSec() {
  const AddAmount = ({ amount }) => (
    <View style={styles.addAmount}>
      <Text style={styles.amountText}>{amount}</Text>
    </View>
  );

  return (
    <View>
      {/* Available Balance Section */}
      <View style={[styles.container, { marginBottom: 20 }]}>
        {/* Header */}
        <View style={styles.alignment}>
          <MaterialCommunityIcons
            name="wallet"
            size={25}
            color={Colors.VALENTINE_RED}
          />
          <Text style={styles.contentHead}>Available Balance</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "openSans-semiBold",
              marginLeft: "auto",
            }}
          >
            ₹ 5000
          </Text>
        </View>

        {/* Money Input Box */}
        <TextInput
          placeholder="₹ Enter Amount"
          style={{
            fontSize: 20,
            fontFamily: "openSans",
            padding: 10,
            paddingVertical: 12,
            backgroundColor: "#fff",
            elevation: 5,
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        {/* Add specified Money */}
        <View
          style={[
            styles.alignment,
            { justifyContent: "space-evenly", marginTop: 14 },
          ]}
        >
          {["+ 100", "+ 200", "+ 500", "+ 1000"].map((amount, index) => (
            <TouchableOpacity>
              <AddAmount key={index} amount={amount} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Money Button */}
        <TouchableOpacity
          style={[
            styles.alignment,
            styles.btn,
            {
              backgroundColor: Colors.SEA,
            },
          ]}
        >
          <Text style={[styles.contentHead, { color: "#fff" }]}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  alignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentHead: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    marginLeft: 10,
  },
  btn: {
    width: "100%",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 5,
  },
  addAmount: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 2,
    width: "auto",
  },
  amountText: {
    fontSize: 16,
    fontFamily: "openSans-light",
  },
});
