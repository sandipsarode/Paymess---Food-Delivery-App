import React from "react";
import { Tabs } from "expo-router";

// Importing Icons from Expo-icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

export default function TabLayout() {
  return (
    // Rendering different tabs of the App
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.REDDISH_ORANGE,

        tabBarStyle: {
          height: 60,
          paddingRight: 45,
        },
        tabBarItemStyle: {
          flexDirection: "row",
        },
        tabBarIconStyle: {
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontFamily: "openSans-bold",
          fontSize: 12,
          marginLeft: -35,
        },
      }}
    >
      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={30} color={color} />
          ),
        }}
      />

      {/* History Tab */}
      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text-clock"
              size={30}
              color={color}
            />
          ),
        }}
      />

      {/* Wallet Tab */}
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
