import { scale } from "@/constants/scale";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  background-color: ${Colors.dark.backgroundBody};
  border-top-color: ${Colors.dark.icon};
  border-bottom-color: ${Colors.dark.icon};
  border-width: 0.5px;
  justify-content: center;
  padding-left:${scale.md};
  padding-right:${scale.md};
  flex-direction: row;
  justify-content:space-between ;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: ${scale.xs};
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: ${scale.xs};
  align-items: center;
`;