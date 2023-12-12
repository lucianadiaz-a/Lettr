import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { spacing, colors } from '../constants/theme';
import Icon from '../components/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MessageModal from '../components/MessageModal'; 
import AmenitiesTable from '../components/AmenitiesTable';



const ListingDetailsScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { listing } = route.params;

  const [selectedItem, setSelectedItem] = useState(null);
const [isModalVisible, setModalVisible] = useState(false);

const showAlert = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
};

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.backButton, { marginTop: insets.top }]}>
          <Icon icon='blackArrow' onPress={navigation.goBack} />
        </View>
        <View style={styles.imageBox}>
          <Image source={listing.image1} style={styles.image} />
        </View>
        <View style={styles.header}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{listing.address}</Text>
            </View>
            <View style={styles.byline}>
                <Text style={styles.neighborhood}>{listing.neighborhood} • {listing.bed_bath}</Text>
            </View>
            <View style={styles.roomDate}>
                <View style={styles.roomContainer}>
                    <Text style={styles.roomText}>1 room available</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{listing.date_range}</Text>
                </View>
            </View>
        </View>
        <View style={styles.hostContainer}>
            <Image source={listing.profilepic} style={styles.hostImage} />
            <View style={styles.hostByName}>
                <Text style={styles.hostedBy}>Hosted by:</Text>
                <Text style={styles.hostName}>{listing.host}</Text>
            </View>
        </View>
        <View style={styles.subway}>
            <Text style={styles.subwayNearby}>Subway Lines Nearby:</Text>
            <View style={styles.subwayIcons}>
                <Image source={listing.subway} style={styles.subwayImage}/>
            </View>
        </View>
        <AmenitiesTable amenities={listing.amenities} />
        <View style={styles.map}>
          <Image source={listing.map} style={styles.mapImage}/>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText} onPress={() => showAlert(navigation)}>Message</Text>
        </TouchableOpacity>
        <View style={styles.price}>
          <Text style={styles.priceText}>{listing.price}</Text>
        </View>
      </View>
      <MessageModal
        isVisible={isModalVisible}
        onClose={closeModal}
        item={selectedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  imageBox: {
    position: 'absolute',
  },
  image: {
    left: -50,
    width: 600,
    height: 350,
    resizeMode: 'cover',
  },
  header: {
    marginLeft: 15,
  },
  addressContainer: {
    marginTop: 360,
    marginBottom: 3,
  },
  address: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.black,
  },
  neighborhood: {
    fontWeight: 'bold',
    color: '#797c82',
    fontSize: 16
  },
  byline: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  roomDate: {
    flexDirection: 'row',
  },
  roomText: {
    color: colors.white,
  },
  roomContainer: {
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
    color: colors.white,
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
  footer: {
    backgroundColor: colors.white,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    backgroundColor: '#6CC46A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
    marginTop: 10,
    width: 140,
  },
  messageButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginTop: 5,
    marginLeft: 18
  },
  price: {
    marginVertical: 15,
    marginLeft: 15,
    marginBottom: 20,
    justifyContent: 'center'
  },
  priceText: {
    fontSize: 30,
    fontWeight: 'medium'
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 15,
    gap: 20,
  },
  hostByName:{
    flexDirection: 'column',
    marginTop: 25,
  },
  hostedBy: {
    fontSize: 18,
    color: 'rgba(255, 161, 74, 0.80)',
    textAlignVertical: 'center', 
  },
  hostImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginTop: 20,
    marginRight: spacing.s,
  },
  hostName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  subwayNearby: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    color: 'black',
  },
  subwayIcons: {
    marginLeft: 15,
    marginTop: 15,
  },
  subwayImage: {
    alignContent: 'center',
  },
  amenities: {
    marginLeft: 15,
    marginTop: 15,
  },
  amenitiesText: {
    color: '#797c82'
  },
  map: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  mapImage: {
    borderRadius: 20,
  }
});

export default ListingDetailsScreen;
