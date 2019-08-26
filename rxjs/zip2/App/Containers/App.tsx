import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Observable, of, zip } from "rxjs";
import { filter } from "rxjs/operators";
import { Button, Message, Padding } from "../Components";

//Next step, try connecting TextInput value and onChange to Subjsets
// https://medium.com/@fahad19/using-rxjs-with-react-js-part-3-dispatching-events-from-component-1808d383cbf0

https: type Props = {};
export default class App extends Component<Props> {
  // State

  state = {
    firstName: "",
    lastName: "",
    phone: "",
    value: "",
    message: ""
  };

  // Private variables

  private firstName$?: Observable<string>;
  private lastName$?: Observable<string>;
  private phone$?: Observable<string>;

  componentDidMount() {}
  // App methods

  // onPress methods

  submitOnPress = () => {
    console.log("submitOnPress");
    this.firstName$ = of(this.state.firstName);
    this.lastName$ = of(this.state.lastName);
    this.phone$ = of(this.state.phone);

    zip(
      this.lastName$.pipe(filter(value => !value || value.length === 0))
    ).subscribe(() => {
      const validationMessage = "Last name is required";
      console.log(validationMessage);
      this.setState({ message: validationMessage });
    });

    zip(
      this.firstName$.pipe(filter(value => !value || value.length === 0))
    ).subscribe(() => {
      const validationMessage = "First name is required";
      console.log(validationMessage);
      this.setState({ message: validationMessage });
    });

    zip(
      this.firstName$.pipe(filter(value => value != "")),
      this.lastName$.pipe(filter(value => value != "")),
      this.phone$
    ).subscribe(fields => {
      console.log("zip complete");
      console.log("fields [" + fields + "]");
      this.setState({ message: fields[0] + " " + fields[1] + " " + fields[2] });
    });
  };

  // Component methods

  render() {
    return (
      <View style={styles.container}>
        <Padding styles={styles} />
        <Text>Zip2 V1.3</Text>
        <Padding styles={styles} />
        <TextInput
          placeholder="First name"
          style={styles.textInput}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <Padding styles={styles} />
        <TextInput
          placeholder="Last name"
          style={styles.textInput}
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <Padding styles={styles} />
        <TextInput
          placeholder="Phone"
          style={styles.textInput}
          onChangeText={phone => this.setState({ phone })}
          value={this.state.phone}
          keyboardType="phone-pad"
        />
        <Padding styles={styles} />
        <Button styles={styles} onPress={this.submitOnPress}>
          Submit
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
  },
  textInput: {
    width: 300,
    fontSize: 30,
    color: "#9f9fff",
    paddingHorizontal: 20,
    borderWidth: 7,
    borderColor: "#9f9fcf",
    backgroundColor: "#cfcfff",
    borderRadius: 10
  }
});
