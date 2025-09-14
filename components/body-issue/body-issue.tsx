import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '@/constants/theme';
import { Text } from '@/components';
import { Container, Icon, Row } from './styles';

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { ReactNode } from 'react';

interface BodyIssueProps {
  icon: () => ReactNode;
  title: string;
  numberIssue?: number;
  color: string;
  onPress?: () => void;
}

export default function BodyIssue({
  icon,
  title,
  numberIssue,
  color,
  onPress,
}: BodyIssueProps) {
  return (
    <Container onPress={onPress}>
      <Row>
        <Icon color={color}>{icon()}</Icon>

        <Text
          title={title}
          fontFamily="semi-bold"
          color={Colors.dark.white}
          size="sm"
        />
      </Row>

      <Row>
        <Text
          title={numberIssue ?? ''}
          fontFamily="semi-bold"
          color={Colors.dark.gray}
          size="sm"
        />

        <SimpleLineIcons
          name="arrow-right"
          size={12}
          color={Colors.dark.gray}
        />
      </Row>
    </Container>
  );
}
