import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Different Components Section of Page
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
import WeeklyMenuCard from "./../../components/menuCompo/WeeklyMenuCard";

export default function Menu() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Location and Profile Icon Section */}
        <View style={styles.header}>
          <HeaderAddressProfileBar />
        </View>

        {/* Weekly Menu Cards Section */}
        <WeeklyMenuCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    height: "100%",
  },
  scrollViewContent: {
    paddingBottom: 30,
  },

  // Header Address Bar
  header: {
    padding: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
});
