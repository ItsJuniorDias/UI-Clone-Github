import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { Body, Text } from '@/components';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Colors } from '@/constants/theme';

import { useLocalSearchParams } from 'expo-router';

import {
  Container,
  Avatar,
  Row,
  Content,
  RowFooter,
  Link,
  ContentHeader,
} from './styles';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  console.log(id, 'ID');

  return (
    <>
      <Container>
        <ContentHeader>
          <Row>
            <Avatar
              source={{
                uri: 'https://avatars.githubusercontent.com/u/7450663?v=4',
              }}
            />

            <Text
              title="monero-projet"
              fontFamily="regular"
              color={Colors.dark.gray}
              size="sm"
            />
          </Row>

          <Content>
            <Text
              title="monero"
              fontFamily="bold"
              color={Colors.dark.white}
              size="md"
            />

            <Text
              title="Monero: the secure, private, untraceable cryptocurrency"
              fontFamily="regular"
              color={Colors.dark.white}
              size="sm"
            />

            <Link>
              <Entypo name="link" size={20} color={Colors.dark.icon} />

              <Text
                title="getmonero.org"
                fontFamily="semi-bold"
                color={Colors.dark.white}
                size="sm"
              />
            </Link>

            <Row>
              <RowFooter>
                <Feather name="star" size={20} color={Colors.dark.icon} />

                <Text
                  title="9,8k"
                  fontFamily="semi-bold"
                  color={Colors.dark.white}
                  size="sm"
                />

                <Text
                  title="stars"
                  fontFamily="regular"
                  color={Colors.dark.gray}
                  size="sm"
                />
              </RowFooter>

              <RowFooter>
                <Octicons
                  name="repo-forked"
                  size={20}
                  color={Colors.dark.icon}
                />

                <Text
                  title="3,3k"
                  fontFamily="semi-bold"
                  color={Colors.dark.white}
                  size="sm"
                />

                <Text
                  title="forks"
                  fontFamily="regular"
                  color={Colors.dark.gray}
                  size="sm"
                />
              </RowFooter>
            </Row>
          </Content>
        </ContentHeader>

        <Body
          title="Issues"
          color={Colors.dark.issue}
          numberIssue={486}
          icon={() => (
            <Octicons name="issue-opened" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Pull Request"
          color={Colors.dark.pullRequest}
          numberIssue={242}
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
          numberIssue={2}
          icon={() => (
            <Octicons name="play" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Releases"
          color={Colors.dark.releases}
          numberIssue={55}
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
          numberIssue={302}
          icon={() => (
            <Feather name="users" size={20} color={Colors.dark.white} />
          )}
        />

        <Body
          title="Watchers"
          color={Colors.dark.watchers}
          numberIssue={506}
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
      </Container>
    </>
  );
}
