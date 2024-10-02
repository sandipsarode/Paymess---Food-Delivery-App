import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Colors } from "./../../constants/Colors";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar({ onSearch, placeHolder }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text); // Pass the search text to the parent component
  };

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={Colors.VALENTINE_RED} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeHolder}
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Search Bar Section
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "openSans",
    fontSize: 16,
  },
});
