import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Icon from ExpoIcons
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderAddressProfileBar() {
  const router = useRouter();

  return (
    <View style={styles.alignment}>
      {/* Location Icon */}
      <Ionicons name="location-sharp" size={35} color={Colors.EAGLE_GREEN} />
      {/* Home Address Text */}
      <View>
        <Text
          style={{
            fontSize: 21,
            fontFamily: "poppins-semiBold",
          }}
        >
          Home
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "poppins",
          }}
        >
          Hanuman Nagar, Sharda Colony, Gondia
        </Text>
      </View>

      {/* Profile Icon */}
      <TouchableOpacity
        onPress={() => router.push("/profile/profile")}
        style={{ marginLeft: "auto" }}
      >
        <Ionicons
          name="person-circle-outline"
          size={35}
          color={Colors.EAGLE_GREEN}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  alignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
