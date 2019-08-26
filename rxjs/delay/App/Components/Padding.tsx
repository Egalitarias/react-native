import React, { Component } from "react";
import { View } from "react-native";

type Props = {
  styles: any;
};
export class Padding extends Component<Props> {
  render() {
    return <View style={this.props.styles.padding} />;
  }
}
