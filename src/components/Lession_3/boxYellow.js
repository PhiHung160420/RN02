import React from 'react'
import { StyleSheet, View } from 'react-native';

const BoxYellow = () => {
    return (
        <View style={styles.boxYellow }></View>
    )
};

const styles = StyleSheet.create({
    boxYellow: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F4B940',
        margin: 20, 
        borderRadius: 20
    }
})

export default BoxYellow;
