// import { View, ScrollView, StyleSheet } from "react-native";
// import React from "react";

// // Importing Color Code
// import { Colors } from "./../../constants/Colors";

// // Importing Header Profile Address Bar Component
// import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
// import Divider from "./../../components/commonComponents/Divider";
// import SearchBar from "./../../components/commonComponents/SearchBar";

// import HistoryCard from "./../../components/historyCompo/HistoryCard";

// export default function History() {
//   return (
//     <ScrollView
//       style={{
//         backgroundColor: "#fff",
//       }}
//     >
//       <View style={styles.alignment}>
//         {/* Profile Bar */}
//         <HeaderAddressProfileBar />
//       </View>

//       {/* Search Bar Section */}
//       <SearchBar />

//       {/* History Divider */}
//       <Divider
//         name={"History"}
//         color={Colors.BOULDER}
//         fontSize={12}
//         fontFamily={"openSans-bold"}
//       />

//       {/* Food History Card */}
//       <HistoryCard />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   alignment: {
//     paddingHorizontal: 25,
//     paddingTop: 40,
//     paddingBottom: 15,
//   },
// });

import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getOrderHistory } from "./../services/api"; // Import the function to fetch order history

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Importing Header Profile Address Bar Component
import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
import Divider from "./../../components/commonComponents/Divider";
import SearchBar from "./../../components/commonComponents/SearchBar";

import HistoryCard from "./../../components/historyCompo/HistoryCard";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch order history when the component is mounted
  useEffect(() => {
    console.log("Tab => " + 1);

    const fetchHistory = async () => {
      console.log("Tab => " + 2);
      try {
        const response = await getOrderHistory();
        console.log("Tab => ", response.orders); // Log the orders array

        setHistory(response.orders); // Set only the orders array to history
        console.log("Tab => " + 3);
      } catch (error) {
        console.log("Tab => " + 4);
        setError("Failed to load history");
        console.log("Tab => " + 5);
      } finally {
        console.log("Tab => " + 6);
        setLoading(false);
        console.log("Tab => " + 7);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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
      {history.length > 0 ? (
        history.map((item, index) => (
          <HistoryCard key={index} data={item} /> // Pass data to HistoryCard
        ))
      ) : (
        <Text>No history available.</Text>
      )}
      {/* <HistoryCard /> */}
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

// import React, { useState, useEffect } from "react";
// import { View, ScrollView, Text, ActivityIndicator } from "react-native";
// import HistoryCard from "./../../components/historyCompo/HistoryCard"; // Import the HistoryCard component
// import { getOrderHistory } from "./../services/api"; // Import the function to fetch order history

// const History = () => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch order history when the component is mounted
//   useEffect(() => {
//     console.log("Tab => " + 1);

//     const fetchHistory = async () => {
//       console.log("Tab => " + 2);
//       try {
//         const response = await getOrderHistory();
//         console.log("Tab => ", response.orders); // Log the orders array

//         setHistory(response.orders); // Set only the orders array to history
//         console.log("Tab => " + 3);
//       } catch (error) {
//         console.log("Tab => " + 4);
//         setError("Failed to load history");
//         console.log("Tab => " + 5);
//       } finally {
//         console.log("Tab => " + 6);
//         setLoading(false);
//         console.log("Tab => " + 7);
//       }
//     };

//     fetchHistory();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     return <Text>{error}</Text>;
//   }

//   return (
//     <ScrollView>
//       <View
//         style={{
//           justifyContent: "center",
//           marginTop: 100,
//         }}
//       >
//         {history.length > 0 ? (
//           history.map((item, index) => (
//             <HistoryCard key={index} data={item} /> // Pass data to HistoryCard
//           ))
//         ) : (
//           <Text>No history available.</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default History;
