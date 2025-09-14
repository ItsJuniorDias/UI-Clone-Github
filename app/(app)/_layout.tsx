import { Tabs, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { BlurView } from 'expo-blur';

import { Colors } from '@/constants/theme';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          flex: 1,
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={80}
            style={{ flex: 1, backgroundColor: 'transparent' }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerBackground: () => <View style={styles.container} />,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="repositories"
        options={{
          title: 'Repositories',
          headerShown: false,
          headerTitle: 'Repositories',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerBackground: () => <View style={styles.container} />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
