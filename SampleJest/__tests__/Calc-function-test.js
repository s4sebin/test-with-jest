/**
 * @format
 */

import 'react-native';
import React from 'react';
import Calculator from '../app/Screens/Calculator';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Counter', () => {
  let calculator = shallow(<Calculator />);

  it('calls sum function when enter data and plus button is clicked', async () => {
    await waitFor(() => {
      expect(getByTestId('sumButton')).toBeTruthy();
    });
    fireEvent.press(getByTestId('sumButton'));
    expect(counter.find('p').text()).toBe('Counter value is: 0');
    const incButton = calculator.find('button');
    incButton.simulate('click');
    expect(counter.find('p').text()).toBe('Counter value is: 1');
  });
});
