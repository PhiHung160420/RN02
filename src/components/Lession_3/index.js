import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import BoxYellow from './boxYellow';
import BoxBlue from './boxBlue';

const Lession3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenView}>
        <BoxYellow />
        <BoxYellow />
      </View>
      <View style={styles.purpleView}>
        <View style={styles.ViewTopBlue}>
          <BoxBlue />
          <BoxBlue />
        </View>
        <View style={styles.viewBottomBlue}>
          <BoxBlue />
          <BoxBlue />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenView: {
    flex: 1,
    backgroundColor: '#96CC96',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginBottom: 15,
  },
  purpleView: {
    flex: 1,
    backgroundColor: '#c5c5f7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ViewTopBlue: {
    flex: 1,
    flexDirection: 'row',
  },
  viewBottomBlue: {
    flex: 1,
    flexDirection: 'row',
  },
  boxBlue: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 15,
  },
});

export default Lession3;
