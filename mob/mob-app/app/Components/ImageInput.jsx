import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ImageInput() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled');
        } else if (response.errorCode) {
          console.log('Error: ', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const takePhoto = () => {
    launchCamera(
      { mediaType: 'photo', saveToPhotos: true, quality: 1 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled');
        } else if (response.errorCode) {
          console.log('Error: ', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View className="flex-1 justify-center items-center  px-4">
      <View className="flex-row space-x-4 mb-6">
        <TouchableOpacity
          onPress={pickImage}
          className="bg-orange-500 px-5 py-3 rounded-xl shadow-md active:bg-orange-600"
        >
          <Text className="text-white text-base font-semibold">Pick Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={takePhoto}
          className="bg-orange-500 px-5 py-3 rounded-xl shadow-md active:bg-orange-600"
        >
          <Text className="text-white text-base font-semibold">Take Photo</Text>
        </TouchableOpacity>
      </View>

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          className="w-52 h-52 rounded-xl border border-gray-300"
        />
      )}
    </View>
  );
}
