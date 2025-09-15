import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RepositoryScreen from '../../../app/(app)/repositories/index';
import { api } from '@/services/api';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { Animated } from 'react-native';
import { useRouter } from 'expo-router';

const mockQueryClient = jest.fn();

jest.mock('axios', () => ({
  create: jest.fn(),
}));

(useInfiniteQuery as jest.Mock).mockReturnValue({
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
});
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

const mockRepositories = {
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
};

describe('RepositoryScreen', () => {
  const setup = () => render(<RepositoryScreen />);

  it('should render ActivityIndicator while loading', () => {
    const { getByTestId } = setup();

    const activiIndicator = getByTestId('loading-indicator');

    expect(activiIndicator).toBeTruthy();
  });

  it('should render repository list after loading', async () => {
    const { getByText, debug } = setup();

    debug();

    // await waitFor(() => {
    //   expect(getByText('Monero')).toBeTruthy();
    // });
  });

  // it('should update search with debounce', async () => {
  //   jest.useFakeTimers();
  //   (api.get as jest.Mock).mockResolvedValue({ data: mockRepositories });

  //   const { getByPlaceholderText } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <RepositoryScreen />
  //     </QueryClientProvider>
  //   );

  //   const input = getByPlaceholderText('Search repository');
  //   fireEvent.changeText(input, 'bitcoin');

  //   // Advance debounce timer
  //   jest.advanceTimersByTime(1000);

  //   await waitFor(() => {
  //     expect(api.get).toHaveBeenCalledWith(
  //       expect.stringContaining('bitcoin'),
  //       expect.any(Object)
  //     );
  //   });

  //   jest.useRealTimers();
  // });

  // it('should call fetchNextPage when reaching end of list', async () => {
  //   (api.get as jest.Mock).mockResolvedValue({ data: mockRepositories });

  //   const { getByText } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <RepositoryScreen />
  //     </QueryClientProvider>
  //   );

  //   fireEvent.scroll(getByText('Monero'), {
  //     nativeEvent: {
  //       contentOffset: { y: 1000 },
  //       contentSize: { height: 2000 },
  //       layoutMeasurement: { height: 500 },
  //     },
  //   });

  //   await waitFor(() => {
  //     expect(api.get).toHaveBeenCalled();
  //   });
  // });

  // it('should navigate when pressing on an item', async () => {
  //   (api.get as jest.Mock).mockResolvedValue({ data: mockRepositories });

  //   const { getByText } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <RepositoryScreen />
  //     </QueryClientProvider>
  //   );

  //   await waitFor(() => getByText('Monero'));

  //   fireEvent.press(getByText('Monero'));
  //   expect(pushMock).toHaveBeenCalledWith({
  //     pathname: `/(app)/repositories/[id]`,
  //     params: { id: 'user/Monero', full_name: 'user/Monero' },
  //   });
  // });

  // it('should animate search bar on scroll', () => {
  //   const { getByText } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <RepositoryScreen />
  //     </QueryClientProvider>
  //   );

  //   fireEvent.scroll(getByText('Monero'), {
  //     nativeEvent: {
  //       contentOffset: { y: 100 },
  //       contentSize: { height: 2000 },
  //       layoutMeasurement: { height: 500 },
  //     },
  //   });

  //   expect(Animated.timing).toHaveBeenCalled();
  // });
});
