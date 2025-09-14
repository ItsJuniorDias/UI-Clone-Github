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

import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native';

export default function DetailsScreen() {
  const { full_name } = useLocalSearchParams();

  console.log(full_name);

  const fetch = async () => {
    const response = await api.get(`/repos/${full_name}`);

    return response.data;
  };

  const { data, isLoading } = useQuery({ queryKey: ['repos'], queryFn: fetch });

  return (
    <>
      <Container>
        {isLoading && (
          <ActivityIndicator size="large" color={Colors.dark.white} />
        )}

        {!isLoading && (
          <>
            <ContentHeader>
              <Row>
                <Avatar
                  source={{
                    uri: data?.owner?.avatar_url,
                  }}
                />

                <Text
                  title={data?.full_name}
                  fontFamily="regular"
                  color={Colors.dark.gray}
                  size="sm"
                />
              </Row>

              <Content>
                <Text
                  title={data?.name}
                  fontFamily="bold"
                  color={Colors.dark.white}
                  size="md"
                />

                <Text
                  title={data?.description}
                  fontFamily="regular"
                  color={Colors.dark.white}
                  size="sm"
                />

                <Link>
                  <Entypo name="link" size={20} color={Colors.dark.icon} />

                  <Text
                    title={data?.homepage}
                    fontFamily="semi-bold"
                    color={Colors.dark.white}
                    size="sm"
                  />
                </Link>

                <Row>
                  <RowFooter>
                    <Feather name="star" size={20} color={Colors.dark.icon} />

                    <Text
                      title={data?.stargazers_count}
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
                      title={data?.forks}
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
              numberIssue={data?.open_issues}
              icon={() => (
                <Octicons
                  name="issue-opened"
                  size={20}
                  color={Colors.dark.white}
                />
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
              numberIssue={data?.watchers}
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
          </>
        )}
      </Container>
    </>
  );
}
