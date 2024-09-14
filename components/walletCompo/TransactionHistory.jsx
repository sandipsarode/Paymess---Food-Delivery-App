import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

// Importing Color Code
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

// Importing Icons from Expo-icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function TransactionHistory() {
  const router = useRouter();

  return (
    <View>
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
  );
}

// StyleSheet
const styles = StyleSheet.create({
  transTxt: {
    fontSize: 18,
    fontFamily: "openSans-semiBold",
  },
});
