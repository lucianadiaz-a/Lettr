import React, {useState, useContext, useEffect} from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { spacing, sizes, shadow, colors } from '../constants/theme';
import Icon from '../components/Icon';
import MessageModal from '../components/MessageModal'; 
import { ListingContext } from '../components/ListingContext'; 
import { useNavigation } from '@react-navigation/native';


const CARD_WIDTH = 345;
const CARD_HEIGHT = 260;

const CardList = ({list}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const showAlert = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };
    
    const closeModal = () => {
        setModalVisible(false);
    };

    const { allCards, setAllCards, savedCards, setSavedCards } = useContext(ListingContext);

    const handleSave = (item) => {
        const updatedAllCards = allCards.filter((card) => card.id !== item.id);
        setAllCards(updatedAllCards);
        setSavedCards((prevSavedCards) => [...prevSavedCards, item]);
    };

    const navigation = useNavigation()

    return (
        <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
                return (
                    <TouchableOpacity 
                        style={{marginLeft:spacing.l, marginTop: 20}}
                        key={item.id}
                        onPress={() => {
                            navigation.navigate('ListingDetails', {listing: item})
                        }}
                    >
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image source={item.image1} style={styles.image}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.address}>{item.address}</Text>
                                <View style={styles.byline}>
                                    <Icon icon='Pin' size={15}/>
                                    <Text style={styles.neighborhood}>{item.neighborhood} • {item.bed_bath}</Text>
                                </View>
                                <View style={styles.priceDate}>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceText}>{item.price}</Text>
                                    </View>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.dateText}>{item.date_range}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.saveButton}>
                                <Icon style={styles.saveIcon} icon='orangeSaved' onPress={() => handleSave(item)}/>
                            </TouchableOpacity>
                            <View style={styles.messageListing}>
                                <Icon style={styles.message} icon='orangeChat' onPress={() => showAlert(item)}/>
                            </View>
                        </View>
                        <MessageModal
                            isVisible={isModalVisible}
                            onClose={closeModal}
                            item={selectedItem}
                        />
                    </TouchableOpacity>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: CARD_HEIGHT -105,
        left: 16,
    },
    address: {
        fontSize: 31,
        fontWeight: 'bold',
        color: colors.white,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    neighborhood: {
        fontWeight: 'bold',
        color: colors.white,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    byline: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    priceDate: {
        flexDirection: 'row',
    },
    priceText: {
        color: colors.white
    },
    priceContainer: {
        marginRight: 10,
        display: 'flex',
        backgroundColor: '#6CC46A',
        borderRadius: 6,
        gap: 10,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        color: colors.white
    },
    dateContainer: {
        display: 'flex',
        backgroundColor: 'rgba(255, 161, 74, 0.80)',
        borderRadius: 6,
        gap: 10,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#ffffff',
        borderRadius: 20.5,
        boxShadow: '0px 4px 4px #00000040',
        height: 41,
        left: 9,
        position: 'absolute',
        top: 9,
        width: 41,
        zIndex: 1, 
    },
    messageListing: {
        backgroundColor: '#ffffff',
        borderRadius: 20.5,
        boxShadow: '0px 4px 4px #00000040',
        height: 41,
        left: 295,
        position: 'absolute',
        top: 9,
        width: 41,
    },
    saveIcon: {
        height: 33,
        left: 4,
        position: 'absolute',
        top: 4,
        width: 33,
    },
    message: {
        height: 32,
        left: 5,
        position: 'absolute',
        top: 4,
        width: 32,
    },
});

export default CardList;
