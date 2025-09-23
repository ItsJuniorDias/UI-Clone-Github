import { BlurView } from 'expo-blur';
import {
  Icon,
  Label,
  NativeTabs,
  Tabs,
} from 'expo-router/unstable-native-tabs';
import React from 'react';

import { Colors } from '@/constants/theme';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <NativeTabs
      backgroundColor="transparent"
      rippleColor="#1789f5"
      indicatorColor={'#1789f5'}
    >
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={'house.fill'} drawable="ic_menu_home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="repositories">
        <Label>Repositories</Label>
        <Icon sf={'gear'} drawable="ic_menu_manage" />
        {/* <Badge>9+</Badge> */}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
