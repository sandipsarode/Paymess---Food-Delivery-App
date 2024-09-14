import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function HeaderAddressProfileBar() {
  const router = useRouter();
  return (
    <View style={styles.alignment}>
      <Ionicons name="location-sharp" size={35} color={Colors.VALENTINE_RED} />
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

      <TouchableOpacity
        onPress={() => router.push("/profile/profile")}
        style={{ marginLeft: "auto" }}
      >
        <Ionicons
          name="person-circle-outline"
          size={35}
          color={Colors.VALENTINE_RED}
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
