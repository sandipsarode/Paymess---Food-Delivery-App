import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
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

// export default function WeeklySchedule() {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

// Function to handle day click and open modal
// const openDayMenu = (day) => {
//   setSelectedDay(day);
//   setModalVisible(true);
// };

//   // Function to close the modal
//   const closeModal = () => setModalVisible(false);

//   return (
//     <View>
//       {/* Weekly Schedule Section */}
//       <View style={styles.weeklyScheduleContainer}>
//         {/* Weekly Schedule Divider */}
//         <Divider
//           name={"Weekly Schedule"}
//           color={Colors.VALENTINE_RED}
//           fontSize={21}
//           fontFamily={"pacifico"}
//         />

//         {/* Weekly Menu Cards */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {Object.keys(dayImages).map((day) => (
//             <TouchableOpacity
//               key={day}
//               style={styles.scheduleItem}
//               onPress={() => openDayMenu(day)}
//             >
//               <ImageBackground
//                 source={dayImages[day]}
//                 style={styles.scheduleImage}
//                 resizeMode="contain"
//                 imageStyle={styles.scheduleImageStyle}
//               >
//                 <Text style={[styles.scheduleText, styles.scheduleTextTitle]}>
//                   {day}
//                 </Text>
//                 <View style={styles.scheduleMealContainer}>
//                   <Text style={styles.scheduleMealText}>Lunch</Text>
//                   <Text style={styles.scheduleMealText}>Dinner</Text>
//                 </View>
//               </ImageBackground>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Render WeeklyMenu Model and pass props */}
//       <WeeklyMenuModal
//         modalVisible={modalVisible}
//         selectedDay={selectedDay}
//         dayImages={dayImages}
//         selectedOption={selectedOption}
//         setSelectedOption={setSelectedOption}
//         closeModal={closeModal}
//       />
//     </View>
//   );
// }

import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import WeeklyMenuModal from "./WeeklyMenuModal";
import { getMenuByDay } from "./../../app/services/api";

const WeeklySchedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [menu, setMenu] = useState();
  // const [mealType, setMealType] = useState("Breakfast");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDayPress = async (day) => {
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
          color={Colors.VALENTINE_RED}
          fontSize={21}
          fontFamily={"pacifico"}
        />

        <FlatList
          data={Object.keys(dayImages)}
          horizontal={true} // Keep horizontal scrolling
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
    backgroundColor: Colors.VALENTINE_RED,
    alignSelf: "center",
    paddingVertical: 3,
    borderRadius: 30,
    marginTop: 10,
  },
  scheduleText: {
    fontFamily: "openSans-bold",
    textAlign: "center",
    color: "#fff",
  },
  scheduleMealContainer: {
    marginTop: 35,
  },
  scheduleMealText: {
    fontSize: 18,
    fontFamily: "openSans-bold",
    textAlign: "center",
    color: "#fff",
  },
});
