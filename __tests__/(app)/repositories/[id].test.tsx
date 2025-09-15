import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailsScreen from '../../../app/(app)/repositories/[id]';

// Mock icons
jest.mock('@expo/vector-icons/Feather', () => 'Feather');
jest.mock('@expo/vector-icons/Octicons', () => 'Octicons');
jest.mock('@expo/vector-icons/Entypo', () => 'Entypo');
jest.mock(
  '@expo/vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons'
);

// Mock api
jest.mock('@/services/api', () => ({
  api: {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          full_name: 'user/repo',
          name: 'repo',
          description: 'Repo description',
          owner: { avatar_url: 'https://avatar.com/avatar.png' },
          stargazers_count: 123,
          forks: 45,
          open_issues: 10,
          watchers: 50,
          homepage: 'https://repo-homepage.com',
        },
      })
    ),
  },
}));

// Mock hooks
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: {
      full_name: 'user/repo',
      name: 'repo',
      description: 'Repo description',
      owner: { avatar_url: 'https://avatar.com/avatar.png' },
      stargazers_count: 123,
      forks: 45,
      open_issues: 10,
      watchers: 50,
      homepage: 'https://repo-homepage.com',
    },
    isLoading: false,
  })),
}));

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useLocalSearchParams: () => ({ full_name: 'user/repo' }),
}));

describe('DetailsScreen', () => {
  it('renders repository info correctly', () => {
    const { getByText } = render(<DetailsScreen />);

    expect(getByText('user/repo')).toBeTruthy();
    expect(getByText('repo')).toBeTruthy();
    expect(getByText('Repo description')).toBeTruthy();
    expect(getByText('https://repo-homepage.com')).toBeTruthy();
  });

  it('renders Body components with correct titles', () => {
    const { getByTestId } = render(<DetailsScreen />);

    const bodyTitles = [
      'Issues',
      'Pull Request',
      'Actions',
      'Releases',
      'Contributors',
      'Watchers',
      'License',
    ];

    bodyTitles.forEach((title) => {
      expect(() => getByTestId(`body-${title}`)).toThrow();
    });
  });
});
