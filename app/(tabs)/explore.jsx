import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

// Static mapping of day names to images
const dayImages = {
  Sunday: require("../../assets/images/week-1.png"),
  Monday: require("../../assets/images/week-2.png"),
  Tuesday: require("../../assets/images/week-3.png"),
  Wednesday: require("../../assets/images/week-4.png"),
  Thursday: require("../../assets/images/week-5.png"),
  Friday: require("../../assets/images/week-6.png"),
  Saturday: require("../../assets/images/week-7.png"),
};

export default function Explore() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle day click and open modal
  const openDayMenu = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Location and Profile Icon Section */}
        <View style={styles.header}>
          <View style={styles.alignment}>
            <Ionicons
              name="location-sharp"
              size={35}
              color={Colors.VALENTINE_RED}
            />
            <View>
              <Text style={styles.homeText}>Home</Text>
              <Text style={styles.addressText}>
                Hanuman Nagar, Sharda Colony, Gondia
              </Text>
            </View>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={Colors.VALENTINE_RED}
              style={styles.profileIcon}
            />
          </View>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.VALENTINE_RED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>

        {/* Weekly Schedule Section */}
        <View style={styles.weeklyScheduleContainer}>
          <Text style={styles.weeklyScheduleTitle}>-- Weekly Schedule --</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.keys(dayImages).map((day) => (
              <TouchableOpacity
                key={day}
                style={styles.scheduleItem}
                onPress={() => openDayMenu(day)}
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
            ))}
          </ScrollView>
        </View>

        {/* Our Packages Section */}
        <View style={styles.ourPackageContainer}>
          <ImageBackground
            source={require("../../assets/images/OurPackageBG.png")}
            style={styles.packagesBackground}
            resizeMode="cover"
          >
            <View style={styles.packagesContainer}>
              <Text style={styles.packagesTitle}>Our Packages</Text>

              {/* Veg and Non-Veg Toggle */}
              <View style={styles.toggleContainer}>
                <TouchableOpacity style={styles.toggleButtonActive}>
                  <Text style={styles.toggleButtonText}>Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggleButtonInactive}>
                  <Text style={styles.toggleButtonText}>Non-Veg</Text>
                </TouchableOpacity>
              </View>

              {/* Package Descriptions */}
              <View style={styles.packageItem}>
                <Text style={styles.packageType}>Regular</Text>
                <Text style={styles.packageDescription}>
                  1 Sabji + Rice + Daal Fry + 3 Chapati + Salad
                </Text>
              </View>

              <View style={styles.packageItem}>
                <Text style={styles.packageType}>Special</Text>
                <Text style={styles.packageDescription}>
                  1 Matar Paneer + 1 Mix Veg + Rice + Daal Fry + 3 Chapati +
                  Salad + Papad + Achar + Dahi [Subject to Availability]
                </Text>
              </View>

              <View style={styles.packageItem}>
                <Text style={styles.packageType}>Deluxe</Text>
                <Text style={styles.packageDescription}>
                  1 Matar Paneer + 1 Mix Veg + Jeera Rice + Daal Fry + 4 Chapati
                  + 1 Sweet [Rasgulla or Gulab Jamun] + Salad + Papad + Achar
                  [Subject to Availability]
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* New "Be Tension Free!" Section */}
        <View style={styles.tensionFreeContainer}>
          <Text style={styles.tensionFreeTitle}>BE TENSION FREE!</Text>
          <Text style={styles.tensionFreeText}>
            On-Time Delivery You have the option to schedule your delivery time
            to suit your needs. Our efficient delivery system ensures your order
            arrives exactly when you want it, taking care of all your needs.
          </Text>
          <Text style={styles.tensionFreeText}>
            You can incorporate this text into your app, placing it on the
            relevant screens such as the order summary or confirmation screen to
            reassure your customers about the reliability and convenience of
            your delivery service.
          </Text>
          {/* Icons and Text Section */}
          <View style={styles.benefitsList}>
            <Text style={styles.benefitItem}>✔️ Expert Packaging</Text>
            <Text style={styles.benefitItem}>✔️ Complimentary Delivery</Text>
            <Text style={styles.benefitItem}>
              ✔️ Flexible Delivery Scheduling
            </Text>
          </View>
          {/* Image Section */}
          <Image
            source={require("../../assets/images/beTensionFreeImg.png")}
            style={styles.deliveryImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Updated Modal for Day Menu */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
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
                <Text style={styles.vegText}>Veg</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.foodTypeButton}>
                <Text style={styles.nonVegText}>Non-Veg</Text>
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
                  {/* <Picker
                    selectedValue={selectedOption}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                  >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Rice" value="Rice" />
                    <Picker.Item label="Rice Kheer" value="Rice Kheer" />
                  </Picker> */}
                </View>
              </View>
            ))}

            {/* Done Button */}
            <TouchableOpacity style={styles.doneButton} onPress={closeModal}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 30, // Adds space at the bottom
  },
  container: {
    height: "100%",
  },
  header: {
    padding: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
  alignment: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeText: {
    fontSize: 21,
    fontFamily: "openSans-semiBold",
  },
  addressText: {
    fontSize: 12,
    fontFamily: "openSans",
  },
  profileIcon: {
    marginLeft: "auto",
  },
  searchContainer: {
    marginLeft: 25,
    marginRight: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    marginLeft: 10,
    fontFamily: "openSans",
    fontSize: 16,
    flex: 1,
  },
  weeklyScheduleContainer: {
    padding: 25,
    paddingVertical: -10,
  },
  weeklyScheduleTitle: {
    fontSize: 18,
    fontFamily: "Pacifico-Regular",
    textAlign: "center",
    marginVertical: 20,
  },
  scheduleItem: {
    // padding: 25,
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
    paddingLeft: 10,
    paddingRight: 10,
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
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: Colors.BOULDER,
  },
  transactionText: {
    margin: 5,
    color: Colors.BOULDER,
    fontSize: 12,
    fontFamily: "openSans-bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 22,
    fontFamily: "openSans-semiBold",
    marginBottom: 10,
  },
  dayImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  closeText: {
    fontSize: 16,
    color: Colors.VALENTINE_RED,
    marginTop: 15,
  },

  // Styles for the "Our Packages" section with background

  packagesBackground: {
    width: "100%",
    paddingVertical: 30,
    alignItems: "center",
  },

  packagesContainer: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },

  packagesTitle: {
    fontSize: 24,
    fontFamily: "Pacifico-Regular",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },

  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  toggleButtonActive: {
    backgroundColor: Colors.KELLY_GREEN,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },

  toggleButtonInactive: {
    backgroundColor: Colors.VALENTINE_RED,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,
  },

  toggleButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "openSans-bold",
    textAlign: "center",
  },

  packageItem: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 10,
  },

  packageType: {
    fontSize: 20,
    fontFamily: "Pacifico-Regular",
    textAlign: "center",
    color: Colors.VALENTINE_RED,
    marginBottom: 5,
  },

  packageDescription: {
    fontSize: 14,
    fontFamily: "openSans",
    textAlign: "center",
    color: "white",
  },
  tensionFreeContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  tensionFreeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.VALENTINE_RED,
    marginBottom: 10,
  },
  tensionFreeText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
    textAlign: "justify",
  },
  benefitsList: {
    marginBottom: 10,
  },
  benefitItem: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  deliveryImage: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    backgroundColor: "#1c1c1c",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "90%",
  },
  dayTitle: {
    fontSize: 28,
    fontFamily: "Pacifico-Regular",
    color: "#ff4444",
    marginBottom: 15,
  },
  dayImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  foodTypeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  foodTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#333",
  },
  vegText: { color: "#00FF00", fontSize: 18 },
  nonVegText: { color: "#FF4444", fontSize: 18 },
  mealSection: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  mealTitle: {
    fontSize: 24,
    fontFamily: "Pacifico-Regular",
    color: "#ff4444",
    marginBottom: 5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ff4444",
    marginBottom: 10,
  },
  dishesContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  dishItem: {
    fontSize: 16,
    color: "#00FF00",
    marginVertical: 5,
  },
  picker: {
    width: "100%",
    height: 40,
    color: "#fff",
    backgroundColor: "#333",
    borderRadius: 10,
    marginVertical: 10,
  },
  doneButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#ff4444",
    borderRadius: 10,
  },
  doneButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "openSans-semiBold",
  },
});
