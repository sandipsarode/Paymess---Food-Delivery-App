// import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   StyleSheet,
//   StatusBar,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Colors } from "../../constants/Colors";

// export default function DayMenuCard() {
//   const { day, image, menu } = useLocalSearchParams();
//   const navigation = useNavigation();
//   const router = useRouter();
//   const [selectedFoodType, setSelectedFoodType] = useState("Veg");

//   useEffect(() => {
//     // console.log("Menu ->> " + menu[0].meal_type);

//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: "",
//       headerStyle: {
//         backgroundColor: "transparent",
//       },
//       headerTintColor: "#fff",
//     });
//   }, []);

//   // Filter the menu based on the selected food type (Veg/NonVeg)
//   const filteredMenu = menu.filter((item) => {
//     item.food_item.type === selectedFoodType;
//     console.log("MenuItem => " + item.food_item.type);
//   });

//   // Group filtered items by meal_type
//   const groupedMenu = filteredMenu.reduce((acc, item) => {
//     if (!acc[item.meal_type]) {
//       acc[item.meal_type] = [];
//     }
//     acc[item.meal_type].push(item);
//     return acc;
//   }, {});

//   return (
//     <View style={{ height: "100%" }}>
//       <StatusBar
//         backgroundColor={Colors.BGCOLORMENUTOP}
//         barStyle="dark-content"
//         hidden={false}
//         translucent={true}
//       />

//       <LinearGradient
//         colors={[Colors.BGCOLORMENUBOTTOM, Colors.BGCOLORMENUTOP]}
//         start={{ x: 1, y: 0.5 }}
//         end={{ x: 0.3, y: 1 }}
//         style={styles.modalContainer}
//       >
//         <View style={styles.modalContent}>
//           <Text style={styles.dayTitle}>{day}</Text>
//           {day && <Image source={image} style={styles.dayImage} />}

//           {/* Veg/Non-Veg Selector */}
//           <View style={styles.foodTypeContainer}>
//             <TouchableOpacity
//               style={styles.foodTypeButton}
//               onPress={() => setSelectedFoodType("Veg")}
//             >
//               <Text
//                 style={[
//                   styles.foodTypeText,
//                   {
//                     color:
//                       selectedFoodType === "Veg" ? Colors.KELLY_GREEN : "#fff",
//                   },
//                 ]}
//               >
//                 Veg
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.foodTypeButton}
//               onPress={() => setSelectedFoodType("Non-Veg")}
//             >
//               <Text
//                 style={[
//                   styles.foodTypeText,
//                   {
//                     color:
//                       selectedFoodType === "Non-Veg"
//                         ? Colors.VALENTINE_RED
//                         : "#fff",
//                   },
//                 ]}
//               >
//                 Non-Veg
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Render Meal Sections */}
//           {/* {Object.keys(menu).map((mealType, index) => ( */}
//           {/* {menu.map((mealType, index) => (
//            <View key={index} style={styles.mealSection}>  */}
//           {/* Meal Type Header */}
//           {/* <Text style={styles.mealTitle}>{mealType}</Text>
//             <View style={styles.divider} /> */}

//           {/* Render List of Food Items for each Meal Type */}
//           {/* <FlatList
//               data={groupedMenu[mealType]}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => (
//                 <View style={styles.dishesContainer}>
//                   <Text style={styles.dishItem}>✔️ {item.food_item.name}</Text>
//                 </View>
//               )}
//             />
//           </View>
//           ))} */}

//           {/* Done Button */}
//           <TouchableOpacity
//             style={styles.doneButton}
//             onPress={() => router.back()}
//           >
//             <Text style={styles.doneButtonText}>Done</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     paddingVertical: 100,
//     // marginTop: 50,
//   },
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
//     fontFamily: "poppins-extraBold",
//     color: "#fff",
//     textDecorationLine: "underline",
//   },
//   dayImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginVertical: 30,
//   },
//   mealSection: {
//     width: "100%",
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   mealTitle: {
//     fontSize: 24,
//     fontFamily: "poppins-extraBold",
//     color: Colors.EAGLE_GREEN,
//     marginBottom: 5,
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
//     fontFamily: "poppins-semiBold",
//   },
//   divider: {
//     width: "100%",
//     height: 1,
//     backgroundColor: Colors.EAGLE_GREEN,
//     marginBottom: 10,
//   },
//   dishesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   dishItem: {
//     // width: "50%",
//     fontSize: 16,
//     color: "#fff",
//     fontFamily: "poppins-semiBold",
//     marginVertical: 3,
//   },
//   doneButton: {
//     margin: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 25,
//     backgroundColor: Colors.EAGLE_GREEN,
//     borderRadius: 12,
//     marginBottom: 50,
//   },
//   doneButtonText: {
//     color: "white",
//     fontSize: 20,
//     fontFamily: "poppins-semiBold",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import Spinner from "react-native-loading-spinner-overlay";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Expo Icons
import Ionicons from "@expo/vector-icons/Ionicons";

// Importing the function from API
import { sendSelectedMenu } from "./../services/api";

export default function DayMenuCard() {
  const navigation = useNavigation();
  const router = useRouter();
  const { day, image, menu } = useLocalSearchParams();
  const parsedMenu = JSON.parse(menu);

  // State for selected food type
  const [selectedFoodType, setSelectedFoodType] = useState("Veg");
  const [showFoodTypeButtons, setShowFoodTypeButtons] = useState(false);
  // const [selectedItems, setSelectedItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedItems, setSelectedItems] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
  });

  // useEffect(() => {
  //   console.log("Menuuuuuuuuuu = " + menu);

  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTransparent: true,
  //     headerTitle: "",
  //     headerStyle: {
  //       backgroundColor: "transparent",
  //     },
  //     headerTintColor: "#fff",
  //   });

  //   const hasNonVeg = Object.values(parsedMenu[0].plans[0].meals).some((meal) =>
  //     Object.values(meal).flat().includes("Non-Veg Item")
  //   );
  //   setShowFoodTypeButtons(hasNonVeg);
  // }, []);
  useEffect(() => {
    console.log("Menuuuuuuuuuu = " + menu);

    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: "#fff",
    });

    const hasNonVeg = Object.values(parsedMenu[0].plans[0].meals).some((meal) =>
      Object.values(meal).flat().includes("Non-Veg Item")
    );
    setShowFoodTypeButtons(hasNonVeg);

    // Set the default selected item for 'sabji' in each meal type
    const defaultSelectedItems = { Breakfast: [], Lunch: [], Dinner: [] };
    Object.entries(parsedMenu[0].plans[0].meals).forEach(
      ([mealType, foods]) => {
        if (foods.sabji && foods.sabji.length > 0) {
          defaultSelectedItems[mealType] = [foods.sabji[0]]; // Select the first 'sabji' item by default
        }
      }
    );
    setSelectedItems(defaultSelectedItems);
  }, []);

  // Modify renderFoods to render checkboxes for 'sabji' items only
  const renderFoods = (foods, mealType) => {
    return Object.entries(foods).map(([key, foodItems], index) => {
      if (key === "sabji") {
        return foodItems.map((sabjiItem, sabjiIndex) => (
          <View key={`sabji-${sabjiIndex}`} style={styles.foodItemContainer}>
            <Checkbox
              value={selectedItems[mealType].includes(sabjiItem)}
              onValueChange={() => handleSelectItem(mealType, sabjiItem)}
            />
            <Text style={styles.dishItem}>{sabjiItem}</Text>
          </View>
        ));
      } else {
        return (
          <View key={index} style={styles.foodItemContainer}>
            <Ionicons
              name="checkmark-circle"
              size={21}
              color={Colors.KELLY_GREEN}
            />
            <Text style={styles.dishItem}>{foodItems}</Text>
          </View>
        );
      }
    });
  };

  // Function to toggle item selection
  const handleSelectItem = (mealType, food) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [mealType]: prevSelectedItems[mealType].includes(food)
        ? prevSelectedItems[mealType].filter((item) => item !== food)
        : [food], // Replace with only the selected item
    }));
  };

  // Function to handle sending selected items to the backend
  const handleSubmit = async () => {
    // Iterate through selectedItems to find the meal types with selected food
    console.log("Innnnnnnnnnnnn");
    setLoading(true);

    for (const [mealType, foodItems] of Object.entries(selectedItems)) {
      if (foodItems.length > 0) {
        // If there are selected items in this meal type
        const selectedData = {
          selected_food: foodItems,
          day_of_week: parsedMenu[0].day, // assuming 'day' is provided as a date string from the params
          meal_type: mealType,
        };

        console.log("selected_food: " + foodItems);
        console.log("day_of_week: " + parsedMenu[0].day);
        console.log("meal_type: " + mealType);

        // Send data to the backend using the sendSelectedMenu function
        try {
          const response = await sendSelectedMenu(selectedData);
          console.log("Response from backend:", response);
          setLoading(false);
        } catch (error) {
          console.error("Error sending data:", error);
          Alert.alert(
            "Error",
            "Failed to send the selected food. Please try again."
          );
        }
      }
    }
    router.back();
  };

  const hasSelectedItems = () => {
    return selectedItems.Lunch.length > 0 || selectedItems.Dinner.length > 0;
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar
        backgroundColor={Colors.BGCOLORMENUTOP}
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
        <ScrollView>
          <View style={styles.modalContent}>
            <Text style={styles.dayTitle}>{day}</Text>
            {image && <Image source={image} style={styles.dayImage} />}

            {showFoodTypeButtons && (
              <View style={styles.foodTypeContainer}>
                <TouchableOpacity
                  style={styles.foodTypeButton}
                  onPress={() => setSelectedFoodType("Veg")}
                >
                  <Text
                    style={[
                      styles.foodTypeText,
                      {
                        color:
                          selectedFoodType === "Veg"
                            ? Colors.KELLY_GREEN
                            : "#fff",
                      },
                    ]}
                  >
                    Veg
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.foodTypeButton}
                  onPress={() => setSelectedFoodType("Non-Veg")}
                >
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
                </TouchableOpacity>
              </View>
            )}

            {Object.entries(parsedMenu[0].plans[0].meals).map(
              ([mealType, foods], index) => (
                <View key={index} style={styles.mealSection}>
                  <Text style={styles.mealTitle}>{mealType}</Text>
                  <View style={styles.divider} />

                  <View style={styles.dishesContainer}>
                    {renderFoods(foods, mealType)}
                  </View>
                </View>
              )
            )}

            {/* {selectedItems && (
              <TouchableOpacity
                style={styles.doneButton}
                onPress={handleSubmit}
              >
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            )} */}

            {/* <TouchableOpacity
              style={[
                styles.doneButton,
                !selectedItems && styles.disabledButton,
              ]}
              onPress={selectedItems && handleSubmit}
              disabled={!selectedItems}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={[
                styles.doneButton,
                !hasSelectedItems() && styles.disabledButton, // Apply disabled style if not all meals have selections
              ]}
              onPress={hasSelectedItems() ? handleSubmit : null} // Only call handleSubmit if all meals have selections
              disabled={!hasSelectedItems()} // Disable button if all meals don't have selections
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Loading Indicator */}
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 100,
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
    fontSize: 21,
    fontFamily: "poppins-extraBold",
    color: "#fff",
    textDecorationLine: "underline",
  },
  dayImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 30,
  },
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
    fontFamily: "poppins-semiBold",
  },
  mealSection: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  mealTitle: {
    fontSize: 24,
    fontFamily: "poppins-extraBold",
    color: "#fff",
    marginBottom: 5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.EAGLE_GREEN,
    marginBottom: 10,
  },
  dishesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  foodItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%", // Half-width to show 2 items per row
    paddingVertical: 5,
  },
  dishItem: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "poppins-semiBold",
    marginLeft: 10,
  },
  doneButton: {
    margin: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: Colors.EAGLE_GREEN,
    borderRadius: 12,
    marginBottom: 50,
  },
  doneButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "poppins-semiBold",
  },
  disabledButton: {
    backgroundColor: "#999",
  },
});
