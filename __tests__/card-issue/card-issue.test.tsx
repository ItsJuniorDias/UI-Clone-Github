import React from 'react';
import { render } from '@testing-library/react-native';
import CardIssue, { ItemProps } from '../../components/card-issue/card-issue';
import { Colors } from '@/constants/theme';

jest.mock('@expo/vector-icons/Octicons', () => 'Octicons');

describe('CardIssue component', () => {
  const baseDate = new Date('2025-09-14T12:00:00Z');
  const oldDate = new Date('2025-09-10T12:00:00Z');

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(baseDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const defaultProps: ItemProps = {
    id: 1,
    title: 'Fix login bug',
    username: 'alexjr',
    created_at: oldDate.toISOString(),
    labels: [
      {
        id: 346541963,
        node_id: 'MDU6TGFiZWwzNDY1NDE5NjM=',
        url: 'https://api.github.com/repos/monero-project/monero/labels/pending%20review',
        name: 'pending review',
        color: 'fbca04',
        default: false,
        description: null,
      },
      {
        id: 6305215258,
        node_id: 'LA_kwDOASa_i88AAAABd9HzGg',
        url: 'https://api.github.com/repos/monero-project/monero/labels/wallet',
        name: 'wallet',
        color: '95B202',
        default: false,
        description: null,
      },
    ],
  };

  it('renders username, title and formatted date', () => {
    const { getByText } = render(<CardIssue {...defaultProps} />);

    expect(getByText('alexjr')).toBeTruthy();

    expect(getByText('Fix login bug')).toBeTruthy();
    expect(getByText('4d')).toBeTruthy(); // 4 days difference
  });

  it('renders the issue icon', () => {
    const { UNSAFE_getByType } = render(<CardIssue {...defaultProps} />);
    expect(UNSAFE_getByType('Octicons')).toBeTruthy();
  });

  it('renders all labels as Tag components', () => {
    const { getByText } = render(<CardIssue {...defaultProps} />);

    expect(getByText('pending review')).toBeTruthy();
  });
});
