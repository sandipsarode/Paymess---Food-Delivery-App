// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "expo-router";

// // Importing Expo Icons
// import Ionicons from "@expo/vector-icons/Ionicons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import Octicons from "@expo/vector-icons/Octicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// // Importing ColorCode
// import { Colors } from "../../constants/Colors";

// import { API, logOut, profileInfo } from "./../services/api";

// // Importing Profile Icon
// // import profile from "../../assets/images/profile.jpg";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Profile() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [profileData, setProfileData] = useState([]);

//   useEffect(() => {
//     const fetchProfileInfo = async () => {
//       setLoading(true);
//       try {
//         const response = await profileInfo();
//         console.log("profileInfo => " + response);
//         setProfileData(response);
//       } catch (error) {
//         Alert.alert("Error", error.message || "Failed to load profile info");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileInfo();
//   }, []);

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
//         <Image
//           source={{ uri: API + profileData.profile_picture }}
//           style={styles.icon}
//         />
//         <Text style={styles.title}>{profileData.name}</Text>

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

// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "expo-router";
// import { useIsFocused } from "@react-navigation/native"; // <-- Add this

// // Importing Expo Icons
// import Ionicons from "@expo/vector-icons/Ionicons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import Octicons from "@expo/vector-icons/Octicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// // Importing ColorCode
// import { Colors } from "../../constants/Colors";

// import { API, logOut, profileInfo } from "./../services/api";

// // Importing Profile Icon
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Profile() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [profileData, setProfileData] = useState([]);
//   const isFocused = useIsFocused(); // <-- Add this

//   useEffect(() => {
//     const fetchProfileInfo = async () => {
//       setLoading(true);
//       try {
//         const response = await profileInfo();
//         console.log("profileInfo => " + response);
//         setProfileData(response);
//       } catch (error) {
//         Alert.alert("Error", error.message || "Failed to load profile info");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Trigger the profile info fetching whenever the screen is focused
//     if (isFocused) {
//       fetchProfileInfo(); // <-- Fetch data when the page is in focus
//     }
//   }, [isFocused]); // <-- Depend on `isFocused` to refresh when navigating back

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
//     { icon: MaterialIcons, name: "info-outline", text: "About", size: 25 },
//     {
//       icon: MaterialCommunityIcons,
//       name: "help-circle-outline",
//       text: "Help",
//       size: 25,
//     },
//     { icon: MaterialIcons, name: "logout", text: "Log Out", size: 25 },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Arrow for back to main page */}
//       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={28} color={Colors.EAGLE_GREEN} />
//       </TouchableOpacity>

//       {/* Profile */}
//       <View style={[styles.cardProperty, styles.alignment]}>
//         <Image
//           source={{ uri: API + profileData.profile_picture }}
//           style={styles.icon}
//         />
//         <Text style={styles.title}>{profileData.name}</Text>

//         {/* <TouchableOpacity
//           style={styles.editIconRight}
//           onPress={() => router.push("/profile/updateProfile")}
//         > */}
//         {/* Icon for Profile */}
//         {/* <FontAwesome5 name="edit" size={28} color={Colors.EAGLE_GREEN} />
//         </TouchableOpacity> */}

//         <TouchableOpacity
//           style={styles.editIconRight}
//           onPress={() => router.push("/profile/updateProfile", { profileData })}
//         >
//           <FontAwesome5 name="edit" size={28} color={Colors.EAGLE_GREEN} />
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
//                 color={Colors.EAGLE_GREEN}
//               />
//             </View>
//             <Text style={styles.optionText}>{option.text}</Text>
//             <MaterialIcons
//               name="arrow-forward-ios"
//               size={20}
//               color={Colors.EAGLE_GREEN}
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
//             color={Colors.EAGLE_GREEN}
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
//     fontFamily: "poppins-bold",
//     marginLeft: 15,
//   },
//   updateOptionTxt: {
//     fontSize: 16,
//     fontFamily: "poppins-semiBold",
//     marginLeft: 15,
//   },
//   currencyIcon: {
//     textAlign: "center",
//     backgroundColor: Colors.EAGLE_GREEN,
//     color: "#fff",
//     fontSize: 38,
//   },
//   walletAmount: {
//     backgroundColor: Colors.EAGLE_GREEN,
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 10,
//     marginLeft: "auto",
//   },
//   walletText: {
//     fontSize: 18,
//     fontFamily: "poppins-bold",
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
//     fontFamily: "poppins-semiBold",
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
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing API functions
import { API, logOut, profileInfo, sendAddress } from "./../services/api";
import UpdateProfilePicture from "../../components/UpdateProfilePicture";

export default function Profile() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  // State variable for the loader
  const [loading, setLoading] = useState(false);

  // State variable to store all the profile information
  const [profileData, setProfileData] = useState({});
  const [user_id, setUserId] = useState(null);

  // Variable for the different profile options
  const isFocused = useIsFocused();

  // UseEffect to fetch all the logged user information
  useEffect(() => {
    const fetchProfileInfo = async () => {
      setLoading(true);
      try {
        const response = await profileInfo();
        setUserId(response.id);

        if (response && typeof response === "object") {
          setProfileData(response);
        } else {
          setProfileData({});
        }
      } catch (error) {
        Alert.alert("Error", error.message || "Failed to load profile info");
        setProfileData({});
      } finally {
        setLoading(false);
      }
    };

    if (isFocused) {
      fetchProfileInfo();
    }
  }, [isFocused]);

  // Function to handle the user logOut
  const handleLogOut = async () => {
    setLoading(true);
    try {
      await logOut();
      await AsyncStorage.removeItem("userToken");
      Alert.alert("Success", "You have been logged out.");
      router.replace("/auth/sign-in");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle the different user profile options
  const handleOptionPress = (option) => {
    if (option.text === "Log Out") {
      handleLogOut();
    } else if (option.text === "Your Orders") {
      router.push("/history/history");
    } else if (option.text === "Address Book") {
      // router.push("/profile/addAddress");
      router.push({
        pathname: "/profile/addressBook",
        params: { user_id },
      });
    } else if (option.route) {
      router.push(option.route);
    } else {
      Alert.alert("Coming Soon", `The ${option.text} feature is coming soon.`);
    }
  };

  // Function to update the logged user profile
  const handleUpdateProfile = (profileData) => {
    router.push({
      pathname: "/profile/updateProfile",
      params: { profileData },
    });
  };

  // Array of Different user profile options
  const options = [
    { icon: Octicons, name: "checklist", text: "Your Orders", size: 20 },
    {
      icon: FontAwesome5,
      name: "address-book",
      text: "Address Book",
      size: 20,
    },
    { icon: MaterialIcons, name: "info-outline", text: "About", size: 25 },
    {
      icon: MaterialCommunityIcons,
      name: "help-circle-outline",
      text: "Help",
      size: 25,
    },
    { icon: MaterialIcons, name: "logout", text: "Log Out", size: 25 },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Navigation Icon to back to Home */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color={Colors.EAGLE_GREEN} />
      </TouchableOpacity>

      {/* Display the current user profile */}
      <View style={[styles.cardProperty, styles.alignment]}>
        {/* <Image
          source={{
            uri: profileData.profile_picture
              ? `${API}${profileData.profile_picture}`
              : "default_image_url",
          }}
          style={styles.icon}
        /> */}
        <View>
          <Image
            alt="Profile Image"
            source={{
              uri: profileData.profile_picture
                ? `${API}${profileData.profile_picture}`
                : "default_image_url",
            }}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.profileAction}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          {profileData.name || "Name not available"}
        </Text>

        {/* Button to update the profile */}
        <TouchableOpacity
          style={styles.editIconRight}
          onPress={() => handleUpdateProfile(profileData.id)}
        >
          <FontAwesome5 name="edit" size={28} color={Colors.EAGLE_GREEN} />
        </TouchableOpacity>
      </View>

      {/* Display the wallet amount and just to wallet tab */}
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

      {/* Show all the profile options */}
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
                color={Colors.EAGLE_GREEN}
              />
            </View>
            <Text style={styles.optionText}>{option.text}</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              color={Colors.EAGLE_GREEN}
              style={styles.optionArrow}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Set loader visible */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator
            size="large"
            color={Colors.EAGLE_GREEN}
            overlayColor="rgba(0, 0, 0, 0.7)"
          />
        </View>
      )}

      {isModalVisible && (
        <UpdateProfilePicture
          modalVisible={isModalVisible}
          closeModal={() => setModalVisible(false)}
          userId={profileData.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Main Container
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 55,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
  },
  alignment: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Back Navigation Button
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Profile Card Section
  cardProperty: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: "poppins-bold",
    marginLeft: 15,
  },
  editIconRight: {
    marginLeft: "auto",
  },
  // Profile Update Section
  profileImg: {
    // width: "100%",
    // height: "100%",
    // borderRadius: 60,
    // position: "relative",
  },
  profileAction: {
    position: "absolute",
    right: -10,
    bottom: -5,
    elevation: 3,
  },
  // Wallet Section
  currencyIcon: {
    textAlign: "center",
    backgroundColor: Colors.EAGLE_GREEN,
    color: "#fff",
    fontSize: 38,
  },
  walletAmount: {
    backgroundColor: Colors.EAGLE_GREEN,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: "auto",
  },
  walletText: {
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#fff",
  },
  updateOptionTxt: {
    fontSize: 16,
    fontFamily: "poppins-semiBold",
    marginLeft: 15,
  },
  //  Different profile options
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
    fontFamily: "poppins-semiBold",
    color: "#333",
  },
  optionArrow: {
    marginLeft: 10,
  },
  // loader
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
