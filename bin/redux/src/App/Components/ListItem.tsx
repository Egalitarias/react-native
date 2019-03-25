import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {};
export class ListItem extends Component<Props> {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.listItem}>
          <Text>{this.props.placeName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee"
  }
});
