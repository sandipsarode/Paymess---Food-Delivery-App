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
//               fontFamily: "poppins-extraBold",
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
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// // import DateTimePicker from "@react-native-community/datetimepicker";

// // Importing Color Code
// import { Colors } from "../../constants/Colors";

// import Input from "../../components/Input";
// import UpdateProfilePicture from "../../components/UpdateProfilePicture";
// // import CustomInput from "../../components/CustomInput";

// export default function UpdateProfile() {
//   const navigation = useNavigation();

//   // State variables for each field
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   // const [dob, setDob] = useState(""); // Store the date of birth value
//   // const [showDatePicker, setShowDatePicker] = useState(false); // State to show or hide date picker

//   const [isModalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });
//   }, []);

//   const handleUpdateProfileModal = () => {
//     setModalVisible(true);
//   };

//   // Date selection handler
//   // const handleDateChange = (event, selectedDate) => {
//   //   setShowDatePicker(false); // Hide the date picker after selection
//   //   if (selectedDate) {
//   //     const formattedDate = selectedDate.toLocaleDateString(); // Format the date as needed
//   //     setDob(formattedDate); // Set the selected date to the DOB field
//   //   }
//   // };

//   // // Handler to show DatePicker when DOB input is tapped
//   // const showDatePickerHandler = () => {
//   //   setShowDatePicker(true);
//   // };

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
//         <View style={styles.profileImgSection}>
//           <Image
//             alt="Profile Image"
//             source={require("./../../assets/images/profile.jpg")}
//             style={styles.profileImg}
//           />
//           <TouchableOpacity
//             style={styles.profileAction}
//             onPress={() => handleUpdateProfileModal()}
//           >
//             <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
//           </TouchableOpacity>
//         </View>

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
//           {/* <TouchableOpacity onPress={showDatePickerHandler}>
//             <Input
//               placeholder={"Date of Birth"}
//               containerStyle={{ marginTop: 10 }}
//               editable={false}
//               onChangeText={dob}
//             />
//           </TouchableOpacity> */}

//           {/* DatePicker Modal */}
//           {/* {showDatePicker && (
//             <DateTimePicker
//               value={new Date()} // Show selected date or default to today
//               mode="date"
//               display="default"
//               onChange={handleDateChange} // Trigger the handler when the date is selected
//               maximumDate={new Date()} // Disable future dates
//             />
//           )} */}
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
//               fontFamily: "poppins-extraBold",
//               fontSize: 18,
//             }}
//           >
//             Save
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {isModalVisible && (
//         <UpdateProfilePicture
//           modalVisible={isModalVisible}
//           closeModal={() => setModalVisible(false)}
//         />
//       )}
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
// import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../../components/Input";
import { API, profileInfo, updateProfile } from "./../services/api"; // Import updateProfile API function
import UpdateProfilePicture from "../../components/UpdateProfilePicture";

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
  const [isModalVisible, setModalVisible] = useState(false);

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
        {/* <View style={styles.profileImgSection}>
          <Image
            alt="Profile Image"
            source={{ uri: API + profilePicture }}
            style={styles.profileImg}
          />
          <TouchableOpacity
            style={styles.profileAction}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome5 name="edit" size={20} color={Colors.KELLY_GREEN} />
          </TouchableOpacity>
        </View> */}

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
              backgroundColor: Colors.EAGLE_GREEN,
            },
          ]}
          onPress={handleSaveProfile} // Call the function to update profile
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "poppins-extraBold",
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
              color={Colors.EAGLE_GREEN}
              overlayColor="rgba(0, 0, 0, 0.7)"
            />
          </View>
        )}

        {isModalVisible && (
          <UpdateProfilePicture
            modalVisible={isModalVisible}
            closeModal={() => setModalVisible(false)}
            userId={userId}
          />
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
//   TextInput,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation, useLocalSearchParams, useRouter } from "expo-router";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import * as ImagePicker from "expo-image-picker";

// // Importing Color Code
// import { Colors } from "../../constants/Colors";

// // Importing API function
// import { updateProfile } from "./../services/api";

// export default function UpdateProfile() {
//   const navigation = useNavigation();
//   const router = useRouter();
//   const { profileData } = useLocalSearchParams();

//   // State variables for update profile inputs
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [profile_picture, setProfilePicture] = useState(null);
//   const [userId, setUserId] = useState(null);

//   // UseEffect to set the properties of the top navigation bar
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: "Your Profile",
//       headerTransparent: true,
//     });
//     setUserId(profileData);
//   }, []);

//   // useEffect(() => {
//   //   if (profileData) {
//   //     setName(profileData.name);
//   //     setPhone(profileData.phone);
//   //     setEmail(profileData.email);
//   //     setProfilePicture(profileData.profile_picture);
//   //   }
//   // }, [profileData]);

//   // Function to handle image picking
//   // const selectImage = () => {
//   //   const options = {
//   //     mediaType: "photo",
//   //   };

//   //   launchImageLibrary(options, (response) => {
//   //     if (response.didCancel) {
//   //       console.log("User cancelled image picker");
//   //     } else if (response.errorCode) {
//   //       console.log("ImagePicker Error: ", response.errorMessage);
//   //     } else if (response.assets && response.assets.length > 0) {
//   //       const source = { uri: response.assets[0].uri };
//   //       setProfilePicture(source);
//   //     }
//   //   });
//   // };

//   // Function to set the Image Picker visible on click on the edit image icon
//   const selectImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setProfilePicture(result.assets[0].uri);
//     }
//   };

//   // Function to save the updated profile info
//   const handleSave = async () => {
//     if (!userId) {
//       Alert.alert("Error", "User ID is missing. Cannot update profile.");
//       return;
//     }

//     // if (!name || !phone || !email || !profile_picture) {
//     // if (!name || !phone || !email) {
//     //   Alert.alert("Please fill all the fields");
//     //   return;
//     // }

//     const formData = new FormData();
//     // formData.append("name", name);
//     // formData.append("phone", phone);
//     // formData.append("email", email);
//     formData.append("profile_picture", {
//       uri: profile_picture,
//       type: "image/jpeg",
//       name: "profile_picture.jpg",
//     });

//     // const formData = new FormData();
//     // formData.append("name", name);
//     // formData.append("phone", phone);
//     // formData.append("email", email);

//     // // Check if the profile_picture is a valid URI and append the image to FormData
//     // if (profile_picture) {
//     //   const imageName = profile_picture.split("/").pop(); // Extract image name from the URI
//     //   const fileType = imageName.split(".").pop(); // Get the file extension (e.g., jpg, png)

//     //   formData.append("profile_picture", {
//     //     uri: profile_picture,
//     //     name: imageName,
//     //     type: `image/${fileType}`, // Set the correct MIME type based on the file extension
//     //   });
//     // }
//     console.log("userId => " + userId);
//     console.log("formData => " + JSON.stringify(formData));

//     // try {
//     //   console.log("1");

//     //   await updateProfile(userId, formData);
//     //   console.log("2");
//     //   Alert.alert("Success", "Profile updated successfully.");
//     //   router.back();
//     // } catch (error) {
//     //   console.log("2");
//     //   console.error(error);
//     //   Alert.alert("An error occurred while updating profile");
//     // }
//     try {
//       const response = await updateProfile(userId, formData); // Ensure the updateProfile function handles FormData
//       if (response.ok) {
//         Alert.alert("Success", "Profile updated successfully.");
//         router.back();
//       } else {
//         const errorData = await response.json();
//         console.error("Backend error:", errorData);
//         Alert.alert(
//           "Error updating profile",
//           errorData.message || "An unknown error occurred"
//         );
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("An error occurred while updating profile.");
//     }
//   };

//   // const handleSave = async () => {
//   //   if (!userId) {
//   //     Alert.alert("Error", "User ID is missing. Cannot update profile.");
//   //     return;
//   //   }

//   //   // Ensure that at least the required fields are present
//   //   // if (!name || !phone || !email) {
//   //   //   Alert.alert("Please fill all the required fields.");
//   //   //   return;
//   //   // }

//   //   const formData = new FormData();

//   //   // Append non-file fields (name, phone, email)
//   //   // formData.append("name", name);
//   //   // formData.append("phone", phone);
//   //   // formData.append("email", email);

//   //   // Append the profile picture if it exists
//   //   if (profile_picture) {
//   //     const imageName = profile_picture.split("/").pop(); // Extract image name from the URI
//   //     const fileType = imageName.split(".").pop(); // Get the file extension (e.g., jpg, png)

//   //     formData.append("profile_picture", {
//   //       uri: profile_picture,
//   //       name: imageName,
//   //       type: `image/${fileType}`, // Set the correct MIME type based on the file extension
//   //     });
//   //   }

//   //   console.log("FormData to be sent:", formData);

//   //   try {
//   //     const response = await updateProfile(userId, formData); // Call the API to update the profile
//   //     if (response.ok) {
//   //       Alert.alert("Success", "Profile updated successfully.");
//   //       router.back();
//   //     } else {
//   //       const errorData = await response.json();
//   //       console.error("Backend error:", errorData);
//   //       Alert.alert(
//   //         "Error updating profile",
//   //         errorData.message || "An unknown error occurred"
//   //       );
//   //     }
//   //   } catch (error) {
//   //     console.error("An error occurred while updating profile:", error);
//   //     Alert.alert("An error occurred while updating profile.");
//   //   }
//   // };

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
//         {/* Profile Image Edit Section */}
//         <TouchableOpacity onPress={selectImage} style={{ marginVertical: 10 }}>
//           <Text>Select Profile Image</Text>
//         </TouchableOpacity>
//         {profile_picture && (
//           <Image
//             source={{ uri: profile_picture }}
//             style={{ width: 100, height: 100, marginVertical: 10 }}
//           />
//         )}

//         {/* Input fields to update profile info */}
//         <View style={styles.inputFields}>
//           <TextInput
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//             style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
//           />
//           <TextInput
//             placeholder="Mobile"
//             value={phone}
//             onChangeText={setPhone}
//             maxLength={10}
//             keyboardType="numeric"
//             style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
//           />
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
//           />
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
//           onPress={handleSave}
//         >
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontFamily: "poppins-extraBold",
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
