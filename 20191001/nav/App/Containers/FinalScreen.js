import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import ROUTES from "../Routes";
import { IosNotchPadding } from "../Screen";

export default class FinalScreen extends Component {
  constructor(props) {
    super(props);

    this.backOnPress = this.backOnPress.bind(this);
    this.nextOnPress = this.nextOnPress.bind(this);
  }

  backOnPress() {
    this.props.navigation.goBack(null);
  }

  nextOnPress() {
    this.props.navigation.navigate(ROUTES.NextScreen);
  }

  render() {
    return (
      <>
        <View style={styles.background} />
        <View style={styles.titleText}>
          <Text style={styles.titleFont}>Final</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this.backOnPress}
          >
            <View style={styles.buttonText}>
              <Text style={styles.buttonFont}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#afcfef"
  },
  titleText: {
    position: "absolute",
    marginTop: IosNotchPadding(),
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9fafef"
  },
  titleFont: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000"
  },
  backButton: {
    position: "absolute",
    padding: 0,
    marginLeft: Dimensions.get("window").width * 0.04,
    marginTop: IosNotchPadding() + Dimensions.get("window").width * 0.035,
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.1,
    backgroundColor: "#5f7fef",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#000000",
    textAlign: "center"
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  }
});
