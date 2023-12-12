import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { spacing, sizes, shadow, colors } from '../constants/theme';
import Icon from '../components/Icon';

const ChatList = ({ list }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity style={{ marginLeft: spacing.l, marginTop: 20 }}>
            <View style={styles.box}>
              <View style={styles.chat}>
                <View style={styles.divider}></View>
                <Text style={styles.name}>{item.name_address}</Text>
                <Text style={styles.textWrapper}>{item.message}</Text>
                <Image style={styles.maskGroup} source={item.image} />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width: 350,
    height: 90,
  },
  chat: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    height: 1,
    alignItems: 'flex-start',
    position: 'absolute',
    top: 89,
    left: 0,
    backgroundColor: '#d9d9d9',
  },
  textWrapper: {
    position: 'absolute',
    width: 350,
    top: 41,
    left: 90,
    fontWeight: '700',
    color: '#a5a2a2b2',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: -0.24,
    lineHeight: 20, // Specify a numeric value for lineHeight
  },
  name: {
    position: 'absolute',
    width: 350,
    top: 14,
    left: 90,
    fontWeight: '700',
    color: '#000000',
    fontSize: 18,
    textAlign: 'left',
    letterSpacing: -0.24,
    lineHeight: 20, // Specify a numeric value for lineHeight
  },
  maskGroup: {
    position: 'absolute',
    width: 72,
    height: 72,
    top: 0,
    left: 1,
  },
});

export default ChatList;
