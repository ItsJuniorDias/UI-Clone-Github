import { Body, Text } from '@/components';
import BodyIssue from '@/components/body-issue/body-issue';
import { scale } from '@/constants/scale';
import { Colors } from '@/constants/theme';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { Image } from 'expo-image';
import { View, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text
          title="My Work"
          color={Colors.dark.white}
          size="lg"
          fontFamily="semi-bold"
        />
      </View>

      <View>
        <Body
          title="Issues"
          color={Colors.dark.issue}
          numberIssue={null}
          onPress={() => {}}
          icon={() => (
            <Octicons name="issue-opened" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Pull Request"
          color={Colors.dark.pullRequest}
          numberIssue={null}
          icon={() => (
            <Octicons
              name="git-pull-request"
              size={20}
              color={Colors.dark.white}
            />
          )}
        />

        <Body
          title="Actions"
          color={Colors.dark.actions}
          numberIssue={null}
          icon={() => (
            <Octicons name="play" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Releases"
          color={Colors.dark.releases}
          numberIssue={null}
          icon={() => (
            <MaterialCommunityIcons
              name="tag-outline"
              size={20}
              color={Colors.dark.white}
            />
          )}
        />

        <Body
          title="Contributors"
          color={Colors.dark.contributors}
          numberIssue={null}
          icon={() => (
            <Feather name="users" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Watchers"
          color={Colors.dark.watchers}
          numberIssue={null}
          icon={() => (
            <Feather name="eye" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="License"
          color={Colors.dark.license}
          icon={() => (
            <Octicons name="law" size={20} color={Colors.dark.white} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    paddingLeft: 24,
    paddingBottom: 16,
    marginTop: 24,
  },
});
