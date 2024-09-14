import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Icons from LocalStorage
import icon from "./../../assets/images/week-1.png";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HistoryCard() {
  return (
    <View>
      {/* Food History Card */}
      <View
        style={{
          marginTop: 20,
          paddingTop: 10,
          borderRadius: 10,
          elevation: 3,
          backgroundColor: Colors.BGCOLOR,
          marginVertical: 25,
          marginHorizontal: 25,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          {/* Food Image */}
          <View
            style={{
              width: "25%",
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icon}
              style={{
                borderRadius: 50,
                width: "80%",
                height: "80%",
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={{ width: "75%" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "80%",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "openSans-semiBold",
                    textAlign: "justify",
                  }}
                >
                  North Indian Standard (Veg)
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "openSans-semiBold",
                    color: Colors.BOULDER,
                  }}
                >
                  Gondia
                </Text>
              </View>
              <View style={{ marginLeft: "auto" }}>
                <MaterialCommunityIcons
                  name="square-circle"
                  size={28}
                  color={Colors.KELLY_GREEN}
                />
              </View>
            </View>

            {/* Veg/Non-Veg Selector */}
            <View style={styles.foodTypeContainer}>
              <View style={styles.foodTypeButton}>
                <Text style={styles.btnText}>Delivered</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.foodTypeButton,
                  { display: "flex", flexDirection: "row" },
                ]}
              >
                <Ionicons name="reload" size={22} color="white" />
                <Text style={[styles.btnText, { marginLeft: 5 }]}>Reorder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Time Detail */}
        <View
          style={{
            elevation: 3,
            paddingVertical: 6,
            backgroundColor: "#F9F8F8",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "openSans-semiBold",
              color: Colors.BOULDER,
              textAlign: "center",
            }}
          >
            23 Sep 2023 at 8:26PM
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alignment: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
  voucherTxt: {
    fontSize: 12,
    fontFamily: "openSans-semiBold",
  },
  foodTypeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  foodTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 3,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: Colors.VALENTINE_RED,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "openSans-bold",
  },
});
