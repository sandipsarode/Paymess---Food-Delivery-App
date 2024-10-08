import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

export default function Coupon({ visible, onClose }) {
  // Coupon Timer for 2sec
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Close after 2 seconds
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [visible, onClose]);

  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <Ionicons
            name="checkmark-circle"
            size={70}
            color={Colors.PALATINATE_BLUE}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "poppins-bold",
              }}
            >
              ‘HUNGRY50’
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "poppins",
              }}
            >
              applied
            </Text>
          </View>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "poppins-bold",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            ₹50.00 is added to your Wallet
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "poppins",
            }}
          >
            with this coupon code
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "poppins-bold",
              color: Colors.EAGLE_GREEN,
              marginTop: 35,
            }}
          >
            Woohoo! Thanks
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    paddingVertical: 25,
    backgroundColor: "#fff",
    borderRadius: 25,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
