import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor');
  }

  static getDerivedStateFromProps() {
    console.log('getDriverStateFromProps');
    return null;
  }

  render() {
    console.log('render');
    return (
      <View>
        <Text> index </Text>
      </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}

const styles = StyleSheet.create({});
