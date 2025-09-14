import { Input } from "./styles";

interface TextInputProps {
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
}: TextInputProps) {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={(item: string) => onChangeText(item)}
    />
  );
}
