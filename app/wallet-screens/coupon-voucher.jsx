import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

// Importing ColorCode
import { Colors } from "../../constants/Colors";

// Importing Expo Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import icon from "./../../assets/images/googlePay.png";
import { useRouter } from "expo-router";

export default function CouponVoucher() {
  const router = useRouter();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingVertical: 55,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color={Colors.VALENTINE_RED} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "openSans-semiBold",
            marginLeft: 10,
          }}
        >
          Payment coupons for you
        </Text>
      </View>

      {/* Coupon Search Bar */}
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Type coupon code here"
          style={styles.searchTxt}
        />
        <TouchableOpacity
          style={{
            marginLeft: "auto",
          }}
        >
          <Text style={styles.searchTxt}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Voucher Divider */}
      <View
        style={{
          width: "90%",
          marginHorizontal: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={styles.line} />
        <Text style={styles.txt}>BEST OFFERS FOR YOU</Text>
        <View style={styles.line} />
      </View>

      {/* Voucher Card */}
      <View
        style={{
          marginTop: 20,
          paddingTop: 10,
          borderRadius: 10,
          elevation: 3,
          backgroundColor: Colors.BGCOLOR,
        }}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image source={icon} style={{ width: 35, resizeMode: "contain" }} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "openSans-semiBold",
              marginLeft: 10,
            }}
          >
            Get free ₹100 on a topup of ₹1500 using Google Pay
          </Text>
        </View>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "openSans",
            color: Colors.PALATINATE_BLUE,
            paddingHorizontal: 15,
            marginVertical: 5,
          }}
        >
          Save ₹100 with this card
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <Text style={[styles.voucherTxt, { color: "#3E3E3E" }]}>
            GPAYSTORE
          </Text>
          <TouchableOpacity>
            <Text style={[styles.voucherTxt, { color: "#808080" }]}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            elevation: 3,
            paddingVertical: 10,
            backgroundColor: "#F9F8F8",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "openSans-semiBold",
              color: Colors.PALATINATE_BLUE,
              textAlign: "center",
            }}
          >
            TAP TO APPLY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchTxt: {
    fontSize: 16,
    fontFamily: "openSans",
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: Colors.BOULDER,
  },
  txt: {
    marginHorizontal: 15,
    color: Colors.BOULDER,
    fontSize: 12,
    fontFamily: "openSans-bold",
  },
  voucherTxt: {
    fontSize: 12,
    fontFamily: "openSans-semiBold",
  },
});
