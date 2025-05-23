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

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing icons from Expo-icons
import { LinearGradient } from "expo-linear-gradient";

const WeeklyMenuModal = ({
  modalVisible,
  closeModal,
  selectedDay,
  dayImages,
  menu,
  ...props
}) => {
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

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      {...props}
    >
      {/* Set the properties for Status Bar */}
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
          {/* Card Day title and Food Image */}
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
  // Modal Container
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
  // Card Day title and Food Image
  dayTitle: {
    fontSize: 38,
    fontFamily: "poppins-extraBold",
    color: Colors.EAGLE_GREEN,
    textDecorationLine: "underline",
  },
  dayImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 30,
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
    fontFamily: "poppins-semiBold",
  },
  // Meal Section
  mealSection: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  mealTitle: {
    fontSize: 24,
    fontFamily: "poppins-extraBold",
    color: Colors.EAGLE_GREEN,
    marginBottom: 5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.EAGLE_GREEN,
    marginBottom: 10,
  },
  // Food Item
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
  // Done Button
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

export default WeeklyMenuModal;
