import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";

// Importing Color Code
import { Colors } from "./../constants/Colors";

// Importing logo from localStorage
import Logo from "./../assets/images/logo.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Logo of the App */}
      <View>
        <Image source={Logo} style={styles.image} />
      </View>

      {/* Loader */}
      <ActivityIndicator
        size="100"
        color={Colors.REDDISH_ORANGE}
        style={{ marginTop: -150, marginBottom: 50 }}
      />

      {/* Tag Line */}
      <Text style={styles.txt}>From Our Kitchen to Your Doorstep</Text>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SUPERNOVA,
    height: "100%",
  },
  image: {
    height: "70%",
    resizeMode: "cover",
  },
  txt: {
    fontSize: 21,
    // fontFamily: "roboto",
    marginBottom: -100,
  },
});
