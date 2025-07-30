import { View, Text, TextInput, Modal, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import firebaseConfig from '../firebaseConfig';

const auth = firebaseConfig.auth;

function Attendencemodel({ modalvisible, setVisible, date }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const saveAttendance = async () => {
    if (!start || !end) return Alert.alert('Error', 'Please enter both start and end time.');

    const user = auth.currentUser;
    if (!user) return Alert.alert('Error', 'User not logged in.');

    const startHour = parseInt(start.split(':')[0]);
    const endHour = parseInt(end.split(':')[0]);
    const hoursWorked = endHour - startHour;

    try {
      await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/attendance/${user.uid}/${date}.json`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            status: 'Present',
            checkin: start,
            checkout: end,
            hours: `${hoursWorked}:00`,
          }),
        }
      );

      Alert.alert('Success', 'Attendance marked successfully');
      setVisible(false);
      setStart('');
      setEnd('');
    } catch (err) {
      console.error('Error saving attendance:', err);
      Alert.alert('Error', 'Failed to save attendance');
    }
  };

  return (
    <View>
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className='bg-white p-5 rounded-2xl my-5 w-[90%] max-h-[90%] border-2 border-blue-600'>
            <View className='flex-row justify-between px-4 mb-2'>
              <Text className='text-xl font-bold'>Mark Attendance</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <FontAwesome name="close" size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <ScrollView
              className="w-full"
              contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View className='w-11/12'>
                <View className='items-center mb-4'>
                  <Text className='text-xl'>{date}</Text>
                </View>

                <View className='flex-row justify-between'>
                  <View className='w-[48%]'>
                    <Text className='mb-1'>Enter Start Time</Text>
                    <View className='flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4'>
                      <MaterialCommunityIcons name="calendar" size={24} color="gray" />
                      <TextInput
                        placeholder='e.g. 08:15'
                        className='text-gray-700 flex-1 ml-2'
                        value={start}
                        onChangeText={setStart}
                      />
                    </View>
                  </View>

                  <View className='w-[48%]'>
                    <Text className='mb-1'>Enter End Time</Text>
                    <View className='flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4'>
                      <MaterialCommunityIcons name="calendar-check" size={20} color="gray" />
                      <TextInput
                        placeholder='e.g. 17:00'
                        className='text-gray-700 flex-1 ml-2'
                        value={end}
                        onChangeText={setEnd}
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  className='bg-blue-500 px-5 justify-center items-center py-3 rounded-xl shadow-md active:bg-blue-600'
                  onPress={saveAttendance}
                >
                  <Text className='text-xl text-white text-center'>SAVE</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Attendencemodel;
