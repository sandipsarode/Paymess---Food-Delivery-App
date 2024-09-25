import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "./../../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

// Function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${day} ${month} ${year}, at ${hours}:${minutes}${ampm}`;
};

export default function HistoryCard({ data }) {
  const { order_items } = data;

  if (order_items.length === 0) {
    return null;
  }

  const item = order_items[0]; // Assuming all order_items have the same food_item for display

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Food Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                "https://11a2-103-102-144-169.ngrok-free.app" +
                item.food_item.image_url,
            }}
            style={styles.image}
          />
        </View>

        {/* Food Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.foodName}>
            {item.food_item.name} ({item.food_item.type})
          </Text>
          <Text style={styles.location}>Gondia</Text>
          {/* Veg/Non-Veg Icon */}
          {item.food_item.type === "Veg" ? (
            <MaterialCommunityIcons
              name="square-circle"
              size={28}
              color={Colors.KELLY_GREEN}
              style={styles.icon}
            />
          ) : (
            <FontAwesome6
              name="square-caret-up"
              size={28}
              color={Colors.VALENTINE_RED}
              style={styles.icon}
            />
          )}
          {/* Buttons for Delivered and Reorder */}
          <View style={styles.foodTypeContainer}>
            <View style={styles.foodTypeButton}>
              <Text style={styles.btnText}>Delivered</Text>
            </View>
            <TouchableOpacity
              style={[styles.foodTypeButton, styles.reorderButton]}
            >
              <Ionicons name="reload" size={22} color="white" />
              <Text style={[styles.btnText, styles.reorderText]}>Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Time Detail */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>
          {formatDate(item.food_item.created_at)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    paddingTop: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: Colors.BGCOLOR,
    marginVertical: 25,
    marginHorizontal: 25,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "25%",
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 50,
    width: "80%",
    height: "80%",
    resizeMode: "cover",
  },
  detailsContainer: {
    width: "75%",
    paddingLeft: 10,
    justifyContent: "center",
  },
  foodName: {
    fontSize: 15,
    fontFamily: "openSans-semiBold",
    textAlign: "justify",
  },
  location: {
    fontSize: 14,
    fontFamily: "openSans-semiBold",
    color: Colors.BOULDER,
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  foodTypeContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  foodTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 3,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: Colors.VALENTINE_RED,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "openSans-bold",
  },
  reorderButton: {
    flexDirection: "row",
  },
  reorderText: {
    marginLeft: 5,
  },
  timeContainer: {
    elevation: 3,
    paddingVertical: 6,
    backgroundColor: "#F9F8F8",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    color: Colors.BOULDER,
  },
});
