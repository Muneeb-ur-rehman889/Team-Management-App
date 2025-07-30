import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import SearchInput from '../../Components/SearchInput';
import AddFurnituremodal from '../../Components/AddFurnituremodal';
import AddDiv from '../../Components/AddDiv';
import { useState, useEffect } from 'react';

function AddProject() {
  const [modalvisible, setVisible] = useState(false);
  const [furnitureData, setFurnitureData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFurniture = async () => {
    try {
      setLoading(true); // Reset loader before fetching
      const response = await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Furnitures.json'
      );
      const data = await response.json();

      if (data) {
        // Use Object.entries to get both id (key) and value
        const formatted = Object.entries(data).map(([key, value]) => ({
          ...value,
          id: key,
        }));
        setFurnitureData(formatted);
      } else {
        setFurnitureData([]);
      }
    } catch (error) {
      console.error('Error fetching furniture data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFurniture();
  }, [modalvisible]); // Refresh when modal is closed (new data added)

  return (
    <View className="flex-1 pt-10">
      <View className="w-full items-center">
        <SearchInput />
      </View>

      <View className="my-6 flex-1 p-4">
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color="#ea580c" />
          ) : (
            <View>
              {furnitureData.map((item) => (
                <AddDiv
                  key={item.id}
                  data={item}
                  itemId={item.id}
                  fetchFurniture={fetchFurniture}
                />
              ))}
            </View>
          )}
          <View className="w-full h-20" />
        </ScrollView>
      </View>

      <AddFurnituremodal
        modalvisible={modalvisible}
        setVisible={setVisible}
        title={'Add Furniture'}
      />

      {!modalvisible && (
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View className="w-14 h-14 bg-orange-700 absolute bottom-24 right-6 rounded-full justify-center items-center shadow-lg z-50">
            <Text className="text-white text-2xl">+</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default AddProject;
