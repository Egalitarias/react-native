import React, { Component } from "react";
import {
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { ROUTES } from "./App";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type OwnProps = {};

type Props = OwnProps & NavigationScreenProps;

export default class LandingScreen extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View style={styles.padding} />
        <Text style={styles.welcome}>Landing Screen V1.0</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={styles.button}>
          <Button
            title="Next"
            onPress={() => {
              navigate(ROUTES.NextScreen);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  padding: {
    height: Dimensions.get("window").width * 0.2
  },
  button: {
    color: "#375867",
    margin: Dimensions.get("window").width * 0.35,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.1
  }
});
