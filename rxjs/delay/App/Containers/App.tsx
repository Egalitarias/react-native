import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Observable, Subscription, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";
import { Button, Padding, Message } from "../Components";

const sourceOne$ = of(1, 2, 3, 4, 5, 6);

type Props = {};
export default class App extends Component<Props> {
  // State

  state = {
    value: "",
    message: ""
  };

  // Private variables

  private source$?: Observable<any>;
  private subscription?: Subscription;

  // App methods

  clearSource() {
    if (this.subscription) {
      this.setState({ message: "Unsubscribe first" });
      return;
    }
    if (!this.source$) {
      this.setState({ message: "Already cleared" });
      return;
    }
    this.source$ = undefined;
    this.setState({ message: "Cleared" });
  }

  addToSource() {
    if (this.source$) {
      this.setState({ message: "Already added" });
      return;
    }
    this.source$ = sourceOne$;
    this.setState({ message: "Added" });
  }

  square(value: number): Observable<number> {
    return of(value * value);
  }

  addOne(value: number): Observable<number> {
    return of(value + 1);
  }

  double(value: number): Observable<number> {
    return of(value * 2);
  }

  subscribe() {
    if (!this.source$) {
      this.setState({ message: "No source" });
      return;
    }
    if (this.subscription) {
      this.setState({ message: "Already subscribed" });
      return;
    }

    // empty() clears each Observable
    this.subscription = this.source$
      .pipe(concatMap(value => of(value).pipe(delay(1000))))
      .subscribe(value => {
        this.setState({
          value: value
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
        <Text>Delay V1.0</Text>
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
