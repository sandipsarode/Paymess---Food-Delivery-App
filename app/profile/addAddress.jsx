// import { View, Text, ActivityIndicator, StyleSheet, Alert } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
// import { Colors } from "../../constants/Colors";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import Input from "../../components/Input";
// import { TouchableOpacity } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// import { sendAddress } from "./../services/api";

// export default function AddAddress() {
//   const navigation = useNavigation();
//   const router = useRouter();
//   const { user_id, allowedTypes } = useLocalSearchParams();
//   const [loading, setLoading] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState("Home");
//   const [flatName, setFlatName] = useState("");
//   const [area, setArea] = useState("");
//   const [landmark, setLandmark] = useState("");
//   const [pincode, setPincode] = useState("");

//   useEffect(() => {
//     console.log("ID => " + user_id);
//     console.log("allowedTypes => " + allowedTypes);

//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: "Add Address",
//       headerStyle: {
//         backgroundColor: "transparent",
//       },
//       headerTintColor: Colors.EAGLE_GREEN,
//     });
//   }, []);

//   const handleSaveProfile = async () => {
//     // Check if all fields are filled for the selected address type
//     if (!flatName || !area || !landmark || !pincode) {
//       Alert.alert(
//         "Error",
//         "All fields are required for the selected address type."
//       );
//       return;
//     }

//     if (pincode.length !== 6) {
//       Alert.alert("Error", "Pincode should be exactly 6 characters long.");
//       return;
//     }

//     setLoading(true);
//     const address = `${selectedAddress} - ${flatName}, ${area}, ${landmark}`;
//     const zip_code = pincode;

//     const addAddress = {
//       user_id,
//       address,
//       zip_code,
//     };

//     try {
//       const response = await sendAddress(addAddress);
//       Alert.alert("Success", "Address added successfully.");
//       router.back();
//     } catch (error) {
//       Alert.alert("Error", "" + error);
//     }
//     setLoading(false);
//   };

//   return (
//     <KeyboardAwareScrollView
//       style={{ flex: 1, backgroundColor: Colors.BGCOLOR }}
//     >
//       <View style={{ paddingTop: 90, paddingHorizontal: 20 }}>
//         <Text
//           style={{ fontFamily: "poppins", fontSize: 13, marginVertical: 10 }}
//         >
//           Save address as
//         </Text>
//         <View style={styles.addressTypeContainer}>
//           <TouchableOpacity
//             style={[
//               styles.addressTypeButton,
//               selectedAddress === "Home" && styles.selectedButton,
//             ]}
//             onPress={() => setSelectedAddress("Home")}
//           >
//             <Ionicons
//               name="home"
//               size={20}
//               color="black"
//               style={selectedAddress === "Home" && styles.selectedButton}
//             />
//             <Text
//               style={[
//                 styles.addressTypeText,
//                 selectedAddress === "Home" && styles.selectedButton,
//               ]}
//             >
//               Home
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.addressTypeButton,
//               selectedAddress === "Work" && styles.selectedButton,
//             ]}
//             onPress={() => setSelectedAddress("Work")}
//           >
//             <MaterialIcons
//               name="work"
//               size={20}
//               color="black"
//               style={selectedAddress === "Work" && styles.selectedButton}
//             />
//             <Text
//               style={[
//                 styles.addressTypeText,
//                 selectedAddress === "Work" && styles.selectedButton,
//               ]}
//             >
//               Work
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.inputFields}>
//           <Input
//             placeholder="Flat, House no., Building, Company"
//             value={flatName}
//             onChangeText={setFlatName}
//           />
//           <Input
//             placeholder="Area, Street"
//             value={area}
//             onChangeText={setArea}
//           />
//           <Input
//             placeholder="Landmark"
//             value={landmark}
//             onChangeText={setLandmark}
//           />
//           <Input
//             placeholder="Pincode"
//             value={pincode}
//             onChangeText={setPincode}
//             keyboardType="numeric"
//             maxLength={6}
//           />
//         </View>
//         <TouchableOpacity
//           style={[styles.btn, { backgroundColor: Colors.EAGLE_GREEN }]}
//           onPress={handleSaveProfile}
//         >
//           <Text style={styles.btnText}>Save</Text>
//         </TouchableOpacity>

//         {loading && (
//           <View style={styles.loadingOverlay}>
//             <ActivityIndicator size="large" color={Colors.EAGLE_GREEN} />
//           </View>
//         )}
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   addressTypeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   addressTypeButton: {
//     width: 110,
//     paddingVertical: 5,
//     borderWidth: 1,
//     borderColor: Colors.BOULDER,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   selectedButton: {
//     borderColor: Colors.JUNGLE_GREEN,
//     color: Colors.JUNGLE_GREEN,
//   },
//   addressTypeText: {
//     fontFamily: "poppins",
//     fontSize: 13,
//     marginLeft: 8,
//   },
//   inputFields: {
//     marginTop: 20,
//   },
//   btn: {
//     width: "80%",
//     marginHorizontal: "10%",
//     marginVertical: 20,
//     borderRadius: 5,
//     height: 50,
//     justifyContent: "center",
//   },
//   btnText: {
//     color: "white",
//     textAlign: "center",
//     fontFamily: "poppins-bold",
//     fontSize: 18,
//   },
//   loadingOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0,0,0,0.3)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../components/Input";

import { sendAddress } from "./../services/api";

export default function AddAddress() {
  const navigation = useNavigation();
  const { user_id, allowedTypes } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [flatName, setFlatName] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    console.log("usrr => " + user_id);
    console.log("allowedTypes => " + allowedTypes);

    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Add Address",
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: Colors.EAGLE_GREEN,
    });
  }, []);

  const handleSaveProfile = async () => {
    // Check if all fields are filled for the selected address type
    if (!flatName || !area || !landmark || !pincode) {
      Alert.alert(
        "Error",
        "All fields are required for the selected address type."
      );
      return;
    }

    if (pincode.length !== 6) {
      Alert.alert("Error", "Pincode should be exactly 6 characters long.");
      return;
    }

    setLoading(true);
    const address = `${allowedTypes} - ${flatName}, ${area}, ${landmark}`;
    const zip_code = pincode;

    const addAddress = {
      user_id,
      address,
      zip_code,
    };

    try {
      const response = await sendAddress(addAddress);
      Alert.alert("Success", "Address added successfully.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "" + error);
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: Colors.BGCOLOR }}
    >
      <View style={{ paddingTop: 90, paddingHorizontal: 20 }}>
        <Text
          style={{ fontFamily: "poppins", fontSize: 13, marginVertical: 10 }}
        >
          Save address as
        </Text>

        <View style={styles.inputFields}>
          <Input
            placeholder="Flat, House no., Building, Company"
            value={flatName}
            onChangeText={setFlatName}
          />
          <Input
            placeholder="Area, Street"
            value={area}
            onChangeText={setArea}
          />
          <Input
            placeholder="Landmark"
            value={landmark}
            onChangeText={setLandmark}
          />
          <Input
            placeholder="Pincode"
            value={pincode}
            onChangeText={setPincode}
            keyboardType="numeric"
            maxLength={6}
          />
        </View>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.EAGLE_GREEN }]}
          onPress={handleSaveProfile}
        >
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={Colors.EAGLE_GREEN} />
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  addressTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  btn: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});
