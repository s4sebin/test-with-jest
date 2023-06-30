/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ScreenNavigation from './app/Navigation/ScreenNavigation';

const App = () => {
  return (
    <ScreenNavigation/>
  );};
AppRegistry.registerComponent(appName, () => App);
