import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function RepoLayout() {
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
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerBackTitle: '',
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: '',
          headerBackTitle: 'Back',
          headerShown: true,
          headerBackVisible: true,
          headerTintColor: 'white',
          headerBackground: () => <View style={styles.container} />,
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
