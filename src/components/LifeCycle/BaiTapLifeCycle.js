import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import ProductItem from './ProductItem';

export default class BaiTapLifeCycle extends Component {
  state = {
    product: {},
    listProduct: [],
  };
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://svcy3.myclass.vn/api/Product',
    })
      .then(res =>
        this.setState({
          product: res.data.content[0],
          listProduct: res.data.content,
        }),
      )
      .catch(err => {
        console.log(err);
      });
  }
  _renderItem = ({item}) => {
    return <ProductItem product={this.state.product} />;
  };
  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.listProduct}
            numColumns={2}
            data={this.state.listProduct}
            keyExtractor={(item, index) => `${item.name}_${index}`}
            renderItem={this._renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#c6e9e9',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
