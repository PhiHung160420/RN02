import React from 'react'
import { StyleSheet, View } from 'react-native';

const BoxBlue = () => {
    return (
        <View style={styles.boxBlue}></View>
    )
};

const styles = StyleSheet.create({
    boxBlue: {
      flex: 1,
      backgroundColor: 'blue',
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 15
    }
});

export default BoxBlue;
