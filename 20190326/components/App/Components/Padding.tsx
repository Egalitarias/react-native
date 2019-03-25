import React, { Component } from "react";
import { Dimensions, View } from "react-native";

export class Padding extends Component {
  render() {
    return <View style={{ height: Dimensions.get("window").width * 0.05 }} />;
  }
}
