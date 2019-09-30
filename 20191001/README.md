# Introduction to React Native

## Prerequisites

* brew install node
* brew upgrade node
* install Xcode
* Install Android Studio
* Install Visual Code
* npm install -g react-native

## Create and run the project

* react-native init nav
* cd nav
* npm install
* yarn install
* react-native run-android
* react-native run-ios

## Add directories and create MainScreen

* mkdir App
* mkdir App/Containers
* Move App.js code to MainScreen.js

Edit App.js

```
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import MainScreen from './Containers/MainScreen';

const App: () => React$Node = () => {
  return <MainScreen />;
};

export default App;
```

## Add Navigation

Install navigation packages

```
yarn add react-navigation
yarn add react-native-gesture-handler
# yarn add @types/react-navigation
yarn add react-navigation-stack
```

Add App/Routes.js

```
const ROUTES = {
  MainScreen: 'MainScreen',
};

export default ROUTES;
```

Edit App/App.js to use StackNavigator

```
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

import ROUTES from './Routes';

const MainNavigator = createStackNavigator({
  [ROUTES.MainScreen]: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: false,
    }),
  },
});
const AppContainer = createAppContainer(MainNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
```
