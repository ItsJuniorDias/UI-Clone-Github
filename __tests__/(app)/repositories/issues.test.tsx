import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IssuesScreen from '../../../app/(app)/repositories/issues';

jest.mock('@/services/api', () => ({
  api: { get: jest.fn(() => Promise.resolve({ data: [] })) },
}));

jest.mock('expo-router', () => ({
  useLocalSearchParams: () => ({ full_name: 'user/repo' }),
}));

jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: jest.fn(() => ({
    data: {
      pages: [
        {
          data: [
            {
              id: 1,
              title: 'Issue 1',
              user: { login: 'user1' },
              labels: [],
              created_at: '2025-09-14T12:00:00Z',
            },
            {
              id: 2,
              title: 'Issue 2',
              user: { login: 'user2' },
              labels: [],
              created_at: '2025-09-13T12:00:00Z',
            },
          ],
        },
      ],
    },
    fetchNextPage: jest.fn(),
    hasNextPage: true,
    isFetchingNextPage: false,
    isLoading: false,
  })),
}));

describe('IssuesScreen', () => {
  it('renders issue items correctly', () => {
    const { getByText } = render(<IssuesScreen />);

    expect(getByText('Issue 1')).toBeTruthy();
    expect(getByText('Issue 2')).toBeTruthy();
  });

  it('renders loading indicator when isLoading is true', () => {
    const useInfiniteQuery = require('@tanstack/react-query').useInfiniteQuery;
    useInfiniteQuery.mockReturnValueOnce({
      data: undefined,
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetchingNextPage: false,
      isLoading: true,
    });

    const { getByTestId } = render(<IssuesScreen />);

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('calls fetchNextPage on end reached', () => {
    const fetchNextPageMock = jest.fn();

    const useInfiniteQuery = require('@tanstack/react-query').useInfiniteQuery;
    useInfiniteQuery.mockReturnValueOnce({
      data: {
        pages: [
          {
            data: [
              {
                id: 1,
                title: 'Issue 1',
                user: { login: 'user1' },
                labels: [],
                created_at: '2025-09-14T12:00:00Z',
              },
            ],
          },
        ],
      },
      fetchNextPage: fetchNextPageMock,
      hasNextPage: true,
      isFetchingNextPage: false,
      isLoading: false,
    });

    const { getByTestId } = render(<IssuesScreen />);
    const flatList = getByTestId('flatlist');

    fireEvent.scroll(flatList, {
      nativeEvent: {
        contentOffset: { y: 500 },
        contentSize: { height: 1000, width: 100 },
        layoutMeasurement: { height: 500, width: 100 },
      },
    });

    const flatListInstance = flatList.props;

    if (typeof flatListInstance.onEndReached === 'function') {
      flatListInstance.onEndReached();
    }

    expect(fetchNextPageMock).toHaveBeenCalled();
  });
});
