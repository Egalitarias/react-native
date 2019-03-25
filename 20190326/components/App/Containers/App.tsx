import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = "Shake for dev menu";

// Functional Component (no props, no state)
const Version = () => {
  return <Text>Version 1.0.1</Text>;
};

// Functional Component (with props, no state)
type SomeTextProps = {
  text: string;
};
const SomeText = (props: SomeTextProps) => {
  return <Text>{props.text}</Text>;
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Version />
        <SomeText text="A line of text" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  }
});
