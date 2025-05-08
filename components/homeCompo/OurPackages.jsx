import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
import { getPackages } from "./../../app/services/api";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { Colors } from "./../../constants/Colors";

export default function OurPackages() {
  const router = useRouter();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedFoodType, setSelectedFoodType] = useState("Veg");
  const [selectedCategory, setSelectedCategory] = useState("Regular");
  const [price, setPrice] = useState();
  const [isVeg, setIsVeg] = useState(true); // New state for toggle switch

  // Fetch packages from the backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await getPackages(); // Fetch data from API

        setPackages(response); // Update state with fetched packages
        setLoading(false); // Hide loading spinner
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Failed to load packages.");
        setLoading(false); // Hide loading spinner on error
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <Spinner
        visible={true}
        textContent={"Loading..."}
        textStyle={{ color: "#FFF" }}
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
    );
  }

  // If there is an error, display an error message
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    );
  }

  if (packages.length === 0) {
    return (
      <View style={styles.noPackagesContainer}>
        <Text style={styles.noPackagesText}>No packages available</Text>
      </View>
    );
  }

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const filteredMenu = packages.filter((item) => {
    const isMatching =
      item.type === selectedFoodType && item.name === selectedCategory;

    return isMatching;
  });

  const handleCheckOutPage = () => {
    console.log("Price => " + price);

    router.push({
      pathname: "/menu/checkoutPage",
      params: { selectedCategory, price },
    });
  };

  return (
    <View style={styles.packageContainer}>
      {/* Our Packages Heading */}
      <Text style={styles.heading}>Our Packages</Text>

      {/* Category Selector (Regular, Special, Deluxe) */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("Regular")}
        >
          <Text
            style={[
              styles.categoryText,
              {
                color: selectedCategory === "Regular" ? "#fff" : "#999",
              },
            ]}
          >
            Regular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("Special")}
        >
          <Text
            style={[
              styles.categoryText,
              {
                color: selectedCategory === "Special" ? "#fff" : "#999",
              },
            ]}
          >
            Special
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedCategory("Deluxe")}
        >
          <Text
            style={[
              styles.categoryText,
              {
                color: selectedCategory === "Deluxe" ? "#fff" : "#999",
              },
            ]}
          >
            Deluxe
          </Text>
        </TouchableOpacity>
      </View>

      {/* Package List */}
      {filteredMenu.map((pkg) => (
        <LinearGradient
          key={pkg.id}
          colors={["#25252D", "#595F6B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.packageCard}
        >
          <View style={styles.packageHeader}>
            <Text style={styles.packageTitle}>{pkg.name}</Text>

            {/* Veg/Non-Veg Toggle Switch */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleSwitch,
                  isVeg ? styles.activeToggle : styles.inactiveToggle,
                ]}
                onPress={() => {
                  setIsVeg((previousState) => !previousState);
                  setSelectedFoodType(isVeg ? "Non-Veg" : "Veg");
                }}
              >
                {/* "Non-Veg" or "Veg" text on opposite side */}
                <View style={styles.toggleTextContainer}>
                  <Text
                    style={[
                      styles.oppositeText,
                      isVeg ? styles.nonVegText : styles.vegText,
                    ]}
                  >
                    {isVeg ? "Non-Veg" : "Veg"}
                  </Text>
                </View>

                {/* Ball inside the toggle with text */}
                <View
                  style={[
                    styles.toggleBall,
                    isVeg ? styles.activeBall : styles.inactiveBall,
                  ]}
                >
                  <Text style={styles.toggleBallText}>
                    {isVeg ? "Veg" : "Non-Veg"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.hr} />
          <View style={styles.itemsContainer}>
            {pkg.description &&
              chunkArray(pkg.description.split(","), 2).map((pair, index) => (
                <View key={index} style={styles.itemRow}>
                  {pair.map((item, subIndex) => (
                    <View key={subIndex} style={styles.itemColumn}>
                      <MaterialIcons
                        name="check-circle"
                        size={20}
                        color="#42a5f5"
                      />
                      <Text style={styles.itemText}>{item.trim()}</Text>
                    </View>
                  ))}
                </View>
              ))}
          </View>
          <View style={styles.hr} />

          <View style={styles.packageDetails}>
            {pkg.durations.map((duration) => (
              <TouchableOpacity
                key={duration.id}
                style={[
                  styles.subscriptionOption,
                  selectedPackage === duration.id && styles.selectedOption,
                ]}
                onPress={() => {
                  setSelectedPackage(
                    selectedPackage === duration.id ? null : duration.id
                  );
                  setPrice(duration.price);
                }}
              >
                <View style={styles.subscriptionDurationContainer}>
                  <MaterialIcons
                    name={
                      selectedPackage === duration.id
                        ? "radio-button-checked"
                        : "radio-button-unchecked"
                    }
                    size={24}
                    color={
                      selectedPackage === duration.id ? "#42a5f5" : "#999999"
                    }
                  />
                  <Text style={styles.subscriptionDuration}>
                    {duration.duration}
                  </Text>
                </View>
                <View style={styles.subscriptionPriceContainer}>
                  <Text style={styles.subscriptionPrice}>
                    ₹{duration.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.pricingContainer}>
            <TouchableOpacity
              style={[
                styles.subscribeButton,
                !selectedPackage && styles.disabledButton,
              ]}
              onPress={() => selectedPackage && handleCheckOutPage()}
              disabled={!selectedPackage}
            >
              <Text style={styles.subscribeText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ))}

      {/* Error Handling and No Packages Message */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      )}
      {packages.length === 0 && (
        <View style={styles.noPackagesContainer}>
          <Text style={styles.noPackagesText}>No packages available</Text>
        </View>
      )}
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  heading: {
    color: Colors.EAGLE_GREEN,
    fontSize: 21,
    fontFamily: "poppins-bold",
    textAlign: "center",
    marginBottom: 10,
  },
  packageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 5,
    backgroundColor: "#333",
  },
  categoryText: {
    fontSize: 18,
    fontFamily: "poppins-semiBold",
  },
  hr: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
  itemsContainer: {
    marginTop: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    marginLeft: 5,
  },
  packageCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: "100%",
  },
  packageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  packageDetails: {
    marginTop: 15,
  },
  subscriptionOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#444",
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#666",
  },
  subscriptionDurationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subscriptionDuration: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 18,
  },
  subscriptionPriceContainer: {
    alignItems: "flex-end",
  },
  subscriptionPrice: {
    color: "#42a5f5",
    fontSize: 16,
  },
  pricingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  subscribeButton: {
    backgroundColor: "#42a5f5",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  subscribeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#999",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  toggleSwitch: {
    width: 150,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    position: "relative",
  },
  activeToggle: {
    backgroundColor: "#fff",
  },
  inactiveToggle: {
    backgroundColor: "#fff",
  },
  toggleBall: {
    width: 70,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    transition: "0.3s",
  },
  activeBall: {
    left: 0,
    backgroundColor: "#00C853",
  },
  inactiveBall: {
    right: 0,
    backgroundColor: "#F76C5E",
  },
  toggleBallText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  toggleTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  oppositeText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  vegText: {
    textAlign: "left",
    marginRight: 50,
  },
  nonVegText: {
    textAlign: "right",
    marginLeft: 60,
  },

  errorContainer: {
    marginTop: 20,
  },
  errorMessage: {
    color: "red",
  },
  noPackagesContainer: {
    marginTop: 20,
  },
  noPackagesText: {
    fontSize: 18,
    color: "#999",
  },
});
