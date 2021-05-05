import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Touched = () => {
  const handlerOnPress = param => {
    console.log(param);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnOpacity}
        onPress={() => handlerOnPress('clicked')}
        activeOpacity={0.5}>
        <Text style={styles.text_opacity}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.btnHighlight}
        onPress={() => {
          Alert.alert('You clicked');
        }}
        underlayColor="red">
        <Text style={styles.text_highlight}>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback
        style={styles.btnWithoutFeedback}
        onPress={() => {
          Alert.alert('You clicked');
        }}>
        <Text style={styles.text_withoutfeedback}>
          TouchableWithoutFeedback
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOpacity: {
    alignItems: 'center',
    backgroundColor: '#f76363',
    padding: 10,
  },
  text_opacity: {
    fontSize: 20,
    color: 'white',
  },
  btnHighlight: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#1c0cf5',
    padding: 10,
  },
  text_highlight: {
    fontSize: 20,
    color: 'white',
  },
  btnWithoutFeedback: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#2ef107',
    padding: 10,
  },
  text_withoutfeedback: {
    fontSize: 20,
    color: 'black',
  },
});

export default Touched;
