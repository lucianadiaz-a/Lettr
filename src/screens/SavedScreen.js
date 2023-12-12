import React, {useContext} from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import {colors} from '../constants/theme';
import SavedHeader from '../components/SavedHeader';
import SavedList from '../components/SavedList';
import { ListingContext } from '../components/ListingContext'; 

const SavedScreen = () => {
    const { savedCards } = useContext(ListingContext);
    
    return (
        <View style={styles.container}>
            <SavedHeader title="Saved"/>
            <SavedList list={savedCards}></SavedList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    }, 
});

export default SavedScreen;