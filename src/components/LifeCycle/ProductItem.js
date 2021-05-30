import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const ProductItem = ({product}) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.productItemHeader}>
        <View style={{flexDirection: 'row'}}>
          <Material name="attach-money" size={25} color="#09d3d3" />
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
        <Icon name="heart" size={30} color="red" />
      </View>
      <Image source={{uri: product.image}} style={styles.productImage} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.productName}>{product.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    borderRadius: 15,
    backgroundColor: '#fff',
    width: (width - 80) / 2,
    height: 230,
    shadowColor: '#000',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  productImage: {
    width: 160,
    height: 110,
    alignSelf: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#283966',
  },
  productItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  productName: {
    fontSize: 20,
    color: '#283966',
    fontWeight: '500',
  },
  productItemFlexEnd: {
    alignSelf: 'flex-end',
  },
});

export default ProductItem;
