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

```
yarn add react-navigation
yarn add react-native-gesture-handler
# yarn add @types/react-navigation
yarn add react-navigation-stack
```


