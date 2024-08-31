import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

// Importing the Coupon Component
import Coupon from "../../components/wallet/Coupon";

export default function Wallet() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  const handleApply = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);

  const AddAmount = ({ amount }) => (
    <View style={styles.addAmount}>
      <Text style={styles.amountText}>{amount}</Text>
    </View>
  );

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      {/* Header Content */}
      <LinearGradient
        colors={[Colors.GOLDEN_FIZZ, Colors.SUPERNOVA]}
        style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      >
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: 40,
            paddingBottom: 15,
          }}
        >
          <View style={styles.alignment}>
            <Ionicons
              name="location-sharp"
              size={35}
              color={Colors.VALENTINE_RED}
            />
            <View>
              <Text
                style={{
                  fontSize: 21,
                  fontFamily: "openSans-semiBold",
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "openSans",
                }}
              >
                Hanuman Nagar, Sharda Colony, Gondia
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/profile/profile")}
              style={{ marginLeft: "auto" }}
            >
              <Ionicons
                name="person-circle-outline"
                size={35}
                color={Colors.VALENTINE_RED}
              />
            </TouchableOpacity>
          </View>

          {/* Header Title */}
          <Text
            style={{
              fontSize: 22,
              fontFamily: "openSans-extraBold",
              color: Colors.VALENTINE_RED,
              letterSpacing: 5,
              textAlign: "center",
              marginTop: 25,
            }}
          >
            WALLET
          </Text>
        </View>
      </LinearGradient>

      {/* Coupon Section */}
      <View style={styles.container}>
        {/* Coupon Header */}
        <View style={styles.alignment}>
          <MaterialCommunityIcons
            name="tag-plus"
            size={25}
            color={Colors.VALENTINE_RED}
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
                fontFamily: "openSans",
              }}
            >
              Add ₹2000 to get ₹50 extra with
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "openSans-bold",
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
              backgroundColor: Colors.VALENTINE_RED,
              paddingTop: 5,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#fff",
                fontFamily: "openSans-semiBold",
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
          <Ionicons name="card" size={25} color={Colors.VALENTINE_RED} />
          <Text style={styles.contentHead}>View all Voucher Coupons</Text>
        </TouchableOpacity>
      </View>

      {/* Available Balance Section */}
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.alignment}>
          <MaterialCommunityIcons
            name="wallet"
            size={25}
            color={Colors.VALENTINE_RED}
          />
          <Text style={styles.contentHead}>Available Balance</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "openSans-semiBold",
              marginLeft: "auto",
            }}
          >
            ₹ 5000
          </Text>
        </View>

        {/* Money Input Box */}
        <TextInput
          placeholder="₹ Enter Amount"
          style={{
            fontSize: 20,
            fontFamily: "openSans",
            padding: 10,
            paddingVertical: 12,
            backgroundColor: "#fff",
            elevation: 5,
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        {/* Add specified Money */}
        <View
          style={[
            styles.alignment,
            { justifyContent: "space-evenly", marginTop: 14 },
          ]}
        >
          {["+ 100", "+ 200", "+ 500", "+ 1000"].map((amount, index) => (
            <TouchableOpacity>
              <AddAmount key={index} amount={amount} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Money Button */}
        <TouchableOpacity
          style={[
            styles.alignment,
            styles.btn,
            {
              backgroundColor: Colors.SEA,
            },
          ]}
        >
          <Text style={[styles.contentHead, { color: "#fff" }]}>Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction Divider */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          margin: "auto",
          marginTop: 20,
        }}
      >
        <View style={styles.line} />
        <Text style={styles.txt}>Transaction</Text>
        <View style={styles.line} />
      </View>

      {/* Card according to transaction */}
      <View
        style={[
          styles.container,
          { paddingHorizontal: 0, paddingVertical: 20, marginBottom: 80 },
        ]}
      >
        {/* Paid Transaction */}
        <View>
          <Text
            style={{
              fontFamily: "openSans",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            June 12, 2024
          </Text>

          {/* Paid Transaction Block */}
          <TouchableOpacity
            onPress={() => router.push("/wallet-screens/paid-amount")}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 15,
              alignItems: "center",
            }}
          >
            {/* Logo of Paid Transaction */}
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.BGCOLOR,
                borderRadius: 50,
                elevation: 5,
              }}
            >
              <Fontisto name="wallet" size={25} color={Colors.VALENTINE_RED} />
            </View>

            {/* Description of Paid Transaction */}
            <View
              style={{
                marginLeft: 15,
              }}
            >
              <Text style={styles.transTxt}>Paid</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "openSans-light",
                }}
              >
                19.07
              </Text>
            </View>

            {/* Amount Detail of Paid transaction */}
            <View
              style={{
                marginLeft: "auto",
                alignItems: "flex-end",
              }}
            >
              <Text style={[styles.transTxt, { color: Colors.VALENTINE_RED }]}>
                - ₹ 300
              </Text>
              <Text
                style={{
                  fontSize: 10.5,
                  fontFamily: "openSans-light",
                }}
              >
                Closing Balance: ₹227
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Top Up */}
        <View>
          <Text
            style={{
              fontFamily: "openSans",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            June 02, 2024
          </Text>

          {/* TopUp Transaction Block */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 15,
              alignItems: "center",
            }}
          >
            {/* Logo of TopUp Transaction */}
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.BGCOLOR,
                borderRadius: 50,
                elevation: 5,
              }}
            >
              <MaterialCommunityIcons
                name="credit-card-plus"
                size={28}
                color={Colors.KELLY_GREEN}
              />
            </View>

            {/* Description of TopUp Transaction */}
            <View
              style={{
                marginLeft: 15,
              }}
            >
              <Text style={styles.transTxt}>Top Up</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "openSans-light",
                }}
              >
                09.57
              </Text>
            </View>

            {/* Amount Detail of TopUp transaction */}
            <View
              style={{
                marginLeft: "auto",
                alignItems: "flex-end",
              }}
            >
              <Text style={[styles.transTxt, { color: Colors.KELLY_GREEN }]}>
                + ₹ 300
              </Text>
              <Text
                style={{
                  fontSize: 10.5,
                  fontFamily: "openSans-light",
                }}
              >
                Closing Balance: ₹527
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// StyleSheet
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
    fontFamily: "openSans-semiBold",
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
  addAmount: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 2,
    width: "auto",
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: Colors.BOULDER,
  },
  txt: {
    margin: 5,
    color: Colors.BOULDER,
    fontSize: 12,
    fontFamily: "openSans-bold",
  },
  transTxt: {
    fontSize: 18,
    fontFamily: "openSans-semiBold",
  },
  amountText: {
    fontSize: 16,
    fontFamily: "openSans-light",
  },
});
