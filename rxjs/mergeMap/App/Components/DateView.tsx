import React, { Component } from "react";
import { View, Text } from "react-native";

type Props = {
  styles: any;
  date: Date;
};
export class DateView extends Component<Props> {
  render() {
    var text = "";
    if (this.props.date) {
      text = this.props.date.toString();
    }
    return (
      <View style={this.props.styles.dateView}>
        <Text style={this.props.styles.dateViewText}>{text}</Text>
      </View>
    );
  }
}
