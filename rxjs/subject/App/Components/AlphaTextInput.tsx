// Just an idea, not useful yet, not sure how to link AlphaTextInput state to parent state

import React, { Component } from "react";
import { TextInput } from "react-native";

type Props = {
  styles: any;
  value: string;
};

type State = {
  value: string;
};

export class AlphaTextInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <TextInput
        {...this.props}
        style={this.props.styles.alphaTextInput}
        onChangeText={value => this.setState({ value })}
        value={this.props.value}
      />
    );
  }
}
