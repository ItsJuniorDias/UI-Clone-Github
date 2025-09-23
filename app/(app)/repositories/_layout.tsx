import { Colors } from '@/constants/theme';
import {
  EvilIcons,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SFSymbol } from 'react-native-sfsymbols';

export default function RepoLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        animation: 'ios_from_right',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Repositories',
          headerLargeTitle: false,
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: '', // header vazio
          headerTintColor: 'white',
          headerBackground: () => <View style={styles.container} />,
          headerLeft: ({ tintColor, canGoBack, pressColor }) =>
            canGoBack ? (
              <TouchableOpacity
                style={{ paddingHorizontal: 12 }}
                onPress={() => router.back()}
              >
                <FontAwesome6 name="chevron-left" size={22} color="white" />
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="issues"
        options={{
          title: 'Issues',
          headerShown: true,
          headerTintColor: 'white',
          headerBackTitle: '',
          headerBackVisible: true,
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
