import React, { PureComponent } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from "../../routes";

/**
 * The Home screen
 */
export default class HomeScreen extends PureComponent<NavigationScreenProps> {
  // screen navigation options
  static navigationOptions = (
    screenProps: NavigationScreenProps
  ): NavigationStackScreenOptions => {
    // Navigate to details view
    const _buttonRightPress = (event: GestureResponderEvent) => {
      screenProps.navigation.navigate(ROUTES.DetailScreen);
    };
    // Open modal view
    const _buttonleftPress = (event: GestureResponderEvent) => {
      screenProps.navigation.navigate(ROUTES.ModalScreen);
    };

    return {
      headerStyle: {
        elevation: 0,
        backgroundColor: "darkslategray"
      },
      headerLeft: (
        <Icon.Button
          name="menu"
          backgroundColor="transparent"
          underlayColor="transparent"
          color="wheat"
          onPress={_buttonleftPress}
        />
      ),
      headerRight: (
        <Icon.Button
          name="apps"
          backgroundColor="transparent"
          underlayColor="transparent"
          color="wheat"
          onPress={_buttonRightPress}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
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
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
