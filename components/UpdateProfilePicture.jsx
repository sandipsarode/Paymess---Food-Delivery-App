// import React, { useState } from "react";
// import {
//   Modal,
//   Text,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { updateProfile } from "./../app/services/api"; // Import updateProfile API function
// import * as ImagePicker from "expo-image-picker";

// // Importing Color Code
// import { Colors } from "./../constants/Colors";

// // Importing Icons from the Expo-Icon
// import Entypo from "@expo/vector-icons/Entypo";

// export default function UpdateProfilePicture({
//   modalVisible,
//   closeModal,
//   userId,
// }) {
//   // State variables for update profile inputs
//   const [profile_picture, setProfilePicture] = useState(null);

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

//     handleSave();
//   };

//   // Function to save the updated profile info
//   const handleSave = async () => {
//     if (!userId) {
//       Alert.alert("Error", "User ID is missing. Cannot update profile.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("profile_picture", {
//       uri: profile_picture,
//       type: "image/jpeg",
//       name: "profile_picture.jpg",
//     });

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

//   return (
//     <Modal visible={modalVisible} animationType="slide" transparent={true}>
//       {/* Set the properties for Status Bar */}
//       <StatusBar
//         backgroundColor={Colors.BGCOLORMENUBOTTOM}
//         barStyle="dark-content"
//         hidden={false}
//         translucent={true}
//       />

//       <View style={styles.modalBg}>
//         <View style={styles.modalContainer}>
//           {/* Profile heading Bar and Cross button */}
//           <View style={styles.profileBar}>
//             <Text
//               style={{
//                 width: "80%",
//                 textAlign: "center",
//                 fontFamily: "poppins-bold",
//                 fontSize: 18,
//               }}
//             >
//               Profile Photo
//             </Text>
//             {/* Cross button */}
//             <TouchableOpacity onPress={closeModal}>
//               <Entypo name="cross" size={24} color="black" />
//             </TouchableOpacity>
//           </View>

//           {/* Profile Secion */}
//           <View style={styles.divider} />
//           <View style={{ padding: 20 }}>
//             <Text style={styles.txt}>
//               This is the photo you whould like others to see.
//             </Text>
//             {/* Update Profile Button */}
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "#000",
//                 padding: 10,
//                 borderRadius: 10,
//                 marginVertical: 10,
//               }}
//               onPress={selectImage}
//             >
//               <Text
//                 style={[styles.txt, { color: "#fff", textAlign: "center" }]}
//               >
//                 Update Profile
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ padding: 10 }} onPress={closeModal}>
//               <Text style={[styles.txt, { textAlign: "center" }]}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   modalBg: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "flex-end",
//   },
//   modalContainer: {
//     width: "100%",
//     paddingVertical: 25,
//     backgroundColor: "#fff",
//     borderRadius: 25,
//   },
//   profileBar: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   divider: {
//     width: "100%",
//     height: 1,
//     backgroundColor: Colors.EAGLE_GREEN,
//     marginVertical: 10,
//   },
//   txt: {
//     fontFamily: "poppins-semiBold",
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { updateProfilePicture } from "./../app/services/api";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "./../constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";

export default function UpdateProfilePicture({
  modalVisible,
  closeModal,
  userId,
}) {
  const [profile_picture, setProfilePicture] = useState(null);

  // Function to open image picker
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  // Function to save profile
  const handleSave = async () => {
    if (!userId || !profile_picture) {
      Alert.alert("Error", "User ID or profile picture is missing.");
      return;
    }

    console.log("profile_picture => " + profile_picture);

    // const formData = new FormData();
    // formData.append("profile_picture", {
    //   uri: profile_picture,
    //   type: "image/jpeg",
    //   name: "profile_picture.jpg",
    // });

    // if (profile_picture) {
    //   const imageName = profile_picture.split("/").pop(); // Extract image name from the URI
    //   const fileType = imageName.split(".").pop(); // Get the file extension (e.g., jpg, png)

    //   formData.append("profile_picture", {
    //     uri: profile_picture,
    //     name: imageName,
    //     type: `image/${fileType}`, // Set the correct MIME type based on the file extension
    //   });
    // }

    const formData = new FormData();
    formData.append("profile_picture", profile_picture);

    console.log("formData => " + JSON.stringify(formData));
    try {
      const response = await updateProfilePicture(userId, formData);

      console.log("response => " + JSON.stringify(response));
      Alert.alert("Success", "Profile updated successfully.");

      // Check if response status is OK
      if (response.status === 200) {
        closeModal(); // Close modal upon success
      } else {
        Alert.alert("Error", "Failed to update profile.");
      }
    } catch (error) {
      Alert.alert("An error occurred while updating profile:", error.message);
    }
  };

  // Function to remove profile picture
  const removeProfilePicture = () => {
    setProfilePicture(null);
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <StatusBar
        backgroundColor={Colors.BGCOLORMENUBOTTOM}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />

      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <View style={styles.profileBar}>
            <Text style={styles.heading}>Profile Photo</Text>
            <TouchableOpacity onPress={closeModal}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.content}>
            <Text style={styles.txt}>
              This is the photo you would like others to see.
            </Text>

            {/* Profile Image Preview */}
            <TouchableOpacity onPress={selectImage} style={styles.imageWrapper}>
              {profile_picture ? (
                <Image source={{ uri: profile_picture }} style={styles.image} />
              ) : (
                <Text style={styles.placeholderText}>Tap to add a photo</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            {profile_picture && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={removeProfilePicture}
              >
                <Text style={styles.removeButtonText}>Remove Photo</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    width: "100%",
    paddingVertical: 25,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  profileBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.EAGLE_GREEN,
    marginVertical: 10,
  },
  content: {
    padding: 20,
  },
  txt: {
    fontFamily: "poppins-semiBold",
    fontSize: 16,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    marginVertical: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  placeholderText: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "poppins-semiBold",
  },
  removeButton: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,

    borderRadius: 10,
  },
  removeButtonText: {
    color: "red",
    textAlign: "center",
    fontFamily: "poppins-semiBold",
  },
  cancelText: {
    padding: 10,
    textAlign: "center",
    color: Colors.EAGLE_GREEN,
    fontFamily: "poppins-semiBold",
  },
});
