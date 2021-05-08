import React, {Component} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackInTime from 'react-native-vector-icons/Entypo';
import IosPeople from 'react-native-vector-icons/Ionicons';
import {listFriend, listAddFriend} from '../../Data/zaloData';
import Profile from './Profile';

export default class ZaloApp extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.listBox}>
        <View style={styles.infoFriend}>
          <Image style={styles.avatar} source={item.image} />
          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.mutualFriends}>
              {item.mutualFriends} bạn chung
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.btnAddFriend}>
            <Text style={{fontSize: 15, fontWeight: '200'}}>Kết bạn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleList}>
          <BackInTime name="back-in-time" size={30} color="black" />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5}}>
            Danh sách tìm kiếm gần đây
          </Text>
        </View>
        <View style={styles.listFriend}>
          {listFriend.map((item, index) => {
            return <Profile key={index} avatar={item.image} name={item.name} />;
          })}
        </View>
        <View style={styles.titleAddFriend}>
          <IosPeople name="ios-people" size={30} color="black" />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5}}>
            Gợi ý kết bạn
          </Text>
        </View>
        <FlatList
          data={listAddFriend}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleList: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: Platform.OS == 'ios' ? 20 : 5,
  },
  listFriend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  titleAddFriend: {
    flexDirection: 'row',
    marginLeft: 5,
    marginVertical: 5,
  },
  listAddFriend: {
    flexDirection: 'column',
  },
  listBox: {
    backgroundColor: '#dcdcdc',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  infoFriend: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mutualFriends: {
    fontSize: 16,
  },
  btnAddFriend: {
    backgroundColor: '#a0a2f7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
