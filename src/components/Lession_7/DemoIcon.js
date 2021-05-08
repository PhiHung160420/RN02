import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default class DemoIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="holiday-village" size={100} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
