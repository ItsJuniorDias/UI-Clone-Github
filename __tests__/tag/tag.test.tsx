import React from 'react';
import { render } from '@testing-library/react-native';
import Tag from '../../components/tag/tag';

describe('Tag component', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<Tag title="Bug" backgroundColor="red" />);

    expect(getByText('Bug')).toBeTruthy();
  });

  it('passes correct props to the Text component', () => {
    const { getByText } = render(<Tag title="Task" backgroundColor="green" />);

    const textElement = getByText('Task');

    expect(textElement.props.color).toBe('green');
    expect(textElement.props.fontFamily).toBe('RobotoSemiBold');
    expect(textElement.props.size).toBe(16);
  });
});
