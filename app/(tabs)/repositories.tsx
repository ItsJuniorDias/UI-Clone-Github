import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { View, StyleSheet, FlatList } from "react-native";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

import { Text, Card } from "@/components";
import { useEffect, useState } from "react";
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
  const queryClient = useQueryClient();

  const fetch = async () => {
    const response = await api.get(
      "/search/repositories?q={monero}&sort=stars&order=desc&page={1}&per_page=20"
    );
    console.log(response.data, "RESPONSE");

    return response.data;
  };

  const query = useQuery({ queryKey: ["repositories"], queryFn: fetch });

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

  return (
    <View style={styles.container}>
      <FlatList
        data={query?.data?.items}
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
