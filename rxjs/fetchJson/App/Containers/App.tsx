import React, { Component, createRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Observable, Subscription, from, of, Observer } from "rxjs";
import { delay, pluck, mergeMap, map, mergeAll } from "rxjs/operators";
import { Button, Padding, Message, DateView } from "../Components";

type Props = {};
export default class App extends Component<Props> {
  // State

  state = {
    value: "",
    message: ""
  };

  componentDidMount() {
    this.setState({ date: undefined });
  }

  // Private variables

  private source$?: Observable<any>;
  private subscription?: Subscription;

  // App methods

  createFetchObservable(url: Observable<string>): Observable<any> {
    return new Observable<any>(observer => {
      url.subscribe(data => {
        try {
          fetch(data).then(response => {
            observer.next(response.json);
          });
        } catch (e) {
          console.log("fetch exception");
          observer.error(e);
        }
      }),
        observer.error.bind(observer),
        observer.complete.bind(observer);
    });
  }

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
    this.source$ = from([
      {
        name: "UTC",
        url: "http://worldclockapi.com/api/json/utc/now"
      },
      {
        name: "EST",
        url: "http://worldclockapi.com/api/json/est/now"
      },
      {
        name: "EST",
        url: "http://worldclockapi.com/api/json/pst/now"
      }
    ]);
    this.setState({ message: "Added" });
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

    this.createFetchObservable(
      of("http://worldclockapi.com/api/json/pst/now")
    ).subscribe(value => {
      this.setState({
        value: value
      });
    });
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
    this.setState({ message: "Unsubscribe pressed" });
    this.unsubscribe();
  };

  // Component methods

  render() {
    return (
      <View style={styles.container}>
        <Padding styles={styles} />
        <Text>FetchJson V1.0</Text>
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
