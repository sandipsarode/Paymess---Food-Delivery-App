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

// Importing Color Code
import { Colors } from "../../constants/Colors";

export default function DayMenuCard() {
  const navigation = useNavigation();
  const router = useRouter();
  const { day, image, menu } = useLocalSearchParams();
  const parsedMenu = JSON.parse(menu);

  // State for selected food type
  const [selectedFoodType, setSelectedFoodType] = useState("Veg");
  const [showFoodTypeButtons, setShowFoodTypeButtons] = useState(false);

  useEffect(() => {
    console.log("Menu -> ", menu);
    console.log("Parsed Menu -> ", parsedMenu[0].plans);

    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: "#fff",
    });

    // Determine if both Veg and Non-Veg options are available
    const mealTypes = parsedMenu[0].plans[0].meals;
    const hasNonVeg = Object.values(mealTypes).some((meal) =>
      meal.some((item) => item === "Non-Veg Item")
    );
    setShowFoodTypeButtons(hasNonVeg);
  }, []);

  // Function to filter and render food items based on the selected food type
  const renderFoods = (foods) => {
    const filteredFoods = foods.filter((food) =>
      selectedFoodType === "Veg" ? food !== "Non-Veg Item" : true
    );

    return filteredFoods.map((food, index) => (
      <View key={index} style={styles.dishesContainer}>
        <Text style={styles.dishItem}>✔️ {food}</Text>
      </View>
    ));
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

            {/* Conditionally Render Veg/Non-Veg Selector */}
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

            {/* Render Meal Sections */}
            {Object.entries(parsedMenu[0].plans[0].meals).map(
              ([mealType, foods], index) => (
                <View key={index} style={styles.mealSection}>
                  <Text style={styles.mealTitle}>{mealType}</Text>
                  <View style={styles.divider} />

                  {/* Render List of Food Items for each Meal Type */}
                  {renderFoods(foods)}
                </View>
              )
            )}

            {/* Done Button */}
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => router.back()}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
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
  dishItem: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "poppins-semiBold",
    marginVertical: 3,
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
});
