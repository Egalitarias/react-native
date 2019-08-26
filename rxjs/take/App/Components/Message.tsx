import React, { Component } from "react";
import { View, Text } from "react-native";

type Props = {
  styles: any;
};
export class Message extends Component<Props> {
  render() {
    return (
      <View style={this.props.styles.message}>
        <Text style={this.props.styles.messageText}>{this.props.children}</Text>
      </View>
    );
  }
}
