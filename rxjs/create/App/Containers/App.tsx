/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Observable, concat } from "rxjs";
import { Button, Padding } from "../Components";

type Props = {};
export default class App extends Component<Props> {
  // Private variables

  private source?: Observable<Date>;

  // App methods

  // create() isnt usable with typescript so use new Observable<T>
  create(): Observable<Date> {
    return new Observable<Date>(observer => {
      observer.next(new Date());
    });
  }

  clearSource() {
    this.source = this.create();
    console.log("Cleared");
  }

  addToSource() {
    if (this.source) {
      this.source = concat<Date>(this.source, this.create());
      console.log("Added");
    } else {
      this.clearSource();
    }
  }

  subscribe() {
    if (this.source) {
      const subscribe = this.source.subscribe(val =>
        console.log("create " + val)
      );
    } else {
      console.log("no source");
    }
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

  // Component methods

  render() {
    return (
      <View style={styles.container}>
        <Padding styles={styles} />
        <Text>RxJS create V1.0</Text>
        <Padding styles={styles} />
        <Button onPress={this.clearOnPress} styles={styles}>
          Clear
        </Button>
        <Padding styles={styles} />
        <Button onPress={this.addOnPress} styles={styles}>
          Add
        </Button>
        <Padding styles={styles} />
        <Button onPress={this.subscribeOnPress} styles={styles}>
          Subscribe
        </Button>
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
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
  }
});
