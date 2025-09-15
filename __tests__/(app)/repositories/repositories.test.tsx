import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RepositoryScreen from '../../../app/(app)/repositories/index';

// Mock dependencies
jest.mock('@/services/api', () => ({
  api: { get: jest.fn(() => Promise.resolve({ data: { items: [] } })) },
}));

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: jest.fn(() => ({
    data: { pages: [{ items: [] }] },
    isLoading: false,
    isFetchingNextPage: false,
    fetchNextPage: jest.fn(),
    hasNextPage: true,
  })),
}));

describe('RepositoryScreen', () => {
  it('renders search input and updates value', () => {
    const { getByPlaceholderText } = render(<RepositoryScreen />);
    const input = getByPlaceholderText('Search repository');

    fireEvent.changeText(input, 'monero');

    expect(input.props.value).toBe('monero');
  });
});
