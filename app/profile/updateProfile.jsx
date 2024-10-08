// import { View, Text, StyleSheet, Image } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation } from "expo-router";
// import { Colors } from "../../constants/Colors";
// import { TouchableOpacity } from "react-native";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import CustomInput from "../../components/CustomInput";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// export default function UpdateProfile() {
//   const navigation = useNavigation();

//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });
//   }, []);

//   return (
//     <KeyboardAwareScrollView>
//       <View
//         style={{
//           width: "100%",
//           height: "100%",
//           paddingTop: 80,
//           backgroundColor: Colors.BGCOLOR,
//         }}
//       >
//         <TouchableOpacity style={styles.profileImgSection}>
//           <Image
//             alt="Profile Image"
//             source={require("./../../assets/images/profile.jpg")}
//             style={styles.profileImg}
//           />
//           <View style={styles.profileAction}>
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </View>
//         </TouchableOpacity>

//         <View style={styles.inputFields}>
//           <CustomInput placeholder={"Name"} onChangeText={setName} />
//           <CustomInput
//             placeholder={"Mobile"}
//             onChangeText={setMobile}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="numeric"
//             maxLength={10}
//           />
//           <CustomInput
//             placeholder={"Email"}
//             onChangeText={setEmail}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="email-address"
//           />
//           <CustomInput
//             placeholder={"Date of Birth"}
//             onChangeText={setDob}
//             containerStyle={{ marginTop: 10 }}
//           />
//         </View>

//         {/* Sign In Button */}
//         <TouchableOpacity
//           // onPress={handleSignUp}
//           style={[
//             styles.btn,
//             {
//               padding: 10,
//               backgroundColor: Colors.VALENTINE_RED,
//             },
//           ]}
//         >
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontFamily: "openSans-extraBold",
//               fontSize: 18,
//             }}
//           >
//             Save
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   profileImgSection: {
//     width: 120,
//     height: 120,
//     marginHorizontal: "auto",
//     marginTop: 70,
//   },
//   profileImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 60,
//     position: "relative",
//   },
//   profileAction: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 20,
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     elevation: 3,
//   },
//   inputFields: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginTop: 60,
//   },
//   btn: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginVertical: 20,
//     borderRadius: 5,
//     height: 50,
//     justifyContent: "center",
//   },
// });

// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation } from "expo-router";
// import { Colors } from "../../constants/Colors";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// // import CustomInput from "../../components/CustomInput";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import Input from "../../components/Input";

// export default function UpdateProfile() {
//   const navigation = useNavigation();

//   // State variables for each field
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState(""); // Store the date of birth value
//   const [showDatePicker, setShowDatePicker] = useState(false); // State to show or hide date picker

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });
//   }, []);

//   // Date selection handler
//   const handleDateChange = (event, selectedDate) => {
//     setShowDatePicker(false); // Hide the date picker after selection
//     if (selectedDate) {
//       const formattedDate = selectedDate.toLocaleDateString(); // Format the date as needed
//       setDob(formattedDate); // Set the selected date to the DOB field
//     }
//   };

//   // Handler to show DatePicker when DOB input is tapped
//   const showDatePickerHandler = () => {
//     setShowDatePicker(true);
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <View
//         style={{
//           width: "100%",
//           height: "100%",
//           paddingTop: 80,
//           backgroundColor: Colors.BGCOLOR,
//         }}
//       >
//         {/* Profile Image Section */}
//         <TouchableOpacity style={styles.profileImgSection}>
//           <Image
//             alt="Profile Image"
//             source={require("./../../assets/images/profile.jpg")}
//             style={styles.profileImg}
//           />
//           <View style={styles.profileAction}>
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </View>
//         </TouchableOpacity>

//         <View style={styles.inputFields}>
//           {/* Name, Mobile, and Email Fields */}
//           {/* <CustomInput placeholder={"Name"} onChangeText={setName} />
//           <CustomInput
//             placeholder={"Mobile"}
//             onChangeText={setMobile}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="numeric"
//             maxLength={10}
//           />
//           <CustomInput
//             placeholder={"Email"}
//             onChangeText={setEmail}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="email-address"
//           />
//           <TouchableOpacity onPress={showDatePickerHandler}>
//             <CustomInput
//               placeholder={"Date of Birth"}
//               value={dob} // Display the selected date in the input field
//               editable={false} // Disable manual editing
//               containerStyle={{ marginTop: 10 }}
//             />
//           </TouchableOpacity> */}

//           <Input placeholder={"Name"} onChangeText={setName} />
//           <Input
//             placeholder={"Mobile"}
//             onChangeText={setMobile}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="numeric"
//             maxLength={10}
//           />
//           <Input
//             placeholder={"Email"}
//             onChangeText={setEmail}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="email-address"
//           />

//           {/* Date of Birth Field */}
//           <TouchableOpacity onPress={showDatePickerHandler}>
//             <Input
//               placeholder={"Date of Birth"}
//               containerStyle={{ marginTop: 10 }}
//               editable={false}
//               onChangeText={dob}
//             />
//           </TouchableOpacity>

//           {/* DatePicker Modal */}
//           {showDatePicker && (
//             <DateTimePicker
//               value={new Date()} // Show selected date or default to today
//               mode="date"
//               display="default"
//               onChange={handleDateChange} // Trigger the handler when the date is selected
//               maximumDate={new Date()} // Disable future dates
//             />
//           )}
//         </View>

//         {/* Save Button */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             {
//               padding: 10,
//               backgroundColor: Colors.VALENTINE_RED,
//             },
//           ]}
//         >
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontFamily: "openSans-extraBold",
//               fontSize: 18,
//             }}
//           >
//             Save
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   profileImgSection: {
//     width: 120,
//     height: 120,
//     marginHorizontal: "auto",
//     marginTop: 70,
//   },
//   profileImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 60,
//     position: "relative",
//   },
//   profileAction: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 20,
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     elevation: 3,
//   },
//   inputFields: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginTop: 60,
//   },
//   btn: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginVertical: 20,
//     borderRadius: 5,
//     height: 50,
//     justifyContent: "center",
//   },
// });

// ----------------------Integrate------------------------

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../../components/Input";
import { API, profileInfo, updateProfile } from "./../services/api"; // Import updateProfile API function

export default function UpdateProfile() {
  const navigation = useNavigation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null); // State to store the user's ID
  const [profilePicture, setProfilePicture] = useState(null); // State to store the user's ID
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [dob, setDob] = useState(""); // Store the date of birth value
  // const [showDatePicker, setShowDatePicker] = useState(false); // State to show or hide date picker

  // Fetch profile info when the component mounts
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Your Profile",
      headerTransparent: true,
    });

    // Fetch profile info using profileInfo API
    const fetchProfile = async () => {
      try {
        const profileData = await profileInfo(); // Fetch profile data
        // setName(profileData.name);
        // console.log("Name => " + name);
        // setPhone(profileData.phone);
        // console.log("Phone => " + phone);
        // setEmail(profileData.email);
        // console.log("Email => " + email);
        // setDob(profileData.dob);
        setUserId(profileData.id);
        setProfilePicture(profileData.profile_picture); // Save user ID for updating the profile
      } catch (error) {
        Alert.alert("Error", "Failed to load profile information.");
      }
    };

    fetchProfile(); // Call the function to fetch profile info
  }, []);

  // Date selection handler
  // const handleDateChange = (event, selectedDate) => {
  //   setShowDatePicker(false); // Hide the date picker after selection
  //   if (selectedDate) {
  //     const formattedDate = selectedDate.toLocaleDateString(); // Format the date as needed
  //     setDob(formattedDate); // Set the selected date to the DOB field
  //   }
  // };

  // Handler to show DatePicker when DOB input is tapped
  // const showDatePickerHandler = () => {
  //   setShowDatePicker(true);
  // };

  // Handle Save button click to update profile
  // const handleSaveProfile = async () => {
  //   if (!userId) {
  //     Alert.alert("Error", "User ID is missing. Cannot update profile.");
  //     return;
  //   }

  //   // Prepare the updated profile data
  //   const updatedProfileData = {
  //     name,
  //     phone,
  //     email,
  //     // dob,
  //   };

  //   try {
  //     await updateProfile(userId, updatedProfileData); // Call the updateProfile API
  //     Alert.alert("Success", "Profile updated successfully.");
  //   } catch (error) {
  //     Alert.alert("Error", "Failed to update profile. Please try again.");
  //   }
  // };

  const handleSaveProfile = async () => {
    setLoading(true);
    if (!userId) {
      Alert.alert("Error", "User ID is missing. Cannot update profile.");
      return;
    }

    const updatedProfileData = {
      name,
      phone,
      email,
    };

    console.log(
      "Sending request to update profile with data: ",
      updatedProfileData
    );

    try {
      const response = await updateProfile(userId, updatedProfileData);
      console.log("API response: ", response); // Log the API response
      Alert.alert("Success", "Profile updated successfully.");
      router.back();
    } catch (error) {
      console.log("API error: ", error.response); // Log the error response
      Alert.alert("Error", "Failed to update profile. Please try again.");
    }
    setLoading(false);
  };

  // After successfully updating the profile:
  // const updatedProfileData = { name: newName }; // Assuming 'newName' is the updated name
  // router.back({ params: updatedProfileData });

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 80,
          backgroundColor: Colors.BGCOLOR,
        }}
      >
        {/* Profile Image Section */}
        <TouchableOpacity style={styles.profileImgSection}>
          <Image
            alt="Profile Image"
            source={{ uri: API + profilePicture }}
            style={styles.profileImg}
          />
          <View style={styles.profileAction}>
            <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
          </View>
        </TouchableOpacity>

        <View style={styles.inputFields}>
          {/* Name, Mobile, and Email Fields */}
          <Input
            placeholder={"Name"}
            value={name} // Pass the current value from state
            onChangeText={setName} // Set the new value in state
          />
          <Input
            placeholder={"Mobile"}
            value={phone} // Pass the current value from state
            onChangeText={setPhone} // Set the new value in state
            containerStyle={{ marginTop: 10 }}
            keyboardType="numeric"
            maxLength={10}
          />
          <Input
            placeholder={"Email"}
            value={email} // Pass the current value from state
            onChangeText={setEmail} // Set the new value in state
            containerStyle={{ marginTop: 10 }}
            keyboardType="email-address"
          />

          {/* Date of Birth Field */}
          {/* <TouchableOpacity onPress={showDatePickerHandler}>
            <Input
              placeholder={"Date of Birth"}
              value={dob}
              containerStyle={{ marginTop: 10 }}
              editable={false}
            />
          </TouchableOpacity> */}

          {/* DatePicker Modal */}
          {/* {showDatePicker && (
            <DateTimePicker
              value={new Date()} // Show selected date or default to today
              mode="date"
              display="default"
              onChange={handleDateChange} // Trigger the handler when the date is selected
              maximumDate={new Date()} // Disable future dates
            />
          )} */}
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              padding: 10,
              backgroundColor: Colors.VALENTINE_RED,
            },
          ]}
          onPress={handleSaveProfile} // Call the function to update profile
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "openSans-extraBold",
              fontSize: 18,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>

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
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  profileImgSection: {
    width: 120,
    height: 120,
    marginHorizontal: "auto",
    marginTop: 70,
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    position: "relative",
  },
  profileAction: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
    position: "absolute",
    right: 0,
    bottom: 0,
    elevation: 3,
  },
  inputFields: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 60,
  },
  btn: {
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
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

// =================================================Done================================

// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation, useRouter } from "expo-router";
// import { Colors } from "../../constants/Colors";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// // import DateTimePicker from "@react-native-community/datetimepicker";
// import Input from "../../components/Input";
// import { API, profileInfo, updateProfile } from "./../services/api"; // Import updateProfile API function

// import * as ImagePicker from "expo-image-picker"; // Import image picker

// export default function UpdateProfile() {
//   const navigation = useNavigation();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [userId, setUserId] = useState(null); // State to store the user's ID
//   const [profile_picture, setProfilePicture] = useState(null); // State to store the user's ID
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   // const [dob, setDob] = useState(""); // Store the date of birth value
//   // const [showDatePicker, setShowDatePicker] = useState(false); // State to show or hide date picker

//   // Fetch profile info when the component mounts
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });

//     // Fetch profile info using profileInfo API
//     const fetchProfile = async () => {
//       try {
//         const profileData = await profileInfo(); // Fetch profile data
//         // setName(profileData.name);
//         // console.log("Name => " + name);
//         // setPhone(profileData.phone);
//         // console.log("Phone => " + phone);
//         // setEmail(profileData.email);
//         // console.log("Email => " + email);
//         // setDob(profileData.dob);
//         setUserId(profileData.id);
//         setProfilePicture(profileData.profile_picture); // Save user ID for updating the profile
//       } catch (error) {
//         Alert.alert("Error", "Failed to load profile information.");
//       }
//     };

//     fetchProfile(); // Call the function to fetch profile info
//   }, []);

//   // Date selection handler
//   // const handleDateChange = (event, selectedDate) => {
//   //   setShowDatePicker(false); // Hide the date picker after selection
//   //   if (selectedDate) {
//   //     const formattedDate = selectedDate.toLocaleDateString(); // Format the date as needed
//   //     setDob(formattedDate); // Set the selected date to the DOB field
//   //   }
//   // };

//   // Handler to show DatePicker when DOB input is tapped
//   // const showDatePickerHandler = () => {
//   //   setShowDatePicker(true);
//   // };

//   // Handle Save button click to update profile
//   // const handleSaveProfile = async () => {
//   //   if (!userId) {
//   //     Alert.alert("Error", "User ID is missing. Cannot update profile.");
//   //     return;
//   //   }

//   //   // Prepare the updated profile data
//   //   const updatedProfileData = {
//   //     name,
//   //     phone,
//   //     email,
//   //     // dob,
//   //   };

//   //   try {
//   //     await updateProfile(userId, updatedProfileData); // Call the updateProfile API
//   //     Alert.alert("Success", "Profile updated successfully.");
//   //   } catch (error) {
//   //     Alert.alert("Error", "Failed to update profile. Please try again.");
//   //   }
//   // };

//   // const handleSaveProfile = async () => {
//   //   setLoading(true);

//   //   if (!userId) {
//   //     Alert.alert("Error", "User ID is missing. Cannot update profile.");
//   //     return;
//   //   }

//   //   let formData = new FormData();
//   //   formData.append("name", name);
//   //   formData.append("phone", phone);
//   //   formData.append("email", email);

//   //   if (profilePicture) {
//   //     formData.append("profile_picture", {
//   //       uri: profilePicture,
//   //       // name: "profile.jpg", // Adjust as per your requirements
//   //       type: "image/jpeg", // Adjust the type based on the selected image
//   //     });
//   //   }

//   //   try {
//   //     const response = await updateProfile(userId, formData);
//   //     Alert.alert("Success", "Profile updated successfully.");
//   //     router.back();
//   //   } catch (error) {
//   //     Alert.alert("Error", "Failed to update profile. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSaveProfile = async () => {
//     setLoading(true);
//     if (!userId) {
//       Alert.alert("Error", "User ID is missing. Cannot update profile.");
//       return;
//     }

//     const updatedProfileData = {
//       name,
//       phone,
//       email,
//       profile_picture,
//     };

//     console.log(
//       "Sending request to update profile with data: ",
//       updatedProfileData
//     );

//     try {
//       const response = await updateProfile(userId, updatedProfileData);
//       console.log("API response: ", response); // Log the API response
//       Alert.alert("Success", "Profile updated successfully.");
//       router.back();
//     } catch (error) {
//       console.log("API error: ", error.response); // Log the error response
//       Alert.alert("Error", "Failed to update profile. Please try again.");
//     }
//     setLoading(false);
//   };

//   // Function to select an image
//   const handleImagePick = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       // Get the file extension
//       const fileExtension = result.assets[0].uri.split(".").pop().toLowerCase();

//       console.log("Pic => " + JSON.stringify(result));
//       console.log("Pic => " + result.assets[0].uri);

//       // // Check if it's a valid image format
//       if (["jpg", "jpeg", "png"].includes(fileExtension)) {
//         setProfilePicture(result.assets[0].uri); // Set profile picture as local image URI
//       } else {
//         Alert.alert(
//           "Invalid Image",
//           "Please select a JPG, JPEG, or PNG image."
//         );
//       }
//     }
//   };

//   // After successfully updating the profile:
//   // const updatedProfileData = { name: newName }; // Assuming 'newName' is the updated name
//   // router.back({ params: updatedProfileData });

//   return (
//     <KeyboardAwareScrollView>
//       <View
//         style={{
//           width: "100%",
//           height: "100%",
//           paddingTop: 80,
//           backgroundColor: Colors.BGCOLOR,
//         }}
//       >
//         {/* // Add this inside your return block, for the TouchableOpacity: */}
//         {/* <TouchableOpacity style={styles.profileImgSection} onPress={pickImage}>
//           <Image
//             alt="Profile Image"
//             source={{
//               uri: profilePicture ? profilePicture : API + profilePicture,
//             }} // If new picture is selected, use it
//             style={styles.profileImg}
//           />
//           <View style={styles.profileAction}>
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </View>
//         </TouchableOpacity> */}
//         <TouchableOpacity
//           style={styles.profileImgSection}
//           onPress={handleImagePick}
//         >
//           <Image
//             alt="Profile Image"
//             source={
//               profile_picture && profile_picture.startsWith("http")
//                 ? { uri: API + profile_picture } // Remote image
//                 : { uri: profile_picture } // Local image
//             }
//             style={styles.profileImg}
//           />
//           <View style={styles.profileAction}>
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </View>
//         </TouchableOpacity>
//         <View style={styles.inputFields}>
//           {/* Name, Mobile, and Email Fields */}
//           <Input
//             placeholder={"Name"}
//             value={name} // Pass the current value from state
//             onChangeText={setName} // Set the new value in state
//           />
//           <Input
//             placeholder={"Mobile"}
//             value={phone} // Pass the current value from state
//             onChangeText={setPhone} // Set the new value in state
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="numeric"
//             maxLength={10}
//           />
//           <Input
//             placeholder={"Email"}
//             value={email} // Pass the current value from state
//             onChangeText={setEmail} // Set the new value in state
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="email-address"
//           />

//           {/* Date of Birth Field */}
//           {/* <TouchableOpacity onPress={showDatePickerHandler}>
//               <Input
//                 placeholder={"Date of Birth"}
//                 value={dob}
//                 containerStyle={{ marginTop: 10 }}
//                 editable={false}
//               />
//             </TouchableOpacity> */}

//           {/* DatePicker Modal */}
//           {/* {showDatePicker && (
//               <DateTimePicker
//                 value={new Date()} // Show selected date or default to today
//                 mode="date"
//                 display="default"
//                 onChange={handleDateChange} // Trigger the handler when the date is selected
//                 maximumDate={new Date()} // Disable future dates
//               />
//             )} */}
//         </View>
//         {/* Save Button */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             {
//               padding: 10,
//               backgroundColor: Colors.VALENTINE_RED,
//             },
//           ]}
//           onPress={handleSaveProfile} // Call the function to update profile
//         >
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontFamily: "openSans-extraBold",
//               fontSize: 18,
//             }}
//           >
//             Save
//           </Text>
//         </TouchableOpacity>
//         {/* Loading Indicator */}
//         {loading && (
//           <View style={styles.loadingOverlay}>
//             <ActivityIndicator
//               size="large"
//               color={Colors.VALENTINE_RED}
//               overlayColor="rgba(0, 0, 0, 0.7)"
//             />
//           </View>
//         )}
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   profileImgSection: {
//     width: 120,
//     height: 120,
//     marginHorizontal: "auto",
//     marginTop: 70,
//   },
//   profileImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 60,
//     position: "relative",
//   },
//   profileAction: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 20,
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     elevation: 3,
//   },
//   inputFields: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginTop: 60,
//   },
//   btn: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginVertical: 20,
//     borderRadius: 5,
//     height: 50,
//     justifyContent: "center",
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
//   Image,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation, useRouter } from "expo-router";
// import { Colors } from "../../constants/Colors";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import Input from "../../components/Input";
// import { API, profileInfo, updateProfile } from "./../services/api";
// import * as ImagePicker from "expo-image-picker"; // Import image picker

// export default function UpdateProfile() {
//   const navigation = useNavigation();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [profile_picture, setProfilePicture] = useState(null);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });

//     const fetchProfile = async () => {
//       try {
//         const profileData = await profileInfo();
//         setUserId(profileData.id);
//         setProfilePicture(profileData.profile_picture);
//       } catch (error) {
//         Alert.alert("Error", "Failed to load profile information.");
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleSaveProfile = async () => {
//     setLoading(true);

//     if (!userId) {
//       Alert.alert("Error", "User ID is missing. Cannot update profile.");
//       return;
//     }

//     // Create FormData for the request
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("phone", phone);
//     formData.append("email", email);

//     // Check if there's a profile picture to upload
//     if (profile_picture && profile_picture.startsWith("file://")) {
//       // Get the filename from the URI
//       const filename = profile_picture.split("/").pop();
//       const type = filename.split(".").pop();

//       formData.append("profile_picture", {
//         uri: profile_picture,
//         name: filename,
//         type: `image/${type}`,
//       });
//     }

//     try {
//       const response = await updateProfile(userId, formData); // Update API call with FormData
//       Alert.alert("Success", "Profile updated successfully.");
//       router.back();
//     } catch (error) {
//       console.log("API error: ", error.response);
//       Alert.alert("Error", "Failed to update profile. Please try again.");
//     }

//     setLoading(false);
//   };

//   // Function to select an image
//   const handleImagePick = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const fileUri = result.assets[0].uri;
//       setProfilePicture(fileUri); // Set profile picture as local image URI
//     }
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <View
//         style={{
//           width: "100%",
//           height: "100%",
//           paddingTop: 80,
//           backgroundColor: Colors.BGCOLOR,
//         }}
//       >
//         <TouchableOpacity
//           style={styles.profileImgSection}
//           onPress={handleImagePick}
//         >
//           <Image
//             alt="Profile Image"
//             source={
//               profile_picture && profile_picture.startsWith("http")
//                 ? { uri: API + profile_picture }
//                 : { uri: profile_picture }
//             }
//             style={styles.profileImg}
//           />
//           <View style={styles.profileAction}>
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </View>
//         </TouchableOpacity>
//         <View style={styles.inputFields}>
//           <Input placeholder={"Name"} value={name} onChangeText={setName} />
//           <Input
//             placeholder={"Mobile"}
//             value={phone}
//             onChangeText={setPhone}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="numeric"
//             maxLength={10}
//           />
//           <Input
//             placeholder={"Email"}
//             value={email}
//             onChangeText={setEmail}
//             containerStyle={{ marginTop: 10 }}
//             keyboardType="email-address"
//           />
//         </View>
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             { padding: 10, backgroundColor: Colors.VALENTINE_RED },
//           ]}
//           onPress={handleSaveProfile}
//         >
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontFamily: "openSans-extraBold",
//               fontSize: 18,
//             }}
//           >
//             Save
//           </Text>
//         </TouchableOpacity>
//         {loading && (
//           <View style={styles.loadingOverlay}>
//             <ActivityIndicator size="large" color={Colors.VALENTINE_RED} />
//           </View>
//         )}
//       </View>
//     </KeyboardAwareScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   profileImgSection: {
//     width: 120,
//     height: 120,
//     marginHorizontal: "auto",
//     marginTop: 70,
//   },
//   profileImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 60,
//     position: "relative",
//   },
//   profileAction: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 20,
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     elevation: 3,
//   },
//   inputFields: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginTop: 60,
//   },
//   btn: {
//     width: "80%",
//     marginHorizontal: "auto",
//     marginVertical: 20,
//     borderRadius: 5,
//     height: 50,
//     justifyContent: "center",
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
