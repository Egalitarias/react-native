/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './Containers/MainScreen';
import NextScreen from './Containers/NextScreen';
import FinalScreen from './Containers/FinalScreen';

import ROUTES from './Routes';

const MainNavigator = createStackNavigator(
  {
    [ROUTES.MainScreen]: {
      screen: MainScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    [ROUTES.NextScreen]: {
      screen: NextScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    [ROUTES.FinalScreen]: {
      screen: FinalScreen,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
);
const AppContainer = createAppContainer(MainNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
