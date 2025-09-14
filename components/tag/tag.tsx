import { Text } from '..';
import { Container } from './styles';

interface TagProps {
  title: string;
  backgroundColor: string;
}

export default function Tag({ backgroundColor, title }: TagProps) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Text
        title={title}
        color={backgroundColor}
        fontFamily="semi-bold"
        size="sm"
      />
    </Container>
  );
}
