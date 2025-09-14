import { scale } from "@/constants/scale";
import { Colors } from "@/constants/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 40px;
  border-radius: ${scale.xs};
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${Colors.dark.tabBarBackground};
  color: ${Colors.dark.white};
  flex-direction: row;
  align-items: center;
  gap: ${scale.xs};

`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  
  color: ${Colors.dark.white}
`;