import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function AddProjejectmodel({ modalvisible, setVisible, title }) {
  const [projectName, setProjectName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setUploading] = useState(false);

  useEffect(() => {
    if (!modalvisible) {
      setProjectName('');
      setCustomerName('');
      setStartDate('');
      setEndDate('');
      setTotalCost('');
      setCustomerLocation('');
      setCustomerContact('');
      setDescription('');
    }
  }, [modalvisible]);

  const handleSave = async () => {
    if (
      !projectName ||
      !customerName ||
      !startDate ||
      !endDate ||
      !totalCost ||
      !customerLocation ||
      !customerContact ||
      !description
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setUploading(true);

      const payload = {
        projectName,
        customerName,
        startDate,
        endDate,
        totalCost,
        customerLocation,
        customerContact,
        description,
        createdAt: new Date().toISOString(),
      };

      await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      Alert.alert('Success', 'Project saved successfully');
      setVisible(false);
    } catch (error) {
      console.error('Error saving project:', error);
      Alert.alert('Error', 'Failed to save project');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View>
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <ScrollView>
          <View className="flex-1 justify-center items-center bg-black/50">
            <View className="bg-white p-5 rounded-2xl my-5 w-[90%] max-h-[90%] border-2 border-orange-600">
              {/* Header */}
              <View className="flex-row justify-between px-4 mb-2">
                <Text className="text-xl font-bold">{title}</Text>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <FontAwesome name="close" size={24} color="gray" />
                </TouchableOpacity>
              </View>

              {/* Scrollable form */}
              <ScrollView
                className="w-full"
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                <View className="w-11/12">
                  {/* Project Name */}
                  <Text className="mb-1">Enter Project name</Text>
                  <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <MaterialCommunityIcons name="ornament" size={24} color="gray" />
                    <TextInput
                      placeholder="Enter name"
                      value={projectName}
                      onChangeText={setProjectName}
                      className="text-gray-700 flex-1 ml-2"
                    />
                  </View>

                  {/* Customer Name */}
                  <Text className="mb-1">Enter Customer name</Text>
                  <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <MaterialCommunityIcons name="face-man-profile" size={24} color="gray" />
                    <TextInput
                      placeholder="Enter name"
                      value={customerName}
                      onChangeText={setCustomerName}
                      className="text-gray-700 flex-1 ml-2"
                    />
                  </View>

                  {/* Start and End Date */}
                  <View className="flex-row justify-between">
                    <View className="w-[48%]">
                      <Text className="mb-1">Enter Start date</Text>
                      <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                        <MaterialCommunityIcons name="calendar" size={24} color="gray" />
                        <TextInput
                          placeholder="Start date"
                          value={startDate}
                          onChangeText={setStartDate}
                          className="text-gray-700 flex-1 ml-2"
                        />
                      </View>
                    </View>
                    <View className="w-[48%]">
                      <Text className="mb-1">Enter End date</Text>
                      <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                        <MaterialCommunityIcons name="calendar-check" size={20} color="gray" />
                        <TextInput
                          placeholder="End date"
                          value={endDate}
                          onChangeText={setEndDate}
                          className="text-gray-700 flex-1 ml-2"
                        />
                      </View>
                    </View>
                  </View>

                  {/* Total Cost */}
                  <Text className="mb-1">Enter Total cost</Text>
                  <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <FontAwesome name="money" size={24} color="gray" />
                    <TextInput
                      keyboardType="numeric"
                      placeholder="e.g. 2000 PKR"
                      value={totalCost}
                      onChangeText={setTotalCost}
                      className="text-gray-700 flex-1 ml-2"
                    />
                  </View>

                  {/* Customer Location */}
                  <Text className="mb-1">Enter Customer location</Text>
                  <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <Entypo name="location-pin" size={24} color="gray" />
                    <TextInput
                      placeholder="e.g. Garden Town"
                      value={customerLocation}
                      onChangeText={setCustomerLocation}
                      className="text-gray-700 flex-1 ml-2"
                    />
                  </View>

                  {/* Customer Contact */}
                  <Text className="mb-1">Enter Customer Contact</Text>
                  <View className="flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <AntDesign name="contacts" size={24} color="gray" />
                    <TextInput
                      keyboardType="numeric"
                      placeholder="e.g. 03234......"
                      value={customerContact}
                      onChangeText={setCustomerContact}
                      className="text-gray-700 flex-1 ml-2"
                    />
                  </View>

                  {/* Project Description */}
                  <Text className="mb-1">Enter Project description</Text>
                  <View className="flex-row items-start border-2 border-gray-700 p-2 rounded-lg bg-white mb-4">
                    <AntDesign name="filetext1" size={24} color="gray" />
                    <TextInput
                      placeholder="Description"
                      multiline={true}
                      numberOfLines={5}
                      value={description}
                      onChangeText={setDescription}
                      className="text-gray-700 flex-1 ml-2 text-base"
                    />
                  </View>

                  {/* Save Button */}
                  <TouchableOpacity
                    onPress={handleSave}
                    disabled={isUploading}
                    className={`bg-orange-500 px-5 justify-center items-center py-3 rounded-xl shadow-md ${isUploading ? 'opacity-60' : ''}`}
                  >
                    <Text className="text-xl text-white text-center">
                      {isUploading ? 'Saving...' : 'SAVE'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

export default AddProjejectmodel;
