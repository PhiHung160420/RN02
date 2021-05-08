import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import IconComponent from './IconComponent';
import {IconHaHa} from '../../Data/Icon';
import {IconAngry} from '../../Data/Icon';
import {IconCare} from '../../Data/Icon';
import {IconLike} from '../../Data/Icon';
import {IconLove} from '../../Data/Icon';
import {IconSad} from '../../Data/Icon';

export default class IconWithState extends Component {
  constructor(props) {
    super(props);
    this.state = {urlIcon: IconLike};
  }

  clickIconHandler = url => {
    this.setState({
      urlIcon: url,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bạn đang cảm thấy như thế nào?</Text>
        <Image style={styles.image} source={this.state.urlIcon}></Image>
        <View style={styles.icon_menu}>
          <IconComponent icon={IconHaHa} clickIcon={this.clickIconHandler} />
          <IconComponent icon={IconAngry} clickIcon={this.clickIconHandler} />
          <IconComponent icon={IconCare} clickIcon={this.clickIconHandler} />
          <IconComponent icon={IconLike} clickIcon={this.clickIconHandler} />
          <IconComponent icon={IconLove} clickIcon={this.clickIconHandler} />
          <IconComponent icon={IconSad} clickIcon={this.clickIconHandler} />
        </View>
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
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  icon_menu: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
