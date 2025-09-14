import { scale } from "@/constants/scale";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";

import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.dark.background};
`;

export const ContentHeader = styled.View`
  padding: ${scale.md};
  margin-bottom: ${scale.sm};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: ${scale.sm};
`;

export const RowFooter = styled.View`
  flex-direction: row;
  gap: ${scale.xs};
`;

export const Avatar = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: ${scale.sm};
`;

export const Content = styled.View`
  gap: ${scale.sm};
  margin-top: ${scale.xs};
`;

export const Link = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${scale.xs}
`;


