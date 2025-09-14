import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BodyIssue from '../../components/body-issue/body-issue'; // adjust path
import { Colors } from '@/constants/theme';
import { Octicons } from '@expo/vector-icons';
import { Text } from '@/components';

// Mock icons
jest.mock('@expo/vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');
jest.mock('@expo/vector-icons/Octicons', () => 'Octicons');

describe('BodyIssue component', () => {
  const defaultProps = {
    icon: () => <Octicons name="issue-opened" />,
    title: 'Open Issues',
    numberIssue: 12,
    color: 'red',
    onPress: jest.fn(),
  };

  it('renders the title correctly', () => {
    const { getByText } = render(<BodyIssue {...defaultProps} />);

    expect(getByText('Open Issues')).toBeTruthy();
  });

  it('renders the numberIssue when provided', () => {
    const { getByText } = render(<BodyIssue {...defaultProps} />);
    expect(getByText('12')).toBeTruthy();
  });

  it('renders empty string when numberIssue is not provided', () => {
    const { queryByText } = render(
      <BodyIssue {...defaultProps} numberIssue={undefined} />
    );
    // should not render any number
    expect(queryByText('12')).toBeNull();
  });

  it('renders the arrow-right icon', () => {
    const { UNSAFE_getByType } = render(<BodyIssue {...defaultProps} />);
    expect(UNSAFE_getByType('SimpleLineIcons')).toBeTruthy();
  });

  it('calls onPress when container is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <BodyIssue {...defaultProps} onPress={onPressMock} />
    );

    const container = getByText('Open Issues').parent?.parent;
    fireEvent.press(container!);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
