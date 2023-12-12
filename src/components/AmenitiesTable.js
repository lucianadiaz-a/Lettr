// AmenitiesTable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AmenitiesTable = ({ amenities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amenities</Text>
      <View style={styles.table}>
        {amenities.map((amenity, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.amenityText}>{amenity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
  },
  table: {
    marginLeft: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bullet: {
    marginRight: 5,
    fontSize: 16,
    color: '#797c82',
  },
  amenityText: {
    fontSize: 16,
    color: '#797c82',
  },
});

export default AmenitiesTable;
