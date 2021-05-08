import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={this.props.avatar} />
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
