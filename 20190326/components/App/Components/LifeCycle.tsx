import React, { Component, ErrorInfo } from "react";
import { Button, Text, View } from "react-native";

interface Props {
  constructorHandler: () => void;
  componentDidMountHandler: () => void;
  componentDidCatchHandler: (error: Error, info: ErrorInfo) => void;
  componentWillReceiveProps: () => void;
}

export class LifeCycle extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.constructorHandler();
  }

  componentDidMount() {
    this.props.componentDidMountHandler();
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.componentDidCatchHandler(error, info);
  }

  componentWillReceiveProps() {
    this.props.componentWillReceiveProps();
  }

  errorOnPress = () => {
    throw new Error("my error");
  };

  render() {
    return (
      <View>
        <Text>{this.props.children}</Text>
        <Button title="Error" onPress={this.errorOnPress} />
      </View>
    );
  }
}
