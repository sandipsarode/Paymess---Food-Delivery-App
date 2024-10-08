import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Profile and Search Bar Components
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";

// Importing Different Components Section of Page
import WeeklySchedule from "../../components/homeCompo/WeeklySchedule";

export default function Menu() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Location and Profile Icon Section */}
        <View style={styles.header}>
          <HeaderAddressProfileBar />
        </View>

        {/* Weekly Schedule Section */}
        <WeeklySchedule />
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
