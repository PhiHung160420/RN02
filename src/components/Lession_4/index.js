import React from 'react';
import {Image, View} from 'react-native';

const Lession4 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          width: '90%',
          height: '90%',
        }}
        source={require('../../../images/lanscape.jpg')}
        resizeMode="contain"></Image>
    </View>
  );
};

export default Lession4;
