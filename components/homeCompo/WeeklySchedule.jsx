import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Funtion to fetch all day menu
import { getMenuByDay } from "../../app/services/api";

// Importing the Components
import WeeklyMenuModal from "./WeeklyMenuModal";
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

const WeeklySchedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [menu, setMenu] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [filteredDays, setFilteredDays] = useState(Object.keys(dayImages));
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchText) => {
    // Filter days based on search input
    const filtered = Object.keys(dayImages).filter((day) =>
      day.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDays(filtered);
  };

  // Function to handle the day pressed menu
  const handleDayPress = async (day) => {
    setLoading(true);
    setSelectedDay(day);

    try {
      const fetchedMenu = await getMenuByDay();

      // Filter the menu based on the day and set it as a menu
      const filteredMenu = fetchedMenu.filter(
        (item) => item.day_of_week === day
      );
      setMenu(filteredMenu);
    } catch (error) {
      Alert.alert("Error", error.message || "Failed to sign up");
    }
    setLoading(false);
    setModalVisible(true);
  };

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
          />
        )}
      </View>
    </View>
  );
};

export default WeeklySchedule;

const styles = StyleSheet.create({
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
  scheduleText: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    color: "#fff",
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
