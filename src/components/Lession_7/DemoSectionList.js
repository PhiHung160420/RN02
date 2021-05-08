import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class DemoSectionList extends Component {
  DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

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
        <Text>{item}</Text>
      </View>
    );
  };

  renderSectionHeader = ({section: {title}}) => {
    return <Text style={styles.itemHeader}>{title}</Text>;
  };
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={this.renderSectionHeader}
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
  itemHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
