import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
// import React, { useState } from "react";

import { Colors } from "../../constants/Colors";
// import WeeklyMenuModal from "./WeeklyMenuModal";
import Divider from "../commonComponents/Divider";

// Static mapping of day names to images
const dayImages = {
  Sunday: require("./../../assets/images/week-1.png"),
  Monday: require("./../../assets/images/week-2.png"),
  Tuesday: require("./../../assets/images/week-3.png"),
  Wednesday: require("./../../assets/images/week-4.png"),
  Thursday: require("./../../assets/images/week-5.png"),
  Friday: require("./../../assets/images/week-6.png"),
  Saturday: require("./../../assets/images/week-7.png"),
};

import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import WeeklyMenuModal from "./WeeklyMenuModal";
import { getMenuByDay } from "../../app/services/api";
import Spinner from "react-native-loading-spinner-overlay";

const WeeklySchedule = () => {
  // User select any day of week
  const [selectedDay, setSelectedDay] = useState(null);
  const [menu, setMenu] = useState();
  // const [mealType, setMealType] = useState("Breakfast");
  const [isModalVisible, setModalVisible] = useState(false);

  // ----------------------------------------
  const [filteredDays, setFilteredDays] = useState(Object.keys(dayImages)); // List of days to display
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchText) => {
    // Filter days based on search input
    const filtered = Object.keys(dayImages).filter((day) =>
      day.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDays(filtered); // Update the filtered list
  };
  // ----------------------------------------

  const handleDayPress = async (day) => {
    setLoading(true);
    setSelectedDay(day);
    console.log("1");

    try {
      console.log("2");
      const fetchedMenu = await getMenuByDay();
      console.log("3");

      const filteredMenu = fetchedMenu.filter(
        (item) => item.day_of_week === day
      ); // Filter menu by day
      setMenu(filteredMenu); // Set filtered menu in the state

      console.log("4");
    } catch (error) {
      console.log("Error");
      Alert.alert("Error", error.message || "Failed to sign up");
    }
    setLoading(false);
    setModalVisible(true); // Show modal after fetching menu
  };

  // {filteredMenu.length > 0 ? (

  return (
    <View>
      {/* Weekly Schedule Section */}
      <View style={styles.weeklyScheduleContainer}>
        {/* Weekly Schedule Divider */}
        <Divider
          name={"Weekly Schedule"}
          color={Colors.EAGLE_GREEN}
          fontSize={21}
          fontFamily={"poppins-extraBold"}
        />

        {/* Render filtered days */}
        <FlatList
          data={filteredDays}
          // horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(day) => day}
          renderItem={({ item: day }) => (
            <TouchableOpacity
              key={day}
              style={styles.scheduleItem}
              onPress={() => handleDayPress(day)}
            >
              <ImageBackground
                source={dayImages[day]}
                style={styles.scheduleImage}
                resizeMode="contain"
                imageStyle={styles.scheduleImageStyle}
              >
                <Text style={[styles.scheduleText, styles.scheduleTextTitle]}>
                  {day}
                </Text>
                <View style={styles.scheduleMealContainer}>
                  <Text style={styles.scheduleMealText}>Lunch</Text>
                  <Text style={styles.scheduleMealText}>Dinner</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />

        {/* Loading Indicator */}
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
          overlayColor="rgba(0, 0, 0, 0.7)"
        />

        {isModalVisible && (
          <WeeklyMenuModal
            modalVisible={isModalVisible}
            closeModal={() => setModalVisible(false)}
            selectedDay={selectedDay}
            dayImages={dayImages}
            menu={menu}
            // mealType={mealType}
          />
        )}
      </View>
    </View>
  );
};

export default WeeklySchedule;

const styles = StyleSheet.create({
  // Weekly Schedule Section
  weeklyScheduleContainer: {
    padding: 25,
    paddingVertical: -10,
  },

  scheduleItem: {
    alignItems: "center",
    marginRight: 15,
    borderRadius: 30,
  },
  scheduleImage: {
    width: 200,
    height: 200,
  },
  scheduleImageStyle: {
    borderRadius: 30,
  },
  scheduleTextTitle: {
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: Colors.EAGLE_GREEN,
    alignSelf: "center",
    paddingVertical: 3,
    borderRadius: 30,
    marginTop: 10,
  },
  scheduleText: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    color: "#fff",
  },
  scheduleMealContainer: {
    marginTop: 35,
  },
  scheduleMealText: {
    fontSize: 18,
    fontFamily: "poppins-bold",
    textAlign: "center",
    color: "#fff",
  },
});
