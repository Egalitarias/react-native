import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};
export class InstructionText extends Component<Props> {
  render() {
    return <Text style={styles.instructions}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
