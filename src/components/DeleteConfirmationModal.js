// DeleteConfirmationModal.js
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';
import { colors } from '../constants/theme';

const DeleteConfirmationModal = ({ isVisible, onClose, onDelete, listingAddress }) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.modalText}>Are you sure you want to delete the listing at:</Text>
          <Text style={styles.listingAddress}>{listingAddress}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.noButton]} onPress={onClose}>
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={onDelete}>
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightOrange,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 23,
    color: '#FF7A00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listingAddress: {
    marginBottom: 20,
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    width: 90,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  noButton: {
    backgroundColor: '#E64646', // Red background for "NO" button
  },
  yesButton: {
    backgroundColor: '#6CC46A', // Green background for "YES" button
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DeleteConfirmationModal;
