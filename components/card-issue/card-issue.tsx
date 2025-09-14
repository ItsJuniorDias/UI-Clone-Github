import { Colors } from '@/constants/theme';
import { Tag, Text } from '..';
import { Container, ContentText, Row, RowTag } from './styles';
import Octicons from '@expo/vector-icons/Octicons';
import { Dimensions, StyleSheet } from 'react-native';

import { LabelsProps } from '@/app/(app)/repositories/issues';

export type ItemProps = {
  id: number;
  title: string;
  username: string;
  labels: LabelsProps[];
  created_at: string;
};

export default function CardIssue({
  title,
  username,
  labels,
  created_at,
}: ItemProps) {
  const diffToDays = (isoDate: string) => {
    const date = new Date(isoDate);
    const now = new Date();

    const diffMs = now.getTime() - date.getTime();

    // converte para dias
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return `${diffDays}d`;
  };

  return (
    <Container>
      <Row>
        <Octicons name="issue-opened" size={24} color={Colors.dark.issue} />

        <ContentText>
          <Text
            title={username}
            fontFamily="regular"
            color={Colors.dark.white}
            size="sm"
          />

          <Text
            title={title}
            fontFamily="bold"
            color={Colors.dark.white}
            size="sm"
          />
        </ContentText>

        <Text
          title={diffToDays(created_at)}
          fontFamily="semi-bold"
          color={Colors.dark.white}
          size="sm"
        />
      </Row>

      <RowTag
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      >
        {labels.map((item) => (
          <Tag
            key={item.id || item.name}
            title={item.name}
            backgroundColor={`#${item.color}`}
          />
        ))}
      </RowTag>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
  },
});
