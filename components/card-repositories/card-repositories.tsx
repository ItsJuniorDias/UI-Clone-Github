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
}

export default function CardRepositories({
  title,
  thumbnail,
  subtitle,
  description,
  star,
  language,
}: CardRepositoriesProps) {
  const getLanguageColor = (language: string): string => {
    return colors_language[language]?.color ?? "#cccccc"; // fallback se não existir
  };

  return (
    <Container>
      <Row>
        <Thumbnail source={thumbnail} />

        <Text
          title={title}
          fontFamily="regular"
          color={Colors.light.white}
          size="sm"
        />
      </Row>

      <Content>
        <Text
          title={subtitle}
          fontFamily="bold"
          color={Colors.light.white}
          size="sm"
        />

        <Text
          title={description}
          fontFamily="semi-bold"
          color={Colors.light.white}
          numberOfLines={2}
          size="sm"
        />

        <Row>
          <Feather name="star" size={24} color={Colors.light.icon} />

          <Text
            title={star.toString()}
            size="sm"
            color={Colors.light.icon}
            fontFamily="semi-bold"
          />

          <ContentBadge>
            <Badge backgroundColor={getLanguageColor(language)} />

            <Text
              title={language}
              size="sm"
              color={Colors.light.icon}
              fontFamily="semi-bold"
            />
          </ContentBadge>
        </Row>
      </Content>
    </Container>
  );
}
