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
    <View style={{ backgroundColor: "#fff", paddingBottom: 50 }}>
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
        fontFamily={"poppins-bold"}
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
