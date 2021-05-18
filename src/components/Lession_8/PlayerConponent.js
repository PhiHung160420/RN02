import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class PlayerConponent extends Component {
  render() {
    return (
      <View style={styles.playerContentBox}>
        <View style={styles.styleBorder}>
          <Image style={styles.imageGame} source={this.props.imageGame} />
        </View>
        <View style={styles.triangle}></View>
        <Image style={styles.imagePlayer} source={this.props.imagePlayer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContentBox: {
    flex: 1,
    alignItems: 'center',
  },
  styleBorder: {
    width: 90,
    height: 90,
    borderWidth: 4,
    borderColor: 'yellow',
    borderRadius: 10,
  },
  imageGame: {
    width: 80,
    height: 80,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'yellow',
    borderLeftColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  imagePlayer: {
    width: 120,
    height: 120,
  },
});
