import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./App/Container/HomeScreen";
import DetailScreen from "./App/Container/DetailScreen";
import ModalScreen from "./App/Container/ModalScreen";

export enum ROUTES {
  RootMain = "RootMain",
  RootModal = "RootModal",
  LandingScreen = "LandingScreen",
  NextScreen = "NextScreen",
  HomeScreen = "HomeScreen",
  DetailScreen = "DetailScreen",
  ModalScreen = "ModalScreen"
}

// The stack for the modal
const ModalStack = createStackNavigator({
  [ROUTES.ModalScreen]: {
    screen: ModalScreen
  }
});

// The stack for the main navigation
const MainStack = createStackNavigator({
  [ROUTES.HomeScreen]: {
    screen: HomeScreen
  },
  [ROUTES.DetailScreen]: {
    screen: DetailScreen
  }
});

// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.RootMain]: {
      screen: MainStack
    },
    [ROUTES.RootModal]: {
      screen: ModalStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
