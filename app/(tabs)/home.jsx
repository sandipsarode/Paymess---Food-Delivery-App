import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Profile and Search Bar Components
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";

// Importing Different Components Section of Page
import OurPackages from "../../components/homeCompo/OurPackages";
import AppDescriptionSec from "../../components/homeCompo/AppDescriptionSec";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Location and Profile Icon Section */}
        <View style={styles.header}>
          <HeaderAddressProfileBar />
        </View>

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
