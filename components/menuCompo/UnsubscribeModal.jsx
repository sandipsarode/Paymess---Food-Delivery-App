import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useEffect } from "react";

export default function UnsubscribeModal({ visible, onClose }) {
  // Coupon Timer for 2sec
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "poppins-bold",
            }}
          >
            Subscribe to Plan
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

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// export default function UnsubscribeModal({ onSubscribeNow }) {
//   return (
//     <View style={styles.modalContainer}>
//       <Text style={styles.modalText}>Subscribe to Plan</Text>
//       <TouchableOpacity style={styles.button} onPress={onSubscribeNow}>
//         <Text style={styles.buttonText}>Subscribe Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   modalContainer: {
//     width: "80%",
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     elevation: 5,
//     alignItems: "center",
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: "#007bff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });
