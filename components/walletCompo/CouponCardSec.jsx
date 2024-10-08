import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";

// Importing the Components
import Coupon from "./Coupon";
import { useRouter } from "expo-router";

export default function CouponCardSec() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  const handleApply = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);

  return (
    <View>
      {/* Coupon Section */}
      <View style={styles.container}>
        {/* Coupon Header */}
        <View style={styles.alignment}>
          <MaterialCommunityIcons
            name="tag-plus"
            size={25}
            color={Colors.EAGLE_GREEN}
          />
          <Text style={styles.contentHead}>Coupons</Text>
        </View>

        {/* Saperator */}
        <View style={styles.lineDvd} />

        {/* Current Coupon */}
        <View style={styles.alignment}>
          {/* Coupon discount Icon */}
          <MaterialCommunityIcons
            name="sale"
            size={26}
            color={Colors.PALATINATE_BLUE}
          />
          {/* Coupon details with coupon code */}
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "poppins",
              }}
            >
              Add ₹2000 to get ₹50 extra with
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "poppins-bold",
              }}
            >
              HUNGRY50
            </Text>
          </View>

          {/* Apply Button */}
          <TouchableOpacity
            onPress={handleApply}
            style={{
              height: 26,
              marginLeft: "auto",
              backgroundColor: Colors.EAGLE_GREEN,
              paddingTop: 5,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#fff",
                fontFamily: "poppins-semiBold",
              }}
            >
              APPLY
            </Text>
          </TouchableOpacity>
          <Coupon visible={modalVisible} onClose={handleClose} />
        </View>

        {/* View all Coupons Button */}
        <TouchableOpacity
          onPress={() => router.push("/wallet-screens/coupon-voucher")}
          style={[
            styles.alignment,
            styles.btn,
            {
              backgroundColor: "#fff",
            },
          ]}
        >
          <Ionicons name="card" size={25} color={Colors.EAGLE_GREEN} />
          <Text style={styles.contentHead}>View all Voucher Coupons</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.BGCOLOR,
    borderRadius: 10,
    elevation: 5,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.3,
  },
  alignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentHead: {
    fontSize: 16,
    fontFamily: "poppins-semiBold",
    marginLeft: 10,
  },
  lineDvd: {
    width: "90%",
    margin: "auto",
    marginVertical: 11,
    borderStyle: "dashed",
    borderTopWidth: 1,
    borderTopColor: Colors.BOULDER,
  },
  btn: {
    width: "100%",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 5,
  },
});
