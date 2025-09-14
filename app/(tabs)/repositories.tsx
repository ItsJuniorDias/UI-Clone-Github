import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { View, StyleSheet, FlatList } from "react-native";

import { Text, Card } from "@/components";

type ItemProps = {
  title: string;
  thumbnail: string;
  subtitle: string;
  description: string;
  star: number;
  language: string;
};

export default function RepositoryScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "monero-project",
      avatar: "https://avatars.githubusercontent.com/u/7450663?v=4",
      subtitle: "monero",
      description: "Monero: the secure, private, untraceable cryptocurrency",
      star: 9.845,
      language: "C++",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "monero-project",
      avatar: "https://avatars.githubusercontent.com/u/7450663?v=4",
      subtitle: "monero-gui",
      description: "Monero: the secure, private, untraceable cryptocurrency",
      star: 2.016,
      language: "C",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "fireice-uk",
      avatar: "https://avatars.githubusercontent.com/u/5392418?v=4",
      subtitle: "xmr-stak-cpu",
      description: "Monero CPU miner",
      star: 1.121,
      language: "C++",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d11",
      title: "fireice-uk",
      avatar: "https://avatars.githubusercontent.com/u/5392418?v=4",
      subtitle: "xmr-stak",
      description: "Free monero ramdomX miner and unified cryptonight miner",
      star: 4.075,
      language: "C++",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d00",
      title: "p2pool",
      avatar: "https://avatars.githubusercontent.com/u/15806605?v=4",
      subtitle: "SChernykh/p2pool",
      description: "Decentralized pool for Monero mining",
      star: 1313,
      language: "C++",
    },
  ];

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
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            thumbnail={item.avatar}
            subtitle={item.subtitle}
            description={item.description}
            star={item.star}
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
