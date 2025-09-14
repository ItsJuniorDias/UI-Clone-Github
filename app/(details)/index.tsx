import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { Text } from "@/components";
import Octicons from "@expo/vector-icons/Octicons";

import { Container, Avatar, Row, Content, RowFooter, Link } from "./styles";
import { Colors } from "@/constants/theme";

export default function DetailsScreen() {
  return (
    <Container>
      <Row>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/7450663?v=4",
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
          <Entypo name="link" size={24} color={Colors.dark.icon} />

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
            <Octicons name="repo-forked" size={20} color={Colors.dark.icon} />

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
    </Container>
  );
}
