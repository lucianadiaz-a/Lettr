import React from 'react';
import {Text, View, StyleSheet, ScrollView } from "react-native"
import MainHeader from '../components/MainHeader';
import { colors } from '../constants/theme';
import AwaitingResponse from '../components/AwaitingResponse';
import { previews, chats } from '../data'
import ChatList from '../components/ChatList';

const ChatScreen = () => {
    return (
        <>
        <View>
            <MainHeader title='Chats'/>
            <Text style={styles.awaiting} >Awaiting Response</Text>
            <AwaitingResponse list={previews}></AwaitingResponse>
            <Text style={styles.matches}>Matches</Text>
            <ChatList list={chats}></ChatList>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    awaiting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.lightOrange,
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 10,
    },
    matches: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.lightOrange,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
    }
})

export default ChatScreen;