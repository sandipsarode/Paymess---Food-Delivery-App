// WeeklyMenu.jsx
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constants/Colors";

const WeeklyMenuModal = ({
  modalVisible,
  selectedDay,
  dayImages,
  selectedOption,
  setSelectedOption,
  closeModal,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <StatusBar
        backgroundColor={Colors.BGCOLORMENUBOTTOM}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <ScrollView>
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
              <TouchableOpacity style={styles.foodTypeButton}>
                <Text
                  style={[styles.foodTypeText, { color: Colors.KELLY_GREEN }]}
                >
                  Veg
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.foodTypeButton}>
                <Text
                  style={[styles.foodTypeText, { color: Colors.VALENTINE_RED }]}
                >
                  Non-Veg
                </Text>
              </TouchableOpacity>
            </View>

            {/* Meal Sections */}
            {["Breakfast", "Lunch", "Dinner"].map((meal, index) => (
              <View key={index} style={styles.mealSection}>
                <Text style={styles.mealTitle}>{meal}</Text>
                <View style={styles.divider} />

                {/* List of Dishes */}
                <View style={styles.dishesContainer}>
                  <Text style={styles.dishItem}>✔️ Masala Dosa</Text>
                  <Text style={styles.dishItem}>✔️ Chapati</Text>
                  <Text style={styles.dishItem}>✔️ Adaraki Dal</Text>
                  <Text style={styles.dishItem}>✔️ Mix Veg Dry</Text>

                  {/* Dropdown Selector */}
                  <View
                    style={{
                      width: "45%",
                      backgroundColor: "#000",
                      height: 32,
                      borderRadius: 6,
                      justifyContent: "center",
                      marginTop: 8,
                    }}
                  >
                    <Picker
                      selectedValue={selectedOption}
                      onValueChange={(itemValue) =>
                        setSelectedOption(itemValue)
                      }
                      style={{ color: "#fff" }}
                    >
                      <Picker.Item label="Select" value="" />
                      <Picker.Item label="Rice" value="Rice" />
                      <Picker.Item label="Rice Kheer" value="Rice Kheer" />
                    </Picker>
                  </View>
                </View>
              </View>
            ))}

            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={closeModal}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Main Model Container
  modalContainer: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 50,
  },
  // Model Content Container
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

  // Different Meal Section
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
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.VALENTINE_RED,
    marginBottom: 10,
  },
  dishesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dishItem: {
    width: "50%",
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
