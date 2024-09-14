import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Profile and Search Bar Components
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
import SearchBar from "./../../components/commonComponents/SearchBar";

// Importing Different Components Section of Page
import WeeklySchedule from "../../components/exploreCompo/WeeklySchedule";
import OurPackages from "../../components/exploreCompo/OurPackages";
import AppDescriptionSec from "../../components/exploreCompo/AppDescriptionSec";

export default function Explore() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Location and Profile Icon Section */}
        <View style={styles.header}>
          <HeaderAddressProfileBar />
        </View>

        {/* Search Bar Section */}
        <SearchBar />

        {/* Weekly Schedule Section */}
        <WeeklySchedule />

        {/* Our Packages Section */}
        <OurPackages />

        {/* New "Be Tension Free!" Section */}
        <AppDescriptionSec />
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
    paddingBottom: 30, // Adds space at the bottom
  },

  // Header Address Bar
  header: {
    padding: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
});
