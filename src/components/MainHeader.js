import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from '../components/Icon';
import {sizes, spacing} from '../constants/theme';


const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleSavedPress = () => {
        navigation.navigate('Saved'); 
    };

    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
            <TouchableOpacity onPress={handleSavedPress}>
                <Icon icon='Saved'/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Icon icon='Preferences'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffa654',
    },
})

export default MainHeader;