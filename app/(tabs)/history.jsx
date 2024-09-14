import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Importing Header Profile Address Bar Component
import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
import Divider from "./../../components/commonComponents/Divider";
import SearchBar from "./../../components/commonComponents/SearchBar";

import HistoryCard from "./../../components/historyCompo/HistoryCard";

export default function History() {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.alignment}>
        {/* Profile Bar */}
        <HeaderAddressProfileBar />
      </View>

      {/* Search Bar Section */}
      <SearchBar />

      {/* History Divider */}
      <Divider
        name={"History"}
        color={Colors.BOULDER}
        fontSize={12}
        fontFamily={"openSans-bold"}
      />

      {/* Food History Card */}
      <HistoryCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  alignment: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
});
