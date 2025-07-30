// ProjectCalculator.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Frame from '../../Components/Frame';
import Items from '../../Components/Items';
import Botton from '../../Components/Botton';
import { useEffect } from 'react';
function ProjectCalculator() {
  
  const [itemList, setItemList] = useState([0]);
  const [itemData, setItemData] = useState({});
  const [totalCost, setTotalCost] = useState(null);
 
  const handleItemChange = (index, data) => {
    setItemData(prev => ({ ...prev, [index]: data }));
  };
const calculateTotal = () => {
  console.log('Item Data:', itemData);

  Object.entries(itemData).forEach(([index, item]) => {
    console.log(`Index ${index}:`, item, 'Total:', Number(item?.total));
  });

  const total = Object.values(itemData).reduce((sum, item) => {
    return sum + (Number(item?.total) || 0);
  }, 0);

  setTotalCost(total);
};


  return (
    <View className="flex-1 p-3 bg-white">
      <ScrollView>
        <View className="items-center p-4 flex-1">
          <Frame>
            <View className="w-full p-5 my-8 items-center">
              <Text className="text-lg font-bold text-black">Calculator</Text>
            </View>

            <View className="items-center w-full">
              <View className="w-full flex-row mt-4 justify-between">
                <Text className="text-black font-medium">Furniture Items</Text>
                <TouchableOpacity
                  onPress={() => setItemList(prev => [...prev, prev.length])}
                  className="mx-2"
                >
                  <Text className="text-blue-600 font-medium">+ Add item</Text>
                </TouchableOpacity>
              </View>

              {itemList.map((_, index) => (
                <Items key={index} index={index} onItemChange={handleItemChange} />
              ))}

              <Botton data={'Calculate'} color={'#ff5500'} onPress={calculateTotal} />

              {totalCost !== null && (
                <View className="mt-6 p-4 rounded-xl bg-orange-100 w-full items-center shadow">
                  <Text className="text-xl font-bold text-orange-600">
                    Total Project Cost: {totalCost} PKR
                  </Text>
                </View>
              )}
            </View>
          </Frame>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProjectCalculator;
