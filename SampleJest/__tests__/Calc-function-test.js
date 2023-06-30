/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Calculator from '../app/Screens/Calculator/Calculator';

test('test code sum', () => {
  const {getByTestId} = render(<Calculator />);
  fireEvent.changeText(getByTestId('testPrimaryValue'), 15);
  fireEvent.changeText(getByTestId('testSecondaryValue'), 15);
  fireEvent.press(getByTestId('sumButton'));
  const result = getByTestId('resultValue');
  expect(result.props.value).toEqual('30');
});

test('test code div', () => {
  const {getByTestId} = render(<Calculator />);
  fireEvent.changeText(getByTestId('testPrimaryValue'), 15);
  fireEvent.changeText(getByTestId('testSecondaryValue'), 15);
  fireEvent.press(getByTestId('divButton'));
  const result = getByTestId('resultValue');
  expect(result.props.value).toEqual('1');
});

test('test code sub', () => {
  const {getByTestId} = render(<Calculator />);
  fireEvent.changeText(getByTestId('testPrimaryValue'), 15);
  fireEvent.changeText(getByTestId('testSecondaryValue'), 15);
  fireEvent.press(getByTestId('subButton'));
  const result = getByTestId('resultValue');
  expect(result.props.value).toEqual('0');
});

test('test code mul', () => {
  const {getByTestId} = render(<Calculator />);
  fireEvent.changeText(getByTestId('testPrimaryValue'), 15);
  fireEvent.changeText(getByTestId('testSecondaryValue'), 15);
  fireEvent.press(getByTestId('mulButton'));
  const result = getByTestId('resultValue');
  expect(result.props.value).toEqual('225');
});
