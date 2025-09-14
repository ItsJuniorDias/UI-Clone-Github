import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInputCustom from '../../components/text-input/text-input';

describe('TextInputCustom component', () => {
  it('renders the placeholder correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputCustom
        value=""
        onChangeText={() => {}}
        placeholder="Search here..."
        placeholderTextColor="gray"
      />
    );

    expect(getByPlaceholderText('Search here...')).toBeTruthy();
  });

  it('updates value when typing', () => {
    const onChangeTextMock = jest.fn();

    const { getByPlaceholderText } = render(
      <TextInputCustom
        value=""
        onChangeText={onChangeTextMock}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    );

    const input = getByPlaceholderText('Search');

    fireEvent.changeText(input, 'hello');

    expect(onChangeTextMock).toHaveBeenCalledWith('hello');
  });

  it('displays the passed value', () => {
    const { getByDisplayValue } = render(
      <TextInputCustom
        value="preset value"
        onChangeText={() => {}}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    );

    expect(getByDisplayValue('preset value')).toBeTruthy();
  });
});
