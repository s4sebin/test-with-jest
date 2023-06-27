/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../app/Screens/Home/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Home/>).toJSON();
  expect(tree).toMatchSnapshot();
});
