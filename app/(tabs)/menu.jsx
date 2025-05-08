import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Importing Different Components Section of Page
import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
import WeeklyMenuCard from "./../../components/menuCompo/WeeklyMenuCard";

export default function Menu() {
  return (
    <View style={styles.container}>
      {/* Location and Profile Icon Section */}
      <View style={styles.header}>
        <HeaderAddressProfileBar />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import { useIsFocused } from "@react-navigation/native";

// // Components
// import HeaderAddressProfileBar from "../../components/commonComponents/HeaderAddressProfileBar";
// import WeeklyMenuCard from "./../../components/menuCompo/WeeklyMenuCard";
// import UnsubscribeModal from "./../../components/menuCompo/UnsubscribeModal";

// // API Calls
// import { profileInfo, getSubscriptionDetails } from "./../../app/services/api";
// import { useNavigation, useRouter } from "expo-router";

// export default function Menu() {
//   const [loading, setLoading] = useState(false);
//   const [subscriptionDetail, setSubscriptionDetail] = useState("inactive");

//   const isFocused = useIsFocused();
//   const navigation = useNavigation(); // Navigation hook
//   const router = useRouter();

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Example of how to fetch and set data
//         // const profile = await profileInfo();
//         // const userId = profile.addresses[0]?.user_id;
//         // const subscription = await getSubscriptionDetails(userId);
//         // setSubscriptionDetail(subscription);
//         console.log("Fetched data successfully");
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     if (isFocused) {
//       handleDayMenu();
//     }
//   }, [isFocused]);

//   // Handle the menu based on subscription status
//   const handleDayMenu = () => {
//     console.log("subscription ->", subscriptionDetail);
//   };

//   const navigateToPackages = () => {
//     // Pass signal to scroll to OurPackages section
//     router.push({
//       pathname: "/(tabs)/home",
//       params: { scrollToPackages: true },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.header}>
//           <HeaderAddressProfileBar />
//         </View>

//         {/* Weekly Menu Cards Section */}
//         <WeeklyMenuCard />
//       </ScrollView>

//       {/* Overlay Modal */}
//       {subscriptionDetail !== "active" && (
//         <View style={styles.modalOverlay}>
//           <UnsubscribeModal onSubscribeNow={navigateToPackages} />
//         </View>
//       )}
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
//   modalOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
// });
