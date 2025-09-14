import { TextInputProps } from "react-native";
import { Input } from "./styles";

interface TextInputCustomProps extends TextInputProps {
  value: string;
  onChangeText: (item: string) => void;
  placeholder: string;
  placeholderTextColor: string;
}

export default function TextInputCustom({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  ...props
}: TextInputCustomProps) {
  return (
    <Input
      {...props}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={(item: string) => onChangeText(item)}
    />
  );
}
