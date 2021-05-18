import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Rock} from '../../Data/RockPaperScissor';

export default class ResultComponent extends Component {
  render() {
    return (
      <>
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>Score: {this.props.score}</Text>
          <Text style={styles.infoText}>Time: {this.props.time}</Text>
        </View>
        <View style={styles.buttonConent}>
          <LinearGradient
            colors={['#7D1A7E', '#BD1AD9']}
            style={styles.buttonPlay}>
            <TouchableOpacity
              disabled={this.props.disable}
              onPress={() => this.props.onPressPlayButton(Rock)}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#C8A218', '#ffce35']}
            style={styles.buttonReset}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  infoText: {
    color: '#00ffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlay: {
    backgroundColor: '#ff00ff',
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonReset: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
});
