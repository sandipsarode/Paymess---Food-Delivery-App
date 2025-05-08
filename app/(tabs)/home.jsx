import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Different Components Section of Page
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
import OurPackages from "../../components/homeCompo/OurPackages";
import AppDescriptionSec from "../../components/homeCompo/AppDescriptionSec";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Location and Profile Icon Section */}
      <View style={styles.header}>
        <HeaderAddressProfileBar />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* New "Be Tension Free!" Section */}
        <AppDescriptionSec />

        {/* Our Packages Section */}
        <OurPackages />
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

// import React, { useEffect, useRef } from "react";
// import { View, ScrollView, StyleSheet } from "react-native";
// import { useLocalSearchParams } from "expo-router";

// // Components
// import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
// import AppDescriptionSec from "../../components/homeCompo/AppDescriptionSec";
// import OurPackages from "../../components/homeCompo/OurPackages";
// import { useIsFocused } from "@react-navigation/native";

// export default function Home() {
//   const scrollViewRef = useRef(null);
//   const ourPackagesRef = useRef(null);
//   const { scrollToPackages } = useLocalSearchParams();

//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (isFocused) {
//       console.log("scrollToPackages => " + scrollToPackages);
//     }

//     if (scrollToPackages === "true" && ourPackagesRef.current) {
//       console.log("innnnnnn");

//       // Delay for smooth rendering before scrolling
//       setTimeout(() => {
//         scrollViewRef.current?.scrollTo({
//           y: ourPackagesRef.current.offsetTop,
//           animated: true,
//         });
//       }, 100);
//     }
//   }, [scrollToPackages, isFocused]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <HeaderAddressProfileBar />
//       </View>
//       <ScrollView
//         ref={scrollViewRef}
//         contentContainerStyle={styles.scrollViewContent}
//       >
//         <AppDescriptionSec />

//         <View ref={ourPackagesRef}>
//           <OurPackages />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//   },
//   scrollViewContent: {
//     paddingBottom: 30,
//   },
//   header: {
//     paddingHorizontal: 25,
//     paddingTop: 40,
//     paddingBottom: 15,
//   },
// });
