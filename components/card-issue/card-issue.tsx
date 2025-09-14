import { Colors } from '@/constants/theme';
import { Tag, Text } from '..';
import { Container, ContentText, Row, RowTag } from './styles';
import Octicons from '@expo/vector-icons/Octicons';
import { Dimensions, StyleSheet, View } from 'react-native';

import { ItemProps } from '@/app/(app)/repositories/issues';
import { scale } from '@/constants/scale';

export default function CardIssue({ title, username, labels }: ItemProps) {
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
          title={'17d'}
          fontFamily="regular"
          color={Colors.dark.white}
          size="sm"
        />
      </Row>

      <RowTag
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {labels.map((item) => (
          <Tag title={item.name} backgroundColor={`#${item.color}`} />
        ))}
      </RowTag>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: Dimensions.get('screen').width,
  },
});
