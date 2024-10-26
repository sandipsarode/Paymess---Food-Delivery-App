import React from "react";
import { Tabs } from "expo-router";

// Importing Color Code
import { Colors } from "./../../constants/Colors";

// Importing Icons from Expo-icons
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    // Rendering different tabs of the App
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.EAGLE_GREEN,

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
          fontFamily: "poppins-bold",
          fontSize: 12,
          marginLeft: -35,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={30} color={color} />
          ),
        }}
      />

      {/* Menu Tab */}
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
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
