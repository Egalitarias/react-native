import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Observable, Subscription, zip, interval, from, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

import { Button, Padding, Message } from "../Components";

type Props = {};
export default class App extends Component<Props> {
  // State

  state = {
    value: "",
    message: ""
  };

  // Private variables

  private sourceOne$?: Observable<any>;
  private sourceTwo$?: Observable<any>;
  private sourceThree$?: Observable<any>;
  private subscription?: Subscription;

  // App methods

  clearSource() {
    if (this.subscription) {
      this.setState({ message: "Unsubscribe first" });
      return;
    }
    if (!this.sourceOne$) {
      this.setState({ message: "Already cleared" });
      return;
    }
    this.sourceOne$ = undefined;
    this.sourceTwo$ = undefined;
    this.sourceThree$ = undefined;
    this.setState({ message: "Cleared" });
  }

  addToSource() {
    if (this.sourceOne$) {
      this.setState({ message: "Already added" });
      return;
    }
    this.sourceOne$ = interval(1000);
    this.sourceTwo$ = interval(2000);
    this.sourceThree$ = interval(3000);
    this.setState({ message: "Added" });
  }

  subscribe() {
    if (!this.sourceOne$) {
      this.setState({ message: "No source" });
      return;
    }
    if (this.subscription) {
      this.setState({ message: "Already subscribed" });
      return;
    }
    this.subscription = zip(
      this.sourceOne$,
      this.sourceTwo$,
      this.sourceThree$
    ).subscribe(value => {
      this.setState({
        value: "[" + value[0] + ", " + value[1] + ", " + value[2] + "]"
      });
    });

    this.setState({ message: "Subscribed" });
  }

  unsubscribe() {
    if (!this.subscription) {
      this.setState({ message: "No subscription" });
      return;
    }
    this.subscription.unsubscribe();
    this.subscription = undefined;
    this.setState({ date: undefined, message: "Unsubscribed" });
  }

  // onPress methods

  clearOnPress = () => {
    console.log("clearOnPress");
    this.clearSource();
  };

  addOnPress = () => {
    console.log("addOnPress");
    this.addToSource();
  };

  subscribeOnPress = () => {
    console.log("subscribeOnPress");
    this.subscribe();
  };

  unsubscribeOnPress = () => {
    this.setState({ value: "", message: "Unsubscribe pressed" });
    this.unsubscribe();
  };

  // Component methods

  render() {
    return (
      <View style={styles.container}>
        <Padding styles={styles} />
        <Text>Zip V1.2</Text>
        <Padding styles={styles} />
        <Button styles={styles} onPress={this.clearOnPress}>
          Clear source
        </Button>
        <Padding styles={styles} />
        <Button styles={styles} onPress={this.addOnPress}>
          Add source
        </Button>
        <Padding styles={styles} />
        <Button styles={styles} onPress={this.subscribeOnPress}>
          Subscribe
        </Button>
        <Padding styles={styles} />
        <Button styles={styles} onPress={this.unsubscribeOnPress}>
          Unsubscribe
        </Button>
        <Padding styles={styles} />
        <Message styles={styles}>{this.state.value || ""}</Message>
        <Padding styles={styles} />
        <Message styles={styles}>{this.state.message || ""}</Message>
        <Padding styles={styles} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    backgroundColor: "#9f9fff",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    borderRadius: 10
  },
  buttonText: {
    color: "#ffffff"
  },
  padding: {
    height: 30
  },
  message: {
    backgroundColor: "#cfcfff",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  messageText: {
    fontSize: 30,
    color: "#9f9fff"
  },
  dateView: {
    backgroundColor: "#cfcfff",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  dateViewText: {
    fontSize: 16,
    color: "#9f9fff"
  }
});
