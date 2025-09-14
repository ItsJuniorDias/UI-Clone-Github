import { Colors } from "@/constants/theme";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Text, Card } from "@/components";
import { api } from "@/services/api";

type ItemProps = {
  title: string;
  thumbnail: string;
  subtitle: string;
  description: string;
  star: number;
  language: string;
};

export default function RepositoryScreen() {
  const fetchRepositories = async ({ pageParam = 1 }) => {
    const response = await api.get(
      `/search/repositories?q=monero&sort=stars&order=desc&page=${pageParam}&per_page=20`
    );
    return { ...response.data, nextPage: pageParam + 1 };
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["repositories"],
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
    />
  );

  const repositories = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" color={Colors.light.white} />
      )}

      {!isLoading && (
        <FlatList
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
              <ActivityIndicator size="small" color={Colors.light.white} />
            ) : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
