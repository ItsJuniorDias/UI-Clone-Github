import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CardRepositories from '../../components/card-repositories/card-repositories';

jest.mock('@expo/vector-icons/Feather', () => 'Feather');

describe('CardRepositories component', () => {
  const defaultProps = {
    title: 'My Repo',
    thumbnail: 'https://example.com/image.png',
    subtitle: 'Repo Subtitle',
    description: 'This is a description',
    star: 42,
    language: 'JavaScript',
    onPress: jest.fn(),
  };

  it('renders all texts correctly', () => {
    const { getByText } = render(<CardRepositories {...defaultProps} />);

    expect(getByText('My Repo')).toBeTruthy();
    expect(getByText('Repo Subtitle')).toBeTruthy();
    expect(getByText('This is a description')).toBeTruthy();
    expect(getByText('42')).toBeTruthy();
    expect(getByText('JavaScript')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<CardRepositories {...defaultProps} />);

    const container = getByText('My Repo').parent?.parent; // Container wraps everything
    fireEvent.press(container!);

    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
});
