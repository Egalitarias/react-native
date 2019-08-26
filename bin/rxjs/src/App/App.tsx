import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LandingScreen from './Containers/LandingScreen';
import NextScreen from './Containers/NextScreen';
import ROUTES from './routes';

const MainNavigator = createStackNavigator({
  [ROUTES.LandingScreen]: {
    screen: LandingScreen,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: true,
    }),
  },
  [ROUTES.NextScreen]: {
    screen: NextScreen,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: true,
    }),
  },
});

const AppContainer = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
