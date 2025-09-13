import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
        tabBarBackground: () => (
          <View
            style={{ flex: 1, backgroundColor: Colors.light.tabBarBackground }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.light.background,
              }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: true,
          headerTitle: "Explore",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.light.background,
              }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
