// AddFurnituremodal.js
import {
  View, Text, TextInput, Modal, TouchableOpacity, ScrollView, Alert,
  Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function AddFurnituremodal({ modalvisible, setVisible, title }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isUploading, setUploading] = useState(false);

  useEffect(() => {
    if (!modalvisible) {
      setName('');
      setPrice('');
      setImageUri(null);
    }
  }, [modalvisible]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!name || !price || !imageUri) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      setUploading(true);
      let finalImageUrl = imageUri;

      if (!imageUri.startsWith('http')) {
        const formData = new FormData();
        formData.append('file', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'furniture.jpg',
        });
        formData.append('upload_preset', 'First_use_cloudinary');
        formData.append('cloud_name', 'djwrwtwr2');

        const cloudRes = await fetch('https://api.cloudinary.com/v1_1/djwrwtwr2/image/upload', {
          method: 'POST',
          body: formData,
        });

        const cloudData = await cloudRes.json();
        finalImageUrl = cloudData.secure_url;
      }

      const payload = {
        name,
        price,
        imageUrl: finalImageUrl,
        createdAt: new Date().toISOString(),
      };

      await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Furnitures.json',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      Alert.alert('Success', 'Furniture saved successfully');
      setVisible(false);
    } catch (error) {
      console.error('Error saving furniture:', error);
      Alert.alert('Error', 'Failed to save furniture');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal visible={modalvisible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }} keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <FontAwesome name="close" size={24} color="gray" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                  <Text>Select Furniture Image</Text>
                </TouchableOpacity>

                {imageUri && (
                  <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 10, marginVertical: 10 }} />
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Furniture Name</Text>
                  <View style={styles.inputRow}>
                    <MaterialCommunityIcons name="ornament" size={24} color="gray" />
                    <TextInput
                      placeholder="Enter name"
                      value={name}
                      onChangeText={setName}
                      style={styles.textInput}
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Price</Text>
                  <View style={styles.inputRow}>
                    <FontAwesome name="money" size={24} color="gray" />
                    <TextInput
                      placeholder="2000 PKR"
                      value={price}
                      keyboardType="numeric"
                      onChangeText={setPrice}
                      style={styles.textInput}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={handleSave}
                  disabled={isUploading}
                  style={[styles.saveButton, isUploading && { opacity: 0.6 }]}
                >
                  <Text style={styles.saveText}>{isUploading ? 'Saving...' : 'SAVE'}</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default AddFurnituremodal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    borderColor: '#ea580c',
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#aaa',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 4,
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#555',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  saveText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
