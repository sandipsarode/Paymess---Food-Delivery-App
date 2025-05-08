// import React, { useEffect, useState } from "react";
// import { View, Text, Alert, TouchableOpacity } from "react-native";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import { showAddress } from "./../services/api";
// import { Colors } from "../../constants/Colors";
// import Divider from "./../../components/commonComponents/Divider";
// import Ionicons from "@expo/vector-icons/Ionicons";

// export default function AddressBook() {
//   const navigation = useNavigation();
//   const { user_id } = useLocalSearchParams();
//   const [userAddress, setUserAddress] = useState([]);

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: "Address Book",
//       headerStyle: { backgroundColor: "transparent" },
//       headerTintColor: Colors.EAGLE_GREEN,
//     });

//     const fetchUserAddresses = async () => {
//       try {
//         const response = await showAddress(user_id);
//         console.log(response);

//         setUserAddress(response);
//       } catch (error) {
//         Alert.alert("Error", "Failed to fetch addresses. Please try again.");
//       }
//     };

//     fetchUserAddresses();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {userAddress.length < 2 && (
//         <TouchableOpacity style={styles.addButton}>
//           <Text style={styles.addButtonText}>+ Add Address</Text>
//           <MaterialIcons
//             name="arrow-forward-ios"
//             size={20}
//             color={Colors.EAGLE_GREEN}
//           />
//         </TouchableOpacity>
//       )}

//       <Divider
//         name="Saved Addresses"
//         color={Colors.BOULDER}
//         fontSize={12}
//         fontFamily="poppins-bold"
//       />

//       {userAddress.map((item, index) => (
//         <View key={index} style={styles.addressCard}>
//           <MaterialIcons name="home" size={20} color="black" />
//           <MaterialIcons name="work-outline" size={20} color="black" />
//           <View>
//             <Text style={styles.txt}>{item.address}</Text>
//             <Text style={styles.txt}>{item.zip_code}</Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = {
//   container: {
//     paddingTop: 90,
//     paddingHorizontal: 20,
//   },
//   addButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderRadius: 15,
//     borderColor: Colors.EAGLE_GREEN,
//     marginBottom: 10,
//   },
//   addButtonText: {
//     fontFamily: "poppins-semiBold",
//     fontSize: 18,
//     color: Colors.EAGLE_GREEN,
//   },
//   addressCard: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 10,
//     backgroundColor: Colors.BGCOLOR,
//     elevation: 5,
//     marginTop: 10,
//     borderRadius: 15,
//     padding: 15,
//   },
//   txt: {
//     fontFamily: "poppins",
//     fontSize: 14,
//   },
// };

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { showAddress } from "./../services/api";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";

export default function AddressBook() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();
  const { user_id } = useLocalSearchParams();
  const [userAddress, setUserAddress] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Address Book",
      headerStyle: { backgroundColor: "transparent" },
      headerTintColor: Colors.EAGLE_GREEN,
    });

    const fetchUserAddresses = async () => {
      setLoading(true);
      try {
        const response = await showAddress(user_id);

        // Set both userAddress with the correct address type
        const addresses = response.map((item) => {
          const type = item.address.startsWith("Home") ? "Home" : "Work";
          return { ...item, type };
        });

        setUserAddress(addresses); // Set userAddress here
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert("Error", "Failed to fetch addresses. Please try again.");
      }
    };

    if (isFocused) {
      fetchUserAddresses();
    }
  }, [isFocused]);

  const handleAddAddress = (type) => {
    // Pass the selected `type` directly to the params
    router.push({
      pathname: "/profile/addAddress",
      params: { user_id, allowedTypes: type }, // directly pass `type` here
    });
  };

  return (
    <View style={styles.container}>
      {/* Home Address */}
      {userAddress.some((address) => address.type === "Home") ? (
        <View style={styles.addressCard}>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Ionicons name="home" size={20} color="black" />
            <View>
              <Text style={[styles.txt, { fontWeight: 900 }]}>
                {
                  userAddress
                    .find((address) => address.type === "Home")
                    .address.split("- ")[0]
                }
              </Text>
              <Text style={styles.txt}>
                {
                  userAddress
                    .find((address) => address.type === "Home")
                    .address.split("- ")[1]
                }
              </Text>
              <Text style={styles.txt}>
                {
                  userAddress.find((address) => address.type === "Home")
                    .zip_code
                }
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <FontAwesome5 name="edit" size={15} color={Colors.VALENTINE_RED} />
            <Text style={styles.editTxt}>Edit Address</Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddAddress("Home")}
        >
          <Text style={styles.addButtonText}>+ Add Home Address</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            color={Colors.EAGLE_GREEN}
          />
        </TouchableOpacity>
      )}

      {/* Work Address */}
      {userAddress.some((address) => address.type === "Work") ? (
        <View style={styles.addressCard}>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="work-outline" size={20} color="black" />
            <View>
              <Text style={[styles.txt, { fontWeight: 900 }]}>
                {
                  userAddress
                    .find((address) => address.type === "Work")
                    .address.split("- ")[0]
                }
              </Text>
              <Text style={styles.txt}>
                {
                  userAddress
                    .find((address) => address.type === "Work")
                    .address.split("- ")[1]
                }
              </Text>
              <Text style={styles.txt}>
                {
                  userAddress.find((address) => address.type === "Work")
                    .zip_code
                }
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <FontAwesome5 name="edit" size={15} color={Colors.VALENTINE_RED} />
            <Text style={styles.editTxt}>Edit Address</Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddAddress("Work")}
        >
          <Text style={styles.addButtonText}>+ Add Work Address</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            color={Colors.EAGLE_GREEN}
          />
        </TouchableOpacity>
      )}

      {/* {userAddress.map((item, index) => (
        <View key={index} style={styles.addressCard}>
          {item.type === "Home" ? (
            <Ionicons name="home" size={20} color="black" />
          ) : (
            <MaterialIcons name="work-outline" size={20} color="black" />
          )}
          <View>
            <Text style={styles.txt}>{item.address}</Text>
            <Text style={styles.txt}>{item.zip_code}</Text>
          </View>
        </View>
      ))}

      <View style={styles.addressCard}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Ionicons name="home" size={20} color="black" />
          <View>
            <Text style={[styles.txt, { fontWeight: 900 }]}>Home</Text>
            <Text style={styles.txt}>
              Hanwate Complex, Kudwa, Oppo. of HDFC Bank
            </Text>
            <Text style={styles.txt}>441614</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          <FontAwesome5 name="edit" size={15} color={Colors.VALENTINE_RED} />
          <Text style={styles.editTxt}>Edit Address</Text>
        </View>
      </View> */}

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.EAGLE_GREEN,
    marginVertical: 10,
  },
  addButtonText: {
    fontFamily: "poppins-semiBold",
    fontSize: 18,
    color: Colors.EAGLE_GREEN,
  },
  addressCard: {
    backgroundColor: Colors.BGCOLOR,
    elevation: 5,
    marginTop: 10,
    borderRadius: 15,
    padding: 15,
  },
  txt: {
    fontFamily: "poppins",
    fontSize: 14,
  },
  editTxt: {
    fontFamily: "poppins",
    fontSize: 12,
    color: Colors.VALENTINE_RED,
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
