import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Importing Color Code
import { Colors } from "../../constants/Colors";

export default function AppDescriptionSec() {
  return (
    <View>
      {/* New "Be Tension Free!" Section */}
      <View style={styles.tensionFreeContainer}>
        <Text style={styles.tensionFreeTitle}>BE TENSION FREE!</Text>
        <Text style={styles.tensionFreeText}>
          On-Time Delivery You have the option to schedule your delivery time to
          suit your needs. Our efficient delivery system ensures your order
          arrives exactly when you want it, taking care of all your needs.
        </Text>
        <Text style={styles.tensionFreeText}>
          You can incorporate this text into your app, placing it on the
          relevant screens such as the order summary or confirmation screen to
          reassure your customers about the reliability and convenience of your
          delivery service.
        </Text>
        {/* BenefitsList Icons and Text Section */}
        <View style={styles.benefitsList}>
          <Text style={styles.benefitItem}>✔️ Expert Packaging</Text>
          <Text style={styles.benefitItem}>✔️ Complimentary Delivery</Text>
          <Text style={styles.benefitItem}>
            ✔️ Flexible Delivery Scheduling
          </Text>
        </View>
        {/* Image Section */}
        <Image
          source={require("../../assets/images/beTensionFreeImg.png")}
          style={styles.deliveryImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // New "Be Tension Free!" Section
  tensionFreeContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  tensionFreeTitle: {
    fontSize: 21,
    color: Colors.EAGLE_GREEN,
    marginBottom: 10,
    fontFamily: "poppins-bold",
  },
  tensionFreeText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
    textAlign: "justify",
    fontFamily: "poppins-semiBold",
  },

  // BenefitsList Icons and Text Section
  benefitsList: {
    marginBottom: 10,
  },
  benefitItem: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    fontFamily: "poppins-semiBold",
  },
  deliveryImage: {
    width: "100%",
    height: 300,
    marginTop: 10,
  },
});
