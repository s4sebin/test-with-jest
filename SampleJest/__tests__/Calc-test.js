/**
 * @format
 */

import 'react-native';
import React from 'react';
import Calculator from '../app/Screens/Calculator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
