import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import gameData from '../../Data/gameData';

export default class BindingData extends Component {
  renderGameData = () => {
    return gameData.map((item, index) => {
      return (
        <View key={index} style={styles.container}>
          <View
            style={[
              styles.GameContainer,
              {backgroundColor: item.backgroundColor},
            ]}>
            <Image style={styles.image} source={item.icon} />
            <View style={styles.ContentGame}>
              <Text style={styles.titleGame}>{item.title}</Text>
              <Text style={styles.subTitleGame}>{item.subTitle}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  render() {
    return <>{this.renderGameData()}</>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#525659',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GameContainer: {
    borderColor: '#fff',
    width: '90%',
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ContentGame: {
    width: '70%',
    flexDirection: 'column',
    marginLeft: 10,
  },
  titleGame: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginLeft: 5,
  },
  subTitleGame: {
    color: '#f8f8ff',
    opacity: 0.7,
  },
});
