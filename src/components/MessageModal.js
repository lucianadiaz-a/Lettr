import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
import Icon from '../components/Icon'; 
import { colors } from '../constants/theme';

const MessageModal = ({ isVisible, onClose, item }) => {
  const [message, setMessage] = useState('');

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={() => onClose()}>
            <Icon icon="Close" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Would you like to send this user a message?</Text>
          <TextInput
            style={styles.messageInput}
            placeholder="Hi! My name is John Doe and I am interested in subletting your apartment. Is is still available?"
            multiline={true}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity onPress={() => onClose()} style={styles.messange}>
            <Text style={styles.messangeText}>Send Message</Text>
          </TouchableOpacity>
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
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#FF7A00'
  }, 
  messange: {
    backgroundColor: '#6CC46A',
    borderRadius: 5,
    margin: 15,
    height: 30,
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.3,         
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messangeText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 15,
    height: 80,
  }
});

export default MessageModal;
