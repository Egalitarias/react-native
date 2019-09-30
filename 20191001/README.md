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

## Add NextScreen

Add NextScreen to Routes.js

```
const ROUTES = {
  MainScreen: 'MainScreen',
  NextScreen: 'NextScreen',
};

export default ROUTES;
```

Add title and Next button to MainScreen

```
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ROUTES from '../Routes';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.nextOnPress = this.nextOnPress.bind(this);
  }

  nextOnPress() {
    this.props.navigation.navigate(ROUTES.NextScreen);
  }

  render() {
    return (
      <>
        <View style={styles.background} />
        <View style={styles.titleText}>
          <Text style={styles.titleFont}>Main</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={this.nextOnPress}>
            <View style={styles.buttonText}>
              <Text style={styles.buttonFont}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#afcfef',
  },
  titleText: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9fafef',
  },
  titleFont: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  nextButton: {
    position: 'absolute',
    padding: 0,
    marginLeft: Dimensions.get('window').width * 0.76,
    marginTop: Dimensions.get('window').width * 0.035,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor: '#5f7fef',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
```

Add App/Containers/NextScreen.js

```
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ROUTES from '../Routes';

export default class NextScreen extends Component {
  constructor(props) {
    super(props);

    this.backOnPress = this.backOnPress.bind(this);
    this.nextOnPress = this.nextOnPress.bind(this);
  }

  backOnPress() {
    this.props.navigation.goBack(null);
  }

  nextOnPress() {
  }

  render() {
    return (
      <>
        <View style={styles.background} />
        <View style={styles.titleText}>
          <Text style={styles.titleFont}>Next</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this.backOnPress}>
            <View style={styles.buttonText}>
              <Text style={styles.buttonFont}>Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={this.nextOnPress}>
            <View style={styles.buttonText}>
              <Text style={styles.buttonFont}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#afcfef',
  },
  titleText: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9fafef',
  },
  titleFont: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  nextButton: {
    position: 'absolute',
    padding: 0,
    marginLeft: Dimensions.get('window').width * 0.76,
    marginTop: Dimensions.get('window').width * 0.035,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor: '#5f7fef',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    padding: 0,
    marginLeft: Dimensions.get('window').width * 0.04,
    marginTop: Dimensions.get('window').width * 0.035,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor: '#5f7fef',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
```

App/App.js
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
import NextScreen from './Containers/NextScreen';

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
```

