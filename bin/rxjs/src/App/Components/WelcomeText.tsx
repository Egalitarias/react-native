import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};
export class WelcomeText extends Component<Props> {
  render() {
    return <Text style={styles.welcome}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
