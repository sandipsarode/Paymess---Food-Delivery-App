// // import { View, ScrollView, StyleSheet } from "react-native";
// // import React from "react";

// // // Importing Color Code
// // import { Colors } from "./../../constants/Colors";

// // // Importing Header Profile Address Bar Component
// // import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
// // import Divider from "./../../components/commonComponents/Divider";
// // import SearchBar from "./../../components/commonComponents/SearchBar";

// // import HistoryCard from "./../../components/historyCompo/HistoryCard";

// // export default function History() {
// //   return (
// //     <ScrollView
// //       style={{
// //         backgroundColor: "#fff",
// //       }}
// //     >
// //       <View style={styles.alignment}>
// //         {/* Profile Bar */}
// //         <HeaderAddressProfileBar />
// //       </View>

// //       {/* Search Bar Section */}
// //       <SearchBar />

// //       {/* History Divider */}
// //       <Divider
// //         name={"History"}
// //         color={Colors.BOULDER}
// //         fontSize={12}
// //         fontFamily={"openSans-bold"}
// //       />

// //       {/* Food History Card */}
// //       <HistoryCard />
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   alignment: {
// //     paddingHorizontal: 25,
// //     paddingTop: 40,
// //     paddingBottom: 15,
// //   },
// // });

// ======================================================================================================================================

// import { View, ScrollView, StyleSheet, Text } from "react-native";
// import React, { useEffect, useState } from "react";
// import { getOrderHistory } from "./../services/api"; // Import the function to fetch order history
// import Spinner from "react-native-loading-spinner-overlay";

// // Importing Color Code
// import { Colors } from "./../../constants/Colors";

// // Importing Header Profile Address Bar Component
// import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
// import Divider from "./../../components/commonComponents/Divider";
// import SearchBar from "./../../components/commonComponents/SearchBar";

// import HistoryCard from "./../../components/historyCompo/HistoryCard";

// export default function History() {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch order history when the component is mounted
//   useEffect(() => {
//     console.log("Tab => " + 1);

//     const fetchHistory = async () => {
//       setLoading(true);
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

//   if (error) {
//     return <Text>{error}</Text>;
//   }

//   const handleSearch = (searchText) => {};

//   return (
//     <ScrollView
//       style={{
//         backgroundColor: "#fff",
//       }}
//     >
//       <Spinner
//         visible={loading}
//         textContent={"Loading..."}
//         textStyle={{ color: "#FFF" }}
//         overlayColor="rgba(0, 0, 0, 0.7)"
//       />
//       <View style={styles.alignment}>
//         {/* Profile Bar */}
//         <HeaderAddressProfileBar />
//       </View>

//       {/* Search Bar Section */}
//       <View style={{ width: "90%", marginHorizontal: "auto" }}>
//         {/* Profile Bar */}
//         <SearchBar
//           onSearch={handleSearch}
//           placeHolder={"Search (ex. 25 Sep 2024)"}
//         />
//       </View>

//       {/* History Divider */}
//       <Divider
//         name={"History"}
//         color={Colors.BOULDER}
//         fontSize={12}
//         fontFamily={"openSans-bold"}
//       />

//       {/* Food History Card */}
//       {history.length > 0 ? (
//         history.map((item, index) => (
//           <HistoryCard key={index} data={item} /> // Pass data to HistoryCard
//         ))
//       ) : (
//         <Text>No history available.</Text>
//       )}
//       {/* <HistoryCard /> */}
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

// ======================================================================================================================================

import { View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getOrderHistory } from "./../services/api"; // Import the function to fetch order history
import Spinner from "react-native-loading-spinner-overlay";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Importing Header Profile Address Bar Component
import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
import Divider from "./../../components/commonComponents/Divider";
import SearchBar from "./../../components/commonComponents/SearchBar";
import HistoryCard from "./../../components/historyCompo/HistoryCard";

export default function History() {
  const [history, setHistory] = useState([]); // All fetched history data
  const [filteredHistory, setFilteredHistory] = useState([]); // Filtered history data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch order history when the component is mounted
  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const response = await getOrderHistory();
        setHistory(response.orders); // Set fetched orders
        setFilteredHistory(response.orders); // Initialize filteredHistory with all orders
      } catch (error) {
        setError("Failed to load history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  // Function to format a date to "DD MMM YYYY" for comparison
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0"); // Ensure day is 2 digits
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`; // Return the date in "DD MMM YYYY" format
  };

  // Function to handle real-time search and filtering
  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredHistory(history); // Show all history if search is cleared
      return;
    }

    const searchDate = searchText.trim(); // Trim input to avoid spaces

    // Filter the history to match the exact date in "DD MMM YYYY"
    const filteredData = history.filter((item) => {
      const orderDate = formatDate(item.created_at); // Format the order date to "DD MMM YYYY"

      return orderDate.includes(searchDate); // Check if searchText is part of the formatted date
    });

    setFilteredHistory(filteredData); // Update filteredHistory with the search result
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />

      <View style={styles.alignment}>
        {/* Profile Bar */}
        <HeaderAddressProfileBar />
      </View>

      {/* Search Bar Section */}
      <View style={{ width: "90%", marginHorizontal: "auto" }}>
        <SearchBar
          onSearch={handleSearch} // Pass the search handler to the SearchBar
          placeHolder={"Search (ex. 25 Sep 2024)"}
        />
      </View>

      {/* History Divider */}
      <Divider
        name={"History"}
        color={Colors.BOULDER}
        fontSize={12}
        fontFamily={"openSans-bold"}
      />

      <ScrollView>
        {/* Render the History Cards */}
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item, index) => (
            <HistoryCard key={index} data={item} /> // Pass the filtered history data to HistoryCard
          ))
        ) : (
          <Text>No history available for the selected date.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  alignment: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
});

// // import React, { useState, useEffect } from "react";
// // import { View, ScrollView, Text, ActivityIndicator } from "react-native";
// // import HistoryCard from "./../../components/historyCompo/HistoryCard"; // Import the HistoryCard component
// // import { getOrderHistory } from "./../services/api"; // Import the function to fetch order history

// // const History = () => {
// //   const [history, setHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch order history when the component is mounted
// //   useEffect(() => {
// //     console.log("Tab => " + 1);

// //     const fetchHistory = async () => {
// //       console.log("Tab => " + 2);
// //       try {
// //         const response = await getOrderHistory();
// //         console.log("Tab => ", response.orders); // Log the orders array

// //         setHistory(response.orders); // Set only the orders array to history
// //         console.log("Tab => " + 3);
// //       } catch (error) {
// //         console.log("Tab => " + 4);
// //         setError("Failed to load history");
// //         console.log("Tab => " + 5);
// //       } finally {
// //         console.log("Tab => " + 6);
// //         setLoading(false);
// //         console.log("Tab => " + 7);
// //       }
// //     };

// //     fetchHistory();
// //   }, []);

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   if (error) {
// //     return <Text>{error}</Text>;
// //   }

// //   return (
// //     <ScrollView>
// //       <View
// //         style={{
// //           justifyContent: "center",
// //           marginTop: 100,
// //         }}
// //       >
// //         {history.length > 0 ? (
// //           history.map((item, index) => (
// //             <HistoryCard key={index} data={item} /> // Pass data to HistoryCard
// //           ))
// //         ) : (
// //           <Text>No history available.</Text>
// //         )}
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // export default History;
