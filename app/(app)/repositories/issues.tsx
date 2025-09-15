import { Colors } from '@/constants/theme';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { CardIssue, Text } from '@/components';
import { api } from '@/services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';

export type LabelsProps = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: null;
};

export type ItemProps = {
  id: number;
  title: string;
  username: string;
  labels: LabelsProps[];
  user: { login: string };
  created_at: string;
};

export default function IssuesScreen() {
  const { full_name } = useLocalSearchParams();

  const fetchIssues = async ({ pageParam = 1 }) => {
    const response = await api.get(
      `/repos/${full_name}/issues?state=open&page=${pageParam}&per_page=20`
    );
    return {
      data: response.data,
      nextPage: pageParam + 1,
      isLast: response.data.length === 0,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['issues', full_name],
      queryFn: fetchIssues,
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      initialPageParam: 1,
    });

  const issues = data?.pages.flatMap((page) => page.data) || [];

  const renderItem = ({ item }: { item: ItemProps }) => (
    <CardIssue
      title={item.title}
      username={item.user.login}
      labels={item.labels}
      created_at={item.created_at}
    />
  );

  if (isLoading) {
    return (
      <View style={styles.contentLoading}>
        <ActivityIndicator
          testID="activity-indicator"
          size="large"
          color={Colors.dark.white}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        testID="flatlist"
        data={issues}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          if (hasNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator size="small" color={Colors.dark.white} />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  contentLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background,
  },
});
