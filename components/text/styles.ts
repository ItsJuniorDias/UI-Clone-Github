import styled from "styled-components/native";

interface TextProps {
  fontFamily: string;
  color: string;
  size: number;
}

export const TextCustom = styled.Text<TextProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size:  ${({ size }) => size}px;
  color: ${({ color }) => color};
`;