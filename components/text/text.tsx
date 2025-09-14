import { TextProps } from "react-native";
import { TextCustom } from "./styles";

interface TextCustomProps extends TextProps {
  title: string;
  fontFamily: "regular" | "semi-bold" | "bold";
  color: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Text({
  title,
  fontFamily,
  color,
  size,
  ...props
}: TextCustomProps) {
  const objectFont = {
    regular: "RobotoRegular",
    "semi-bold": "RobotoSemiBold",
    bold: "RobotoBold",
  };

  const objectSize = {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  };

  return (
    <TextCustom
      fontFamily={objectFont[fontFamily]}
      color={color}
      size={objectSize[size]}
      {...props}
    >
      {title}
    </TextCustom>
  );
}
