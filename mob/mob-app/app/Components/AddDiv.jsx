import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import UDFmodel from './UDFmodel';
import UpdateFurnitureModal from './UpdateFurniture';
import { useState } from 'react';

function AddDiv({ data, itemId, fetchFurniture }) {
  const [modalvisible, setVisible] = useState(false);
  const [upvisible, setupvisible] = useState(false);

  if (!data) return null; // guard clause

  const { name, price, imageUrl } = data;

  const handleDelete = async () => {
    try {
      await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Furnitures/${itemId}.json`,
        {
          method: 'DELETE',
        }
      );
      Alert.alert('Deleted', 'Furniture item deleted successfully');
      setVisible(false);

      // Refresh the furniture list
      if (fetchFurniture) {
        fetchFurniture();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to delete item');
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Furnitures/${itemId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );
      Alert.alert('Updated', 'Furniture updated successfully');
      setupvisible(false);

      // Refresh the furniture list
      if (fetchFurniture) {
        fetchFurniture();
      }
    } catch (error) {
      Alert.alert('Error', 'Update failed');
    }
  };

  return (
    <>
      <View className="flex-1 bg-white rounded-lg my-3 p-4">
        <View className="flex-row p-2 items-center">
          <View className="w-[20%] mx-4">
            <View className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
              <Image
                source={{ uri: imageUrl }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>

          <View className="w-[60%] mx-4">
            <Text className="text-lg">{name}</Text>
            <Text className="text-blue-600">{price}</Text>
          </View>

          <TouchableOpacity onPress={() => setVisible(true)}>
            <Entypo name="dots-three-vertical" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* UDF Modal */}
        <UDFmodel
          modalvisible={modalvisible}
          setVisible={setVisible}
          onDelete={handleDelete}
          onUpdate={() => {
            setupvisible(true);
            setVisible(false);
          }}
        />

        {/* Update Modal */}
        <UpdateFurnitureModal
          modalVisible={upvisible}
          setVisible={setupvisible}
          itemData={{
            id: itemId,
            name,
            price,
            image: imageUrl,
          }}
          onUpdate={handleUpdate}
        />
      </View>
    </>
  );
}

export default AddDiv;
