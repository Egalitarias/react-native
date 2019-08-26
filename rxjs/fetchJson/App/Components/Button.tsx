import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

type Props = {
  onPress: any;
  styles: any;
};
export class Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.styles.button}>
          <Text style={this.props.styles.buttonText}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
