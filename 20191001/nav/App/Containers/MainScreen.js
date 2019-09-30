import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ROUTES from '../Routes';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.nextOnPress = this.nextOnPress.bind(this);
  }

  nextOnPress() {
    this.props.navigation.navigate(ROUTES.NextScreen);
  }

  render() {
    return (
      <>
        <View style={styles.background} />
        <View style={styles.titleText}>
          <Text style={styles.titleFont}>Main</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={this.nextOnPress}>
            <View style={styles.buttonText}>
              <Text style={styles.buttonFont}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    marginBottom: 0,
    marginTop: 0,
    padding: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#afcfef',
  },
  titleText: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9fafef',
  },
  titleFont: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  nextButton: {
    position: 'absolute',
    padding: 0,
    marginLeft: Dimensions.get('window').width * 0.76,
    marginTop: Dimensions.get('window').width * 0.035,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor: '#5f7fef',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
