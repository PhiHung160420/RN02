import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class IconComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.icon_container}
        onPress={() => this.props.clickIcon(this.props.icon)}>
        <Image style={styles.iconStyle} source={this.props.icon}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 50,
    height: 50,
  },
});
