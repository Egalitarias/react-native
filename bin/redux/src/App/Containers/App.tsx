import React, { Component } from "react";
import {
  Button,
  FlatList,
  Platform,
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../actions/place";
import { ListItem } from "../Components";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.add(this.state.placeName);
  };

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value
    });
  };

  placesOutput = () => {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <ListItem placeName={info.item.value} />}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{this.placesOutput()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
