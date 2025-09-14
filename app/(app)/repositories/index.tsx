import { Colors } from '@/constants/theme';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useState, useEffect } from 'react';
import { Card, Input } from '@/components';
import { api } from '@/services/api';
import { useRouter } from 'expo-router';

import { GITHUB_TOKEN } from '@env';

type ItemProps = {
  title: string;
  thumbnail: string;
  subtitle: string;
  description: string;
  star: number;
  language: string;
};

export default function RepositoryScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const router = useRouter();

  console.log(GITHUB_TOKEN, 'GITHUB TOKEN');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);
    return () => clearTimeout(handler);
  }, [search]);

  const fetchRepositories = async ({ pageParam = 1 }) => {
    try {
      const response = await api.get(
        `/search/repositories?q=${encodeURIComponent(
          debouncedSearch || 'monero'
        )}&sort=stars&order=desc&page=${pageParam}&per_page=20`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      return { ...response.data, nextPage: pageParam + 1 };
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['repositories', debouncedSearch],
      queryFn: fetchRepositories,
      getNextPageParam: (lastPage) =>
        lastPage.items.length > 0 ? lastPage.nextPage : undefined,
      initialPageParam: 1,
    });

  const Item = ({
    title,
    thumbnail,
    subtitle,
    description,
    language,
    star,
  }: ItemProps) => (
    <Card
      title={title}
      thumbnail={thumbnail}
      subtitle={subtitle}
      description={description}
      star={star}
      language={language}
      onPress={() =>
        router.push({
          pathname: `/(app)/repositories/[id]`,
          params: {
            id: subtitle,
            full_name: subtitle,
          },
        })
      }
    />
  );

  const repositories = data?.pages.flatMap((page) => page.items) ?? [];

  const translateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color={Colors.dark.white} />
      )}

      {!isLoading && (
        <>
          <Animated.View
            style={[styles.searchContainer, { transform: [{ translateY }] }]}
          >
            <Input
              value={search}
              onChangeText={setSearch}
              placeholder="Search repository"
              placeholderTextColor={Colors.dark.white}
            />
          </Animated.View>

          <FlatList
            contentContainerStyle={{ paddingTop: 70 }}
            data={repositories}
            renderItem={({ item }) => (
              <Item
                title={item.name}
                thumbnail={item.owner.avatar_url}
                subtitle={item.full_name}
                description={item.description}
                star={item.stargazers_count}
                language={item.language}
              />
            )}
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
            onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            scrollEventThrottle={16}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: Colors.dark.background,
    zIndex: 10,
  },
});
