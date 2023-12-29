/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigate';
import {LogBox} from 'react-native';
import {PersistanceHelper} from './src/helpers';

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  PersistanceHelper.setValue('this is the value to check');

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
