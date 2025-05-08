import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal, // Import Modal for payment dialog
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // For icons like arrow, credit card, and UPI
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Regular", // Default plan
    amount: "149",
  });

  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false); // State to control the modal visibility
  const { selectedCategory, price } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  // Function to handle Pay button click
  const handlePay = () => {
    // Show the payment completed modal
    setIsPaymentCompleted(true);

    // Simulate a short delay to show the modal for 2 seconds
    setTimeout(() => {
      setIsPaymentCompleted(false);
      // You can also navigate to another page after payment is completed
      navigation.goBack();
    }, 2000); // Close modal after 2 seconds
  };

  return (
    <View style={styles.container}>
      {/* Logo and Plan Name */}
      <View style={styles.planHeader}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.planName}>{selectedCategory} Plan</Text>
        </View>
        <Text style={styles.planPrice}>₹{price}</Text>
      </View>

      {/* Credit Card Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Credit Card</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Card Number"
          keyboardType="number-pad"
          placeholderTextColor="#ccc"
        />
        <View style={styles.cardIcons}>
          <MaterialIcons name="credit-card" size={24} color="#333" />
          <MaterialIcons name="credit-card" size={24} color="#333" />
          <MaterialIcons name="credit-card" size={24} color="#333" />
        </View>
      </View>

      {/* Debit/ATM Card Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Debit/ATM Card</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Card Number"
          keyboardType="number-pad"
          placeholderTextColor="#ccc"
        />
        <View style={styles.cardIcons}>
          <MaterialIcons name="credit-card" size={24} color="#333" />
          <MaterialIcons name="credit-card" size={24} color="#333" />
        </View>
      </View>

      {/* UPI Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Pay by any UPI App</Text>
        <View style={styles.upiContainer}>
          <MaterialIcons
            name="account-balance-wallet"
            size={24}
            color="#34a853"
          />
          <Text style={styles.upiText}>GPay</Text>
          <TextInput
            style={styles.upiInput}
            placeholder="Enter UPI ID"
            placeholderTextColor="#ccc"
          />
        </View>
      </View>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay ₹{price}</Text>
      </TouchableOpacity>

      {/* Payment Completed Modal */}
      <Modal
        transparent={true}
        visible={isPaymentCompleted}
        animationType="fade"
        onRequestClose={() => setIsPaymentCompleted(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <MaterialIcons name="check-circle" size={80} color="green" />
            <Text style={styles.modalText}>Payment Completed</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 70,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  planPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  paymentSection: {
    marginTop: 30,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  cardIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  upiContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  upiText: {
    fontSize: 16,
    marginLeft: 10,
  },
  upiInput: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  payButton: {
    marginTop: 40,
    backgroundColor: "#1a73e8",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 250,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
});
