import { scale } from "@/constants/scale";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-wrap: nowrap;
  padding: ${scale.xs};
  align-items: center;
  border-radius: ${scale.sm};
  background-color: transparent;
  border-color:  ${({ backgroundColor }) => backgroundColor};
  border-width: 1px;
  margin-right: ${scale.sm};
`;