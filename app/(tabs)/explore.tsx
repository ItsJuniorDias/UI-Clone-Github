import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
