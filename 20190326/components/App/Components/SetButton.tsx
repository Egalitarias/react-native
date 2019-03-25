import React, { Component } from "react";
import { Button } from "react-native";

type Props = {
  setButtonOnPress: () => void;
};
export class SetButton extends Component<Props> {
  render() {
    return <Button title="Set" onPress={this.props.setButtonOnPress} />;
  }
}
