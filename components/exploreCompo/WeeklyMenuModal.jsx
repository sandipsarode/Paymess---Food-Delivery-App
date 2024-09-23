// // WeeklyMenu.jsx
// import React from "react";
// import {
//   Modal,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ScrollView,
//   StyleSheet,
//   StatusBar,
//   FlatList,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { LinearGradient } from "expo-linear-gradient";
// import { Colors } from "../../constants/Colors";

// const WeeklyMenuModal = ({
//   modalVisible,
//   closeModal,
//   selectedDay,
//   dayImages,
//   selectedOption,
//   setSelectedOption,
//   menu,
//   mealType,
//   ...props
// }) => {
//   // Filter the menu by selectedDay and mealType
//   const filteredMenu = menu.filter(
//     (item) => item.day_of_week === selectedDay && item.meal_type === mealType
//   );
//   console.log("Menu -> " + filteredMenu.meal_type);

//   return (
//     <Modal
//       visible={modalVisible}
//       animationType="slide"
//       transparent={true}
//       {...props}
//     >
//       <StatusBar
//         backgroundColor={Colors.BGCOLORMENUBOTTOM}
//         barStyle="dark-content"
//         hidden={false}
//         translucent={true}
//       />
//       <FlatList
//         data={menu}
//         keyExtractor={(item) => item.id.toString()}
//         scrollEnabled={true} // Disable scrolling for the FlatList
//         renderItem={({ item }) => (
//           <LinearGradient
//             colors={[Colors.BGCOLORMENUBOTTOM, Colors.BGCOLORMENUTOP]}
//             start={{ x: 1, y: 0.5 }}
//             end={{ x: 0.3, y: 1 }}
//             style={styles.modalContainer}
//           >
//             <View style={styles.modalContent}>
//               <Text style={styles.dayTitle}>{selectedDay}</Text>
//               {selectedDay && (
//                 <Image
//                   source={dayImages[selectedDay]}
//                   style={styles.dayImage}
//                 />
//               )}

//               {/* Veg/Non-Veg Selector */}
//               <View style={styles.foodTypeContainer}>
//                 <TouchableOpacity style={styles.foodTypeButton}>
//                   <Text
//                     style={[styles.foodTypeText, { color: Colors.KELLY_GREEN }]}
//                   >
//                     Veg
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.foodTypeButton}>
//                   <Text
//                     style={[
//                       styles.foodTypeText,
//                       { color: Colors.VALENTINE_RED },
//                     ]}
//                   >
//                     Non-Veg
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Meal Sections */}
//               {/* {["Breakfast", "Lunch", "Dinner"].map((meal, index) => ( */}
//               <View style={styles.mealSection}>
//                 <Text style={styles.mealTitle}>{item.meal_type}</Text>
//                 <View style={styles.divider} />

//                 {/* List of Dishes */}
//                 <View style={styles.dishesContainer}>
//                   <Text style={styles.dishItem}>✔️ {item.food_item.name}</Text>

//                   {/* Dropdown Selector */}
//                   {/* <View
//                       style={{
//                         width: "45%",
//                         backgroundColor: "#000",
//                         height: 32,
//                         borderRadius: 6,
//                         justifyContent: "center",
//                         marginTop: 8,
//                       }}
//                     >
//                       <Picker
//                         selectedValue={selectedOption}
//                         onValueChange={(itemValue) =>
//                           setSelectedOption(itemValue)
//                         }
//                         style={{ color: "#fff" }}
//                       >
//                         <Picker.Item label="Select" value="" />
//                         <Picker.Item label="Rice" value="Rice" />
//                         <Picker.Item label="Rice Kheer" value="Rice Kheer" />
//                       </Picker>
//                     </View> */}
//                 </View>
//               </View>
//               {/* ))} */}

//               {/* <View>
//               <Text>
//                 Menu for {selectedDay} ({mealType})
//               </Text>
//               {filteredMenu.length > 0 ? (
//                 <FlatList
//                   data={filteredMenu}
//                   keyExtractor={(item) => item.id.toString()}
//                   renderItem={({ item }) => (
//                     <View>
//                       <Text>
//                         {item.meal_type} - {item.food_item.category}
//                       </Text>
//                       <Text>
//                         {item.food_item.name} - {item.food_item.category}
//                       </Text>
//                       <Text>
//                         {item.food_item.type} - {item.food_item.price}
//                       </Text>
//                       <Text>{item.food_item.description}</Text>
//                     </View>
//                   )}
//                 />
//               ) : (
//                 <Text>
//                   No menu items available for {mealType} on {selectedDay}
//                 </Text>
//               )}
//             </View> */}

//               {/* <View>
//                 <Text>Menu for {selectedDay}</Text>
//                 {menu.length > 0 ? (
//                   <FlatList
//                     data={menu}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                       <View>
//                         <Text>Meal Type: {item.meal_type}</Text>
//                         <Text>
//                           {item.food_item.name} ({item.food_item.category})
//                         </Text>
//                         <Text>
//                           {item.food_item.type} - {item.food_item.price}
//                         </Text>
//                         <Text>{item.food_item.description}</Text>
//                       </View>
//                     )}
//                   />
//                 ) : (
//                   <Text>No menu items available for {selectedDay}</Text>
//                 )}
//                 <Text onPress={closeModal}>Close</Text>
//               </View> */}

//               {/* Done Button */}
//               <TouchableOpacity style={styles.doneButton} onPress={closeModal}>
//                 <Text style={styles.doneButtonText}>Done</Text>
//               </TouchableOpacity>
//             </View>
//           </LinearGradient>
//         )}
//       />
//     </Modal>
//   );
// };

// // import React from "react";
// // import { Modal, View, Text, FlatList, Button, StyleSheet } from "react-native";

// // const WeeklyMenuModal = ({ isVisible, closeModal, menu, day }) => {
// //   return (
// //     <Modal visible={isVisible} animationType="slide" transparent={true}>
// //       <View>
// //         <Text>Menu for {day}</Text>
// //         <FlatList
// //           data={menu}
// //           keyExtractor={(item) => item.id.toString()}
// //           renderItem={({ item }) => (
// //             <View>
// //               <Text>
// //                 {item.name} ({item.type})
// //               </Text>
// //             </View>
// //           )}
// //         />
// //         <Button title="Close" onPress={closeModal} />
// //       </View>
// //     </Modal>
// //   );
// // };

// // export default WeeklyMenuModal;

// const styles = StyleSheet.create({
//   // Main Model Container
//   modalContainer: {
//     flex: 1,
//     // width: "100%",
//     // height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     paddingVertical: 50,
//   },
//   // Model Content Container
//   modalContent: {
//     backgroundColor: "#1c1c1c",
//     padding: 20,
//     borderRadius: 20,
//     alignItems: "center",
//     width: "90%",
//     marginHorizontal: "auto",
//   },
//   dayTitle: {
//     fontSize: 38,
//     fontFamily: "pacifico",
//     color: Colors.VALENTINE_RED,
//     textDecorationLine: "underline",
//   },
//   dayImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginVertical: 30,
//   },

//   // Veg & NonVeg Button
//   foodTypeContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   foodTypeButton: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10,
//     borderRadius: 13,
//     marginHorizontal: 5,
//     backgroundColor: "#333",
//   },
//   foodTypeText: {
//     fontSize: 18,
//     fontFamily: "openSans-semiBold",
//   },

//   // Different Meal Section
//   mealSection: {
//     width: "100%",
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   mealTitle: {
//     fontSize: 24,
//     fontFamily: "pacifico",
//     color: Colors.VALENTINE_RED,
//     marginBottom: 5,
//   },
//   divider: {
//     width: "100%",
//     height: 1,
//     backgroundColor: Colors.VALENTINE_RED,
//     marginBottom: 10,
//   },
//   dishesContainer: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   dishItem: {
//     width: "50%",
//     fontSize: 16,
//     color: "#fff",
//     fontFamily: "openSans-semiBold",
//     marginVertical: 3,
//   },
//   doneButton: {
//     margin: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 25,
//     backgroundColor: "#ff4444",
//     borderRadius: 12,
//     marginBottom: 50,
//   },
//   doneButtonText: {
//     color: "white",
//     fontSize: 20,
//     fontFamily: "openSans-semiBold",
//   },
// });
// export default WeeklyMenuModal;

import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constants/Colors";

const WeeklyMenuModal = ({
  modalVisible,
  closeModal,
  selectedDay,
  dayImages,
  menu,
  ...props
}) => {
  // ----------------------------------
  const [selectedFoodType, setSelectedFoodType] = useState("Veg");

  // Filter the menu based on the selected food type (Veg/NonVeg)
  const filteredMenu = menu.filter(
    (item) => item.food_item.type === selectedFoodType
  );

  // Group filtered items by meal_type
  const groupedMenu = filteredMenu.reduce((acc, item) => {
    if (!acc[item.meal_type]) {
      acc[item.meal_type] = [];
    }
    acc[item.meal_type].push(item);
    return acc;
  }, {});

  // ---------------------------------

  // Group items by meal_type
  // const groupedMenu = menu.reduce((acc, item) => {
  //   if (!acc[item.meal_type]) {
  //     acc[item.meal_type] = [];
  //   }
  //   acc[item.meal_type].push(item);
  //   return acc;
  // }, {});

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      {...props}
    >
      <StatusBar
        backgroundColor={Colors.BGCOLORMENUBOTTOM}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />

      <LinearGradient
        colors={[Colors.BGCOLORMENUBOTTOM, Colors.BGCOLORMENUTOP]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0.3, y: 1 }}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.dayTitle}>{selectedDay}</Text>
          {selectedDay && (
            <Image source={dayImages[selectedDay]} style={styles.dayImage} />
          )}

          {/* Veg/Non-Veg Selector */}
          <View style={styles.foodTypeContainer}>
            <TouchableOpacity
              style={styles.foodTypeButton}
              onPress={() => setSelectedFoodType("Veg")}
            >
              {/* <Text
                style={[styles.foodTypeText, { color: Colors.KELLY_GREEN }]}
              >
                Veg
              </Text> */}

              {/* ------------------------------------- */}
              <Text
                style={[
                  styles.foodTypeText,
                  {
                    color:
                      selectedFoodType === "Veg" ? Colors.KELLY_GREEN : "#fff",
                  },
                ]}
              >
                Veg
              </Text>
              {/* ------------------------------------- */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.foodTypeButton}
              onPress={() => setSelectedFoodType("Non-Veg")}
            >
              {/* <Text
                style={[styles.foodTypeText, { color: Colors.VALENTINE_RED }]}
              >
                Non-Veg
              </Text> */}

              {/* --------------------------------------- */}
              <Text
                style={[
                  styles.foodTypeText,
                  {
                    color:
                      selectedFoodType === "Non-Veg"
                        ? Colors.VALENTINE_RED
                        : "#fff",
                  },
                ]}
              >
                Non-Veg
              </Text>
              {/* --------------------------------------- */}
            </TouchableOpacity>
          </View>

          {/* Render Meal Sections */}
          {Object.keys(groupedMenu).map((mealType, index) => (
            <View key={index} style={styles.mealSection}>
              {/* Meal Type Header */}
              <Text style={styles.mealTitle}>{mealType}</Text>
              <View style={styles.divider} />

              {/* Render List of Food Items for each Meal Type */}
              <FlatList
                data={groupedMenu[mealType]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.dishesContainer}>
                    <Text style={styles.dishItem}>
                      ✔️ {item.food_item.name}
                    </Text>
                  </View>
                )}
              />
            </View>
          ))}

          {/* Done Button */}
          <TouchableOpacity style={styles.doneButton} onPress={closeModal}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 50,
  },
  modalContent: {
    backgroundColor: "#1c1c1c",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "90%",
    marginHorizontal: "auto",
  },
  dayTitle: {
    fontSize: 38,
    fontFamily: "pacifico",
    color: Colors.VALENTINE_RED,
    textDecorationLine: "underline",
  },
  dayImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 30,
  },
  mealSection: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  mealTitle: {
    fontSize: 24,
    fontFamily: "pacifico",
    color: Colors.VALENTINE_RED,
    marginBottom: 5,
  },
  // Veg & NonVeg Button
  foodTypeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  foodTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 5,
    backgroundColor: "#333",
  },
  foodTypeText: {
    fontSize: 18,
    fontFamily: "openSans-semiBold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.VALENTINE_RED,
    marginBottom: 10,
  },
  dishesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dishItem: {
    // width: "50%",
    fontSize: 16,
    color: "#fff",
    fontFamily: "openSans-semiBold",
    marginVertical: 3,
  },
  doneButton: {
    margin: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: "#ff4444",
    borderRadius: 12,
    marginBottom: 50,
  },
  doneButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "openSans-semiBold",
  },
});

export default WeeklyMenuModal;
