import React, { useState, useEffect } from 'react';
import {
  Modal, View, Text, TextInput, TouchableOpacity, StyleSheet,
  Image, Alert, TouchableWithoutFeedback, Keyboard,
  ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';

export default function UpdateFurnitureModal({ modalVisible, setVisible, itemData, onUpdate }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (itemData) {
      setName(itemData.name || '');
      setPrice(itemData.price || '');
      setImage(itemData.image || itemData.imageUrl || '');
    }
  }, [itemData]);

  const handleUpdate = () => {
    if (!name || !price || !image) {
      Alert.alert('All fields are required');
      return;
    }

    const updatedData = {
      name,
      price,
      imageUrl: image,
    };

    onUpdate(updatedData);
    setVisible(false);
  };

  if (!modalVisible) return null;

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setVisible(false)}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.modalContainer}
          >
            <View style={styles.modalContent}>
              <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                keyboardShouldPersistTaps="handled"
              >
                <Text style={styles.label}>Edit Furniture</Text>

                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Name"
                  style={styles.input}
                />

                <TextInput
                  value={price}
                  onChangeText={setPrice}
                  placeholder="Price"
                  keyboardType="numeric"
                  style={styles.input}
                />

                <TextInput
                  value={image}
                  onChangeText={setImage}
                  placeholder="Image URL"
                  style={styles.input}
                />

                {image ? (
                  <Image source={{ uri: image }} style={styles.imagePreview} />
                ) : (
                  <Text style={{ marginBottom: 10 }}>No Image</Text>
                )}

                <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancel}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    borderWidth: 2,
    borderColor: '#2e86de',
    maxHeight: '90%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  imagePreview: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2e86de',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancel: {
    alignItems: 'center',
  },
  cancelText: {
    color: '#888',
    fontSize: 16,
  },
});
