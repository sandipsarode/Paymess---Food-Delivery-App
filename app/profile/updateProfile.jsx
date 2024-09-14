import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function UpdateProfile() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View>
      <Text>UpdateProfile</Text>
    </View>
  );
}
