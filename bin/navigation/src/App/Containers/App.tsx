import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LandingScreen from "./LandingScreen";
import NextScreen from "./NextScreen";

export enum ROUTES {
  LandingScreen = "LandingScreen",
  NextScreen = "NextScreen"
}

const MainNavigator = createStackNavigator({
  [ROUTES.LandingScreen]: {
    screen: LandingScreen,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: true
    })
  },
  [ROUTES.NextScreen]: {
    screen: NextScreen,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: true
    })
  }
});

const AppContainer = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
