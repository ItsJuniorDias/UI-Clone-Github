import { TextInputProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Input, Container } from './styles';

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
    <Container>
      <Ionicons name="search" size={20} color="white" />

      <Input
        {...props}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={(item: string) => onChangeText(item)}
        autoCapitalize="none"
      />
    </Container>
  );
}
