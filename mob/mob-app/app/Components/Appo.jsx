import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function Appo() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Popup" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        transparent={true} // makes the background semi-transparent
        animationType="slide" // or "fade" or "none"
        onRequestClose={() => setModalVisible(false)} // for Android back button
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>This is a popup modal!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  }
});
