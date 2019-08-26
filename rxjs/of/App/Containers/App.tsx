/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { of, Observable, concat } from "rxjs";
import { Button, Padding } from "../Components";

type Props = {};
export default class App extends Component<Props> {
  // Private variables

  private source?: Observable<any>;

  // App methods

  clearSource() {
    this.source = of(new Date());
    console.log("Cleared");
  }

  addToSource() {
    if (this.source) {
      this.source = concat(this.source, of(new Date()));
      console.log("Added");
    } else {
      this.clearSource();
    }
  }

  addManyToSource() {
    if (this.source) {
      this.source = concat(this.source, of(new Date(), new Date(), new Date()));
      console.log("Added");
    } else {
      this.clearSource();
    }
  }

  subscribe() {
    if (this.source) {
      const subscribe = this.source.subscribe(val => console.log("of " + val));
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

  addManyOnPress = () => {
    console.log("addOnPress");
    this.addManyToSource();
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
        <Text>V1.5</Text>
        <Padding styles={styles} />
        <Button onPress={this.clearOnPress} styles={styles}>
          Clear
        </Button>
        <Padding styles={styles} />
        <Button onPress={this.addOnPress} styles={styles}>
          Add
        </Button>
        <Padding styles={styles} />
        <Button onPress={this.addManyOnPress} styles={styles}>
          Add Many
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
