import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RepositoryScreen from '../../../app/(app)/repositories/index';

import { Animated } from 'react-native';

jest.mock('axios', () => ({
  create: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: jest.fn().mockReturnValue({
    data: {
      pages: [
        {
          items: [
            {
              id: 1,
              name: 'Monero',
              full_name: 'user/Monero',
              description: 'Crypto project',
              stargazers_count: 5000,
              language: 'C++',
              owner: { avatar_url: 'https://avatar.url' },
            },
          ],
        },
      ],
    },
    isLoading: false,
    isFetchingNextPage: false,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
  }),
}));

// Mock router
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

// Mock Animated.timing to prevent warnings
jest.spyOn(Animated, 'timing').mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
  reset: jest.fn(),
}));

describe('RepositoryScreen', () => {
  const setup = () => render(<RepositoryScreen />);

  it('should render repository list after loading', async () => {
    const { getByText, debug } = setup();

    debug();

    expect(getByText('Monero')).toBeTruthy();
  });

  it('should call function handleScroll bottom', async () => {
    const { getByTestId } = setup();

    const flatList = getByTestId('flatlist_testID');

    fireEvent.scroll(flatList, {
      nativeEvent: {
        contentOffset: { y: 1000 },
        contentSize: { height: 2000 },
        layoutMeasurement: { height: 500 },
      },
    });

    expect(flatList).toBeTruthy();
  });

  it('should call function handleScroll top', async () => {
    const { getByTestId } = setup();

    const flatList = getByTestId('flatlist_testID');

    fireEvent.scroll(flatList, {
      nativeEvent: {
        contentOffset: { y: -1000 },
        contentSize: { height: 2000 },
        layoutMeasurement: { height: 500 },
      },
    });

    expect(flatList).toBeTruthy();
  });
});
