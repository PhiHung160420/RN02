import React, { useState } from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const TouchedWithState = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsLogin(!isLogin)}
      >
        <Text>{isLogin ? 'Log in' : 'log out'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default TouchedWithState;
