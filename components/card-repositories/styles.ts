import { scale } from "@/constants/scale";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

interface BadgeProps {
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 192px;
  background-color: ${Colors.light.background};
  border-top-color: ${Colors.light.icon};
  border-bottom-color: ${Colors.light.icon};
  border-width: 0.5px;
  padding: ${scale.sm};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: ${scale.xs};
  align-items: center;
`;

export const Thumbnail = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: ${scale.sm};
`

export const Content = styled.View`

  margin-top: ${scale.sm};
  gap: ${scale.sm};
`;

export const Badge = styled.View<BadgeProps>`
  width: 12px;
  height: 12px;
  border-radius: ${scale.xl};
  background-color: ${({ backgroundColor }) => backgroundColor} ;
`;

export const ContentBadge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${scale.xs};
  margin-left: ${scale.xs};
`;