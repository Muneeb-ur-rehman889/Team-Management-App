// Items.js
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import Dropdown from './Dropdown';
import { useEffect, useState } from 'react';

function Items({ index, onItemChange }) {
  const [furnitureList, setFurnitureList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFurniture, setSelectedFurniture] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(0);

  // Fetch all furniture items
  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const res = await fetch(
          'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Furnitures.json'
        );
        const data = await res.json();
        if (data) {
          const formatted = Object.entries(data).map(([key, item]) => ({
            key,
            value: item.name,
            price: parseFloat(item.price),
          }));
          setFurnitureList(formatted);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFurniture();
  }, []);

  // Recalculate on selection or quantity change
useEffect(() => {
  const selectedItem = furnitureList.find(item => item.value === selectedFurniture);
  const itemPrice = selectedItem ? selectedItem.price : 0;
  setPrice(itemPrice);

  const qty = parseInt(quantity);
  if (selectedFurniture && !isNaN(qty) && qty > 0) {
    const total = itemPrice * qty;
    
    onItemChange(index, {
      furniture: selectedFurniture,
      quantity: qty,
      price: itemPrice,
      total: total
    });
  }
}, [selectedFurniture, quantity, furnitureList]);


  return (
    <View className="bg-gray-300 p-4 my-4 items-center w-full justify-center rounded-lg">
      <Text className="text-lg w-full my-2">Item no {index + 1}</Text>

      <View className="flex-row w-full my-2">
        <Text className="text-sm text-gray-500">Furniture Type</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Dropdown
          data={furnitureList}
          title={'Furniture'}
          onSelect={value => setSelectedFurniture(value)}
        />
      )}

      <View className="flex-row items-center mt-4 w-full">
        <Text className="text-gray-700 text-lg">Quantity</Text>
      </View>

      <View className="flex-row border-2 items-center border-gray-300 p-2 rounded-lg bg-white my-2 w-[92%]">
        <TextInput
          placeholder="1"
          keyboardType="numeric"
          className="text-gray-700 w-full border-0 p-1"
          value={quantity}
          onChangeText={setQuantity}
        />
      </View>

      {selectedFurniture && quantity && (
        <Text className="text-base text-gray-700 mt-2">
          Unit Price: {price} | Total: {price * (parseInt(quantity) || 0)}
        </Text>
      )}
    </View>
  );
}

export default Items;
