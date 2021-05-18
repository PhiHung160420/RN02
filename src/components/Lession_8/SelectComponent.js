import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelect: '',
    };
  }

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disable}
        key={this.props.key}
        activeOpacity={0.2}
        onPress={() => this.props.setUrlImage(this.props.imageSource)}>
        <View style={styles.boxSelectContent}>
          <Image style={styles.imageGame} source={this.props.imageSource} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  boxSelectContent: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'black',
    padding: 5,
    borderWidth: 3,
    borderColor: 'yellow',
  },
  imageGame: {
    width: 80,
    height: 80,
  },
});
