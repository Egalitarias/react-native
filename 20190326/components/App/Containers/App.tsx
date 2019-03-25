import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SetButton, Padding, WelcomeText } from "../Components";
import { string } from "prop-types";

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

// Functional Component (with props, no state)
type BigTextProps = {
  text: string;
  fontSize: number;
};
const BigText = (props: BigTextProps) => {
  return <Text style={{ fontSize: props.fontSize }}>{props.text}</Text>;
};

// Functional Component (with props, no state, style structuring and destructuring)
type StyledTextProps = {
  text: string;
  style: {
    fontSize: number;
  };
};
const StyledText = (props: StyledTextProps) => {
  // Destructuring
  const { fontSize } = props.style;
  return <Text style={{ fontSize: fontSize }}>{props.text}</Text>;
};

type Props = {};
export default class App extends Component<Props> {
  state = {
    message: ""
  };

  setButtonOnPress = () => {
    this.setState({ message: "Set pressed" });
  };

  getButtonOnPress = () => {
    this.setState({ message: "Get pressed" });
  };

  render() {
    return (
      <View style={styles.container}>
        <Version />
        <SomeText text="A line of text" />
        <BigText text="A line of text with bigger font" fontSize={30} />
        <StyledText text="Styled text" style={{ fontSize: 40 }} />
        <WelcomeText>Welcome to React Native!</WelcomeText>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Padding />
        <SetButton setButtonOnPress={this.setButtonOnPress} />
        <Padding />
        <Button title="Get" onPress={this.getButtonOnPress} />
        <Padding />
        <Text>{this.state.message}</Text>
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
