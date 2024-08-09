import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

// Importing Icons from expo
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

// Importing Color Code
import { Colors } from "../../constants/Colors";

export default function Wallet() {
  return (
    <View
      style={{
        height: "100%",
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
          <View style={styles.alignment}>
            <Ionicons
              name="location-sharp"
              size={35}
              color={Colors.VALENTINE_RED}
            />
            <View>
              <Text
                style={{
                  fontSize: 21,
                  fontFamily: "openSans-semiBold",
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "openSans",
                }}
              >
                Hanuman Nagar, Sharda Colony, Gondia
              </Text>
            </View>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={Colors.VALENTINE_RED}
              style={{ marginLeft: "auto" }}
            />
          </View>

          {/* Header Title */}
          <Text
            style={{
              fontSize: 22,
              fontFamily: "openSans-extraBold",
              color: Colors.VALENTINE_RED,
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
      <View style={styles.container}>
        {/* Coupon Header */}
        <View style={styles.alignment}>
          <MaterialCommunityIcons
            name="tag-plus"
            size={25}
            color={Colors.VALENTINE_RED}
          />
          <Text style={styles.contentHead}>Coupons</Text>
        </View>

        {/* Saperator */}
        <View style={styles.lineDvd} />

        {/* Current Coupon */}
        <View style={[styles.alignment, { justifyContent: "center" }]}>
          {/* Coupon discount Icon */}
          <MaterialCommunityIcons
            name="sale"
            size={26}
            color={Colors.PALATINATE_BLUE}
          />
          {/* Coupon details with coupon code */}
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "openSans",
              }}
            >
              Add ₹2000 to get ₹50 extra with
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "openSans-bold",
              }}
            >
              HUNGRY50
            </Text>
          </View>

          {/* Apply Button */}
          <Text
            style={{
              height: 26,
              marginLeft: "auto",
              fontSize: 12,
              color: "#fff",
              fontFamily: "openSans-semiBold",
              backgroundColor: Colors.VALENTINE_RED,
              paddingTop: 5,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            APPLY
          </Text>
        </View>

        {/* View all Coupons Button */}
        <View
          style={[
            styles.alignment,
            styles.btn,
            {
              backgroundColor: "#fff",
            },
          ]}
        >
          <Ionicons name="card" size={25} color={Colors.VALENTINE_RED} />
          <Text style={styles.contentHead}>View all Voucher Coupons</Text>
        </View>
      </View>

      {/* Available Balance Section */}
      <View style={styles.container}>
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
            {
              marginTop: 10,
              justifyContent: "space-evenly",
            },
          ]}
        >
          <View style={styles.addAmount}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "openSans-light",
              }}
            >
              + 100
            </Text>
          </View>
          <View style={styles.addAmount}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "openSans-light",
              }}
            >
              + 200
            </Text>
          </View>
          <View style={styles.addAmount}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "openSans-light",
              }}
            >
              + 500
            </Text>
          </View>
          <View style={styles.addAmount}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "openSans-light",
              }}
            >
              + 1000
            </Text>
          </View>
        </View>

        {/* Add Money Button */}
        <View
          style={[
            styles.alignment,
            styles.btn,
            {
              backgroundColor: Colors.SEA,
              paddingVertical: 12,
            },
          ]}
        >
          <Text style={[styles.contentHead, { fontSize: 20, color: "#fff" }]}>
            Add Money
          </Text>
        </View>
      </View>

      {/* Transaction Divider */}
      <View
        style={{
          width: "90%",
          marginHorizontal: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={styles.line} />
        <Text style={styles.txt}>Transaction</Text>
        <View style={styles.line} />
      </View>

      {/* Card according to transaction */}
      {/* <View style={[styles.container, { paddingHorizontal: 0 }]}>
        <View>
          <Text
            style={{
              fontFamily: "openSans",
              paddingHorizontal: 15,
              paddingBottom: 8,
            }}
          >
            June 12, 2024
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              padding: 15,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.BGCOLOR,
                borderRadius: 50,
                elevation: 5,
              }}
            >
              <Fontisto name="wallet" size={25} color={Colors.VALENTINE_RED} />
            </View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View> */}
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
    borderRadius: 10,
    elevation: 8,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.3,
  },
  alignment: {
    display: "flex",
    flexDirection: "row",
  },
  contentHead: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    marginLeft: 10,
  },
  lineDvd: {
    width: "90%",
    margin: "auto",
    marginVertical: 11,
    borderStyle: "dashed",
    borderTopWidth: 1,
    borderTopColor: Colors.BOULDER,
  },
  btn: {
    width: "100%",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 5,
  },
  addAmount: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 5,
    width: "auto",
  },
  line: {
    width: 130,
    height: 1,
    backgroundColor: Colors.BOULDER,
  },
  txt: {
    margin: 5,
    color: Colors.BOULDER,
    fontSize: 12,
    fontFamily: "openSans-bold",
  },
});
