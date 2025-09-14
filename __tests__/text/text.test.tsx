import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../../components/text/text';

describe('Text component', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(
      <Text title="Hello World" fontFamily="regular" color="red" size="md" />
    );

    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies the correct fontFamily', () => {
    const { getByText } = render(
      <Text title="Font Test" fontFamily="bold" color="blue" size="lg" />
    );

    const textElement = getByText('Font Test');

    expect(textElement.props.fontFamily).toBe('RobotoBold');
  });

  it('applies the correct size', () => {
    const { getByText } = render(
      <Text title="Size Test" fontFamily="regular" color="green" size="sm" />
    );

    const textElement = getByText('Size Test');

    expect(textElement.props.size).toBe(16);
  });

  it('applies the correct color', () => {
    const { getByText } = render(
      <Text
        title="Color Test"
        fontFamily="semi-bold"
        color="purple"
        size="xs"
      />
    );

    const textElement = getByText('Color Test');

    expect(textElement.props.color).toBe('purple');
  });
});
