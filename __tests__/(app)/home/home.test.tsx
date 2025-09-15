import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../../app/(app)/index';

jest.mock('@expo/vector-icons/Octicons', () => 'Octicons');
jest.mock('@expo/vector-icons/Feather', () => 'Feather');
jest.mock(
  '@expo/vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons'
);

describe('HomeScreen', () => {
  it('renders the header text', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('My Work')).toBeTruthy();
  });
});
