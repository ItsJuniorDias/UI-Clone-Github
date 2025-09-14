import { Text } from "@/components";
import Feather from "@expo/vector-icons/Feather";
import {
  Badge,
  Container,
  Content,
  ContentBadge,
  Row,
  Thumbnail,
} from "./styles";
import { Colors } from "@/constants/theme";

import colors_language from "../../constants/colors-language.json";

interface CardRepositoriesProps {
  title: string;
  thumbnail: string;
  subtitle: string;
  description: string;
  star: number;
  language: string;
  onPress: () => void;
}

export default function CardRepositories({
  title,
  thumbnail,
  subtitle,
  description,
  star,
  language,
  onPress,
}: CardRepositoriesProps) {
  const getLanguageColor = (language: string): string => {
    return colors_language[language]?.color ?? "#cccccc";
  };

  return (
    <Container onPress={onPress}>
      <Row>
        <Thumbnail source={thumbnail} />

        <Text
          title={title}
          fontFamily="regular"
          color={Colors.dark.white}
          size="sm"
        />
      </Row>

      <Content>
        <Text
          title={subtitle}
          fontFamily="bold"
          color={Colors.dark.white}
          size="sm"
        />

        <Text
          title={description}
          fontFamily="semi-bold"
          color={Colors.dark.white}
          numberOfLines={2}
          size="sm"
        />

        <Row>
          <Feather name="star" size={24} color={Colors.dark.icon} />

          <Text
            title={star.toString()}
            size="sm"
            color={Colors.dark.icon}
            fontFamily="semi-bold"
          />

          <ContentBadge>
            <Badge backgroundColor={getLanguageColor(language)} />

            <Text
              title={language}
              size="sm"
              color={Colors.dark.icon}
              fontFamily="semi-bold"
            />
          </ContentBadge>
        </Row>
      </Content>
    </Container>
  );
}
