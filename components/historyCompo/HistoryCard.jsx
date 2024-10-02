import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "./../../constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

import { API } from "./../../app/services/api";

// Function to format the date
// function formatDate(createdDate) {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   var t = new Date(createdDate);
//   var hour = t.getUTCHours();
//   var minute = t.getUTCMinutes();
//   var newformat = t.getUTCHours() >= 12 ? "PM" : "AM";

//   // Find current hour in AM-PM Format
//   hour = hour % 12;

//   // To display "0" as "12"
//   hour = hour ? hour : 12;
//   minute = minute < 10 ? "0" + minute : minute;

//   var formatted =
//     ("0" + t.getDate()).slice(-2) +
//     " " +
//     months[parseInt(("0" + (t.getMonth() + 1)).slice(-2)) - 1] +
//     " " +
//     t.getFullYear() +
//     ", at " +
//     ("0" + t.getUTCHours()).slice(-2) +
//     ":" +
//     ("0" + t.getUTCMinutes()).slice(-2) +
//     " " +
//     newformat;

//   return formatted;
// }

function formatDate(createdDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const t = new Date(createdDate);
  let hour = t.getUTCHours();
  const minute = t.getUTCMinutes().toString().padStart(2, "0");
  const newFormat = hour >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hour = hour % 12 || 12; // Converts 0 to 12 and keeps other hours intact

  const day = t.getUTCDate().toString().padStart(2, "0");
  const month = months[t.getUTCMonth()];
  const year = t.getUTCFullYear();

  // Final formatted string
  return `${day} ${month} ${year}, at ${hour}:${minute} ${newFormat}`;
}

export default function HistoryCard({ data }) {
  const { order_items } = data;

  if (order_items.length === 0) {
    return null;
  }

  const item = order_items[0]; // Assuming all order_items have the same food_item for display

  useEffect(() => {
    console.log("Time: => " + formatDate(data.created_at));
    console.log(API + item.food_item.image_url);
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Food Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: API + item.food_item.image_url,
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
        <Text style={styles.timeText}>{formatDate(data.created_at)}</Text>
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

// console.log("createdDate => " + createdDate);

// const date = createdDate[8] + createdDate[9];
// console.log("date => " + createdDate[8] + createdDate[9]);
// const month = parseInt(createdDate[5] + createdDate[6]);
// console.log("month => " + month);
// const year =
//   createdDate[0] + createdDate[1] + createdDate[2] + createdDate[3];
// console.log(
//   "year => " +
//     createdDate[0] +
//     createdDate[1] +
//     createdDate[2] +
//     createdDate[3]
// );

// const hours = createdDate[11] + createdDate[12];
// console.log("hours => " + hours);
// const minutes = createdDate[14] + createdDate[15];
// console.log("minutes => " + minutes);
// const ampm = hours >= 12 ? "pm" : "am";
// console.log("minutes => " + ampm);
