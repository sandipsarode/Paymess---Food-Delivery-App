import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

import { useRouter } from "expo-router";

// Importing ColorCode
import { Colors } from "../../constants/Colors";

// Importing Expo Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing Profile Icon
import profile from "../../assets/images/profile.jpg";

export default function Profile() {
  const router = useRouter();

  //   Setting the values of the Profile Options
  const options = [
    { icon: Octicons, name: "checklist", text: "Your Orders", size: 20 },
    {
      icon: FontAwesome5,
      name: "address-book",
      text: "Address Book",
      size: 20,
    },
    { icon: Ionicons, name: "language", text: "Choose Language", size: 23 },
    { icon: MaterialIcons, name: "info-outline", text: "About", size: 25 },
    {
      icon: MaterialCommunityIcons,
      name: "help-circle-outline",
      text: "Help",
      size: 25,
    },
    { icon: MaterialIcons, name: "settings", text: "Settings", size: 25 },
    { icon: MaterialIcons, name: "logout", text: "Log Out", size: 25 },
  ];

  return (
    <View style={styles.container}>
      {/* Arrow for back to main page */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={Colors.VALENTINE_RED} />
      </TouchableOpacity>

      {/* Profile */}
      <View style={[styles.cardProperty, styles.alignment]}>
        <Image source={profile} style={styles.icon} />
        <Text style={styles.title}>Sandip Jin Sakai</Text>
        <FontAwesome5
          name="edit"
          size={28}
          color={Colors.VALENTINE_RED}
          style={styles.editIconRight}
        />
      </View>

      {/* Wallet */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/wallet")}
        style={[styles.cardProperty, styles.alignment]}
      >
        <Text style={[styles.icon, styles.currencyIcon]}>₹</Text>
        <Text style={styles.title}>Wallet</Text>
        <View style={styles.walletAmount}>
          <Text style={styles.walletText}>₹ 5000</Text>
        </View>
      </TouchableOpacity>

      {/* Profile Update Options */}
      <View style={[styles.cardProperty, { paddingTop: 20 }]}>
        {options.map((option, index) => (
          <View key={index} style={[styles.alignment, styles.optionSpacing]}>
            <View style={styles.editIcon}>
              <option.icon
                name={option.name}
                size={option.size}
                color={Colors.VALENTINE_RED}
              />
            </View>
            <Text style={styles.updateOptionTxt}>{option.text}</Text>
            <TouchableOpacity style={styles.editIconRight}>
              <MaterialIcons
                name="arrow-right"
                size={38}
                color={Colors.VALENTINE_RED}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 55,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardProperty: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
  },
  alignment: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  editIconRight: {
    marginLeft: "auto",
  },
  title: {
    fontSize: 22,
    fontFamily: "openSans-bold",
    marginLeft: 15,
  },
  updateOptionTxt: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    marginLeft: 15,
  },
  currencyIcon: {
    textAlign: "center",
    backgroundColor: Colors.SEA,
    color: "#fff",
    fontSize: 38,
  },
  walletAmount: {
    backgroundColor: Colors.SEA,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: "auto",
  },
  walletText: {
    fontSize: 18,
    fontFamily: "openSans-bold",
    color: "#fff",
  },
  editIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.BGCOLOR,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  optionSpacing: {
    marginBottom: 20,
  },
});
