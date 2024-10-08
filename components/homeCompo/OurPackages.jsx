import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";
import Divider from "../commonComponents/Divider";

export default function OurPackages() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/OurPackageBG.png")}
        style={styles.packagesBackground}
        resizeMode="cover"
      >
        <View style={styles.packagesContainer}>
          {/* Our Packages Divider */}
          <Divider
            name={"Our Packages"}
            color={Colors.EAGLE_GREEN}
            fontSize={21}
            fontFamily={"poppins-extraBold"}
          />

          {/* Veg and Non-Veg Toggle */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                { backgroundColor: Colors.KELLY_GREEN },
              ]}
            >
              <Text style={styles.toggleButtonText}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                { backgroundColor: Colors.VALENTINE_RED },
              ]}
            >
              <Text style={styles.toggleButtonText}>Non-Veg</Text>
            </TouchableOpacity>
          </View>

          {/* Package Descriptions */}
          <View style={styles.packageItem}>
            <Text style={styles.packageType}>Regular</Text>
            <Text style={styles.packageDescription}>
              1 Sabji + Rice + Daal Fry + 3 Chapati + Salad
            </Text>
          </View>

          <View style={styles.packageItem}>
            <Text style={styles.packageType}>Special</Text>
            <Text style={styles.packageDescription}>
              1 Matar Paneer + 1 Mix Veg + Rice + Daal Fry + 3 Chapati + Salad +
              Papad + Achar + Dahi [Subject to Availability]
            </Text>
          </View>

          <View style={styles.packageItem}>
            <Text style={styles.packageType}>Deluxe</Text>
            <Text style={styles.packageDescription}>
              1 Matar Paneer + 1 Mix Veg + Jeera Rice + Daal Fry + 4 Chapati + 1
              Sweet [Rasgulla or Gulab Jamun] + Salad + Papad + Achar [Subject
              to Availability]
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // Our Package Section
  packagesContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  toggleButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "poppins-bold",
    textAlign: "center",
  },
  // Package Description
  packageItem: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 10,
  },
  packageType: {
    fontSize: 20,
    fontFamily: "poppins-extraBold",
    textAlign: "center",
    color: Colors.EAGLE_GREEN,
    marginBottom: 5,
  },
  packageDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    fontFamily: "poppins-semiBold",
  },
});
