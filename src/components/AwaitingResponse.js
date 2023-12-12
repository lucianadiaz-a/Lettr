import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { spacing, sizes, shadow, colors } from '../constants/theme';
import Icon from '../components/Icon';

const AwaitingResponse = ({list}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    return (
                        <Image source={item.image} style={styles.image}></Image>   
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 11,
        width: 368,
        height: 98,
        backgroundColor: '#D5D5D5',
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: 72,
        height: 72,
        margin: 10,
    }
});

export default AwaitingResponse;
