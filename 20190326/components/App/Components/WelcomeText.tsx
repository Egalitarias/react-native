import React, { Component } from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  style: TextStyle;
}
export class WelcomeText extends Component<Props> {
  render() {
    return <Text style={this.props.style}>{this.props.children}</Text>;
  }
}
