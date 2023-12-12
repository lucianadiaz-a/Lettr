import React, {useContext} from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import CardList from '../components/CardList';
import { listings } from '../data'
import { ListingContext } from '../components/ListingContext';


const SwipeScreen = () => {
    const { allCards } = useContext(ListingContext);
    return (
        <View style={styles.container}>
            <MainHeader title="Lettr"/>
            <ScrollView>
                <CardList list={allCards}></CardList>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    }, 
});

export default SwipeScreen;