import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

// Importing Icons from Expo-icons
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing Color Code
import { Colors } from "../../constants/Colors";

// Importing Icons from LocalStorage
import icon from "./../../assets/images/week-1.png";

export default function History() {
  const router = useRouter();

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
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

      {/* Search Bar Section */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.VALENTINE_RED} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      {/* History Divider */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          margin: "auto",
          // marginTop: 20,
        }}
      >
        <View style={styles.line} />
        <Text style={styles.txt}>History</Text>
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
          marginVertical: 25,
          marginHorizontal: 25,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          {/* Food Image */}
          <View
            style={{
              width: "25%",
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icon}
              style={{
                borderRadius: 50,
                width: "80%",
                height: "80%",
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={{ width: "75%" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  width: "80%",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    // width: "86%",
                    fontSize: 15,
                    fontFamily: "openSans-semiBold",
                    textAlign: "justify",
                  }}
                >
                  North Indian Standard (Veg)
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "openSans-semiBold",
                    color: Colors.BOULDER,
                  }}
                >
                  Gondia
                </Text>
              </View>
              <View style={{ marginLeft: "auto" }}>
                <MaterialCommunityIcons
                  name="square-circle"
                  size={28}
                  color={Colors.KELLY_GREEN}
                />
              </View>
            </View>

            {/* Veg/Non-Veg Selector */}
            <View style={styles.foodTypeContainer}>
              <TouchableOpacity style={styles.foodTypeButton}>
                <Text style={styles.btnText}>Delivered</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.foodTypeButton,
                  { display: "flex", flexDirection: "row" },
                ]}
              >
                <Ionicons name="reload" size={22} color="white" />
                <Text style={[styles.btnText, { marginLeft: 5 }]}>Reorder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Voucher Apply button */}
        <View
          style={{
            elevation: 3,
            paddingVertical: 6,
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
              color: Colors.BOULDER,
              textAlign: "center",
            }}
          >
            23 Sep 2023 at 8:26PM
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  alignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 15,
  },
  searchContainer: {
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    marginLeft: 10,
    fontFamily: "openSans",
    fontSize: 16,
    flex: 1,
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
  voucherTxt: {
    fontSize: 12,
    fontFamily: "openSans-semiBold",
  },
  foodTypeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  foodTypeButton: {
    flex: 1,
    alignItems: "center",
    padding: 3,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: Colors.VALENTINE_RED,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "openSans-bold",
  },
});
