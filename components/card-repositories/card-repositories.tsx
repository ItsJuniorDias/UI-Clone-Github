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
  const tagBadge = {
    "C++": Colors.light.language["C++"],
    C: Colors.light.language.C,
    Go: Colors.light.language.Go,
    Java: Colors.light.language.Java,
    TypesSript: Colors.light.language.TypesSript,
    Javascript: Colors.light.language.Javascript,
    Ruby: Colors.light.language.Ruby,
    Kotlin: Colors.light.language.Kotlin,
    Swift: Colors.light.language.Swift,
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
            <Badge
              backgroundColor={tagBadge[language as keyof typeof tagBadge]}
            />

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
