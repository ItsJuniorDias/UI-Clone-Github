import { Colors } from "@/constants/theme";
import styled from "styled-components/native";

export const Input = styled.TextInput`
  height: 40px;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${Colors.light.background};
  color: ${Colors.light.white};
`;