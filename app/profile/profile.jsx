// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import { useRouter } from "expo-router";

// // Importing Expo Icons
// import Ionicons from "@expo/vector-icons/Ionicons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import Octicons from "@expo/vector-icons/Octicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// // Importing ColorCode
// import { Colors } from "../../constants/Colors";

// import { logOut } from "./../services/api";

// // Importing Profile Icon
// import profile from "../../assets/images/profile.jpg";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Profile() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleLogOut = async () => {
//     setLoading(true);
//     try {
//       await logOut(); // Call the logout API
//       await AsyncStorage.removeItem("userToken"); // Remove token from storage
//       Alert.alert("Success", "You have been logged out.");
//       router.replace("/auth/sign-in"); // Navigate to sign-in screen
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Option Press
//   const handleOptionPress = (option) => {
//     if (option.text === "Log Out") {
//       handleLogOut();
//     } else if (option.route) {
//       router.push(option.route);
//     } else {
//       Alert.alert("Coming Soon", `The ${option.text} feature is coming soon.`);
//     }
//   };

//   //   Setting the values of the Profile Options
//   const options = [
//     { icon: Octicons, name: "checklist", text: "Your Orders", size: 20 },
//     {
//       icon: FontAwesome5,
//       name: "address-book",
//       text: "Address Book",
//       size: 20,
//     },
//     { icon: Ionicons, name: "language", text: "Choose Language", size: 23 },
//     { icon: MaterialIcons, name: "info-outline", text: "About", size: 25 },
//     {
//       icon: MaterialCommunityIcons,
//       name: "help-circle-outline",
//       text: "Help",
//       size: 25,
//     },
//     { icon: MaterialIcons, name: "settings", text: "Settings", size: 25 },
//     { icon: MaterialIcons, name: "logout", text: "Log Out", size: 25 },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Arrow for back to main page */}
//       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={28} color={Colors.VALENTINE_RED} />
//       </TouchableOpacity>

//       {/* Profile */}
//       <View style={[styles.cardProperty, styles.alignment]}>
//         <Image source={profile} style={styles.icon} />
//         <Text style={styles.title}>Jin Sakai</Text>

//         <TouchableOpacity
//           style={styles.editIconRight}
//           onPress={() => router.push("/profile/updateProfile")}
//         >
//           {/* Icon for Profile */}
//           <FontAwesome5 name="edit" size={28} color={Colors.VALENTINE_RED} />
//         </TouchableOpacity>
//       </View>

//       {/* Wallet */}
//       <TouchableOpacity
//         onPress={() => router.push("/(tabs)/wallet")}
//         style={[styles.cardProperty, styles.alignment]}
//       >
//         <Text style={[styles.icon, styles.currencyIcon]}>₹</Text>
//         <Text style={styles.title}>Wallet</Text>

//         <View style={styles.walletAmount}>
//           <Text style={styles.walletText}>₹ 5000</Text>
//         </View>
//       </TouchableOpacity>

//       {/* Profile Update Options */}
//       {/* <View style={[styles.cardProperty, { paddingTop: 20 }]}>
//         {options.map((option, index) => (
//           <View key={index} style={[styles.alignment, styles.optionSpacing]}> */}
//       {/* Icon for multiple Profile Editing option */}
//       {/* <View style={styles.editIcon}>
//               <option.icon
//                 name={option.name}
//                 size={option.size}
//                 color={Colors.VALENTINE_RED}
//               />
//             </View> */}

//       {/* Heading for multiple Profile Editing option */}
//       {/* <Text style={styles.updateOptionTxt}>{option.text}</Text> */}

//       {/* Expand Icon for multiple Profile Editing option */}
//       {/* <TouchableOpacity style={styles.editIconRight}>
//               <MaterialIcons
//                 name="arrow-right"
//                 size={38}
//                 color={Colors.VALENTINE_RED}
//               />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View> */}

//       <View style={[styles.cardProperty, styles.optionsContainer]}>
//         {options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.optionItem, styles.alignment]}
//             onPress={() => handleOptionPress(option)}
//           >
//             <View style={styles.optionIcon}>
//               <option.icon
//                 name={option.name}
//                 size={option.size}
//                 color={Colors.VALENTINE_RED}
//               />
//             </View>
//             <Text style={styles.optionText}>{option.text}</Text>
//             <MaterialIcons
//               name="arrow-forward-ios"
//               size={20}
//               color={Colors.VALENTINE_RED}
//               style={styles.optionArrow}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Loading Indicator */}
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator
//             size="large"
//             color={Colors.VALENTINE_RED}
//             overlayColor="rgba(0, 0, 0, 0.7)"
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     paddingVertical: 55,
//     paddingHorizontal: 15,
//     backgroundColor: Colors.BGCOLOR,
//   },
//   backButton: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   cardProperty: {
//     marginTop: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     elevation: 3,
//     backgroundColor: "#fff",
//   },
//   alignment: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   editIconRight: {
//     marginLeft: "auto",
//   },
//   title: {
//     fontSize: 22,
//     fontFamily: "openSans-bold",
//     marginLeft: 15,
//   },
//   updateOptionTxt: {
//     fontSize: 16,
//     fontFamily: "openSans-semiBold",
//     marginLeft: 15,
//   },
//   currencyIcon: {
//     textAlign: "center",
//     backgroundColor: Colors.SEA,
//     color: "#fff",
//     fontSize: 38,
//   },
//   walletAmount: {
//     backgroundColor: Colors.SEA,
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 10,
//     marginLeft: "auto",
//   },
//   walletText: {
//     fontSize: 18,
//     fontFamily: "openSans-bold",
//     color: "#fff",
//   },
//   editIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//     backgroundColor: Colors.BGCOLOR,
//     elevation: 3,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   optionSpacing: {
//     marginBottom: 20,
//   },
//   optionsContainer: {
//     paddingVertical: 10,
//   },
//   optionItem: {
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   optionIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: Colors.BGCOLOR,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   optionText: {
//     flex: 1,
//     fontSize: 16,
//     fontFamily: "openSans-semiBold",
//     color: "#333",
//   },
//   optionArrow: {
//     marginLeft: 10,
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
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

// Importing Expo Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing ColorCode
import { Colors } from "../../constants/Colors";

import { logOut } from "./../services/api";

// Importing Profile Icon
import profile from "../../assets/images/profile.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    try {
      await logOut(); // Call the logout API
      await AsyncStorage.removeItem("userToken"); // Remove token from storage
      Alert.alert("Success", "You have been logged out.");
      router.replace("/auth/sign-in"); // Navigate to sign-in screen
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Option Press
  const handleOptionPress = (option) => {
    if (option.text === "Log Out") {
      handleLogOut();
    } else if (option.route) {
      router.push(option.route);
    } else {
      Alert.alert("Coming Soon", `The ${option.text} feature is coming soon.`);
    }
  };

  //   Setting the values of the Profile Options
  const options = [
    { icon: Octicons, name: "checklist", text: "Your Orders", size: 20 },
    {
      icon: FontAwesome5,
      name: "address-book",
      text: "Address Book",
      size: 20,
    },
    { icon: Ionicons, name: "language", text: "Choose Language", size: 23 },
    { icon: MaterialIcons, name: "info-outline", text: "About", size: 25 },
    {
      icon: MaterialCommunityIcons,
      name: "help-circle-outline",
      text: "Help",
      size: 25,
    },
    { icon: MaterialIcons, name: "settings", text: "Settings", size: 25 },
    { icon: MaterialIcons, name: "logout", text: "Log Out", size: 25 },
  ];

  return (
    <View style={styles.container}>
      {/* Arrow for back to main page */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={Colors.VALENTINE_RED} />
      </TouchableOpacity>

      {/* Profile */}
      <View style={[styles.cardProperty, styles.alignment]}>
        <Image source={profile} style={styles.icon} />
        <Text style={styles.title}>Jin Sakai</Text>

        <TouchableOpacity
          style={styles.editIconRight}
          onPress={() => router.push("/profile/updateProfile")}
        >
          {/* Icon for Profile */}
          <FontAwesome5 name="edit" size={28} color={Colors.VALENTINE_RED} />
        </TouchableOpacity>
      </View>

      {/* Wallet */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/wallet")}
        style={[styles.cardProperty, styles.alignment]}
      >
        <Text style={[styles.icon, styles.currencyIcon]}>₹</Text>
        <Text style={styles.title}>Wallet</Text>

        <View style={styles.walletAmount}>
          <Text style={styles.walletText}>₹ 5000</Text>
        </View>
      </TouchableOpacity>

      {/* Profile Update Options */}
      {/* <View style={[styles.cardProperty, { paddingTop: 20 }]}>
        {options.map((option, index) => (
          <View key={index} style={[styles.alignment, styles.optionSpacing]}> */}
      {/* Icon for multiple Profile Editing option */}
      {/* <View style={styles.editIcon}>
              <option.icon
                name={option.name}
                size={option.size}
                color={Colors.VALENTINE_RED}
              />
            </View> */}

      {/* Heading for multiple Profile Editing option */}
      {/* <Text style={styles.updateOptionTxt}>{option.text}</Text> */}

      {/* Expand Icon for multiple Profile Editing option */}
      {/* <TouchableOpacity style={styles.editIconRight}>
              <MaterialIcons
                name="arrow-right"
                size={38}
                color={Colors.VALENTINE_RED}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View> */}

      <View style={[styles.cardProperty, styles.optionsContainer]}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionItem, styles.alignment]}
            onPress={() => handleOptionPress(option)}
          >
            <View style={styles.optionIcon}>
              <option.icon
                name={option.name}
                size={option.size}
                color={Colors.VALENTINE_RED}
              />
            </View>
            <Text style={styles.optionText}>{option.text}</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color={Colors.VALENTINE_RED}
              style={styles.optionArrow}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator
            size="large"
            color={Colors.VALENTINE_RED}
            overlayColor="rgba(0, 0, 0, 0.7)"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 55,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardProperty: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
  },
  alignment: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  editIconRight: {
    marginLeft: "auto",
  },
  title: {
    fontSize: 22,
    fontFamily: "openSans-bold",
    marginLeft: 15,
  },
  updateOptionTxt: {
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    marginLeft: 15,
  },
  currencyIcon: {
    textAlign: "center",
    backgroundColor: Colors.SEA,
    color: "#fff",
    fontSize: 38,
  },
  walletAmount: {
    backgroundColor: Colors.SEA,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: "auto",
  },
  walletText: {
    fontSize: 18,
    fontFamily: "openSans-bold",
    color: "#fff",
  },
  editIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.BGCOLOR,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  optionSpacing: {
    marginBottom: 20,
  },
  optionsContainer: {
    paddingVertical: 10,
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.BGCOLOR,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontFamily: "openSans-semiBold",
    color: "#333",
  },
  optionArrow: {
    marginLeft: 10,
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
