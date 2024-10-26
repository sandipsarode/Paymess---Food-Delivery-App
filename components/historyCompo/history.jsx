import { View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Import the function to fetch order history
import { getOrderHistory } from "./../services/api";

// Importing Header Profile Address Bar Component
import HeaderAddressProfileBar from "./../../components/commonComponents/HeaderAddressProfileBar";
import Divider from "./../../components/commonComponents/Divider";
import SearchBar from "./../../components/commonComponents/SearchBar";
import HistoryCard from "./../../components/historyCompo/HistoryCard";

export default function History() {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch order history when the component is mounted
  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const response = await getOrderHistory();
        setHistory(response.orders);
        setFilteredHistory(response.orders);
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
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Function to handle real-time search and filtering
  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredHistory(history);
      return;
    }

    const searchDate = searchText.trim();

    // Filter the history to match the exact date in "DD MMM YYYY"
    const filteredData = history.filter((item) => {
      const orderDate = formatDate(item.created_at);
      return orderDate.includes(searchDate);
    });

    setFilteredHistory(filteredData);
  };

  return (
    <View style={{ backgroundColor: "#fff", paddingBottom: 50 }}>
      {/* Spinner for the loader */}
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
          onSearch={handleSearch}
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
            <HistoryCard key={index} data={item} />
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
