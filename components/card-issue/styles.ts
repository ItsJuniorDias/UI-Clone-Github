import { scale } from "@/constants/scale";
import { Colors } from "@/constants/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: ${scale.sm};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: ${Colors.dark.icon};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const RowTag = styled.ScrollView`
  width: 100%;
  flex-direction: row;
  gap: ${scale.sm};

  padding-left: ${scale.lg};
  margin-top: ${scale.sm}
`;

export const ContentText = styled.View`
  width: 80%; 
  /* background-color: blue; */
  margin-left: ${scale.sm} ;
  gap: ${scale.xs};
`;