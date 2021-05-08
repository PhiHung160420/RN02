import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default class DemoFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 20,
          height: 100,
          marginHorizontal: 5,
          marginVertical: 10,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`,
        }}>
        <Text>Item {item}</Text>
      </View>
    );
  };

  listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.listItem}
          keyExtractor={item => item.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});
