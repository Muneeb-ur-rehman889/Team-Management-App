import { View, Text, TextInput } from 'react-native';
import FilePicker from './Filepicker';
import Frame from './Frame';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Botton from './Botton';
import { useState } from 'react';
import { submitApplication } from './submitApplication'; // ✅ Adjust the path accordingly

function Leave() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!startDate || !endDate || !reason) {
      alert('Please fill in all fields');
      return;
    }

    submitApplication('Leave', {
      startDate,
      endDate,
      reason,
    });
  };

  return (
    <>
      <View className='items-center'>
        <Frame className='border-l-2 border-gray-500'>
          <View>
            <Text className='text-xl'>Leave Application</Text>
          </View>

          <View className='items-center'>
            {/* Start Date */}
            <View className='flex-row items-center p-1 w-10/12'>
              <Text>Start Date</Text>
            </View>
            <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
              <FontAwesome name="hourglass-start" size={24} color="gray" />
              <TextInput
                className='text-gray-700 w-full border-0 p-1'
                placeholder="YYYY-MM-DD"
                value={startDate}
                onChangeText={setStartDate}
              />
            </View>

            {/* End Date */}
            <View className='flex-row items-center p-1 w-10/12'>
              <Text>End Date</Text>
            </View>
            <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
              <FontAwesome name="hourglass-end" size={24} color="gray" />
              <TextInput
                className='text-gray-700 w-full border-0 p-1'
                placeholder="YYYY-MM-DD"
                value={endDate}
                onChangeText={setEndDate}
              />
            </View>

            {/* Reason */}
            <View className='flex-row items-center p-1 w-10/12'>
              <Text>Reason</Text>
            </View>
            <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
              <TextInput
                multiline
                numberOfLines={5}
                className='text-gray-700 w-full border-0 p-1'
                placeholder="Enter your reason here"
                value={reason}
                onChangeText={setReason}
              />
            </View>

            {/* File Picker (optional) */}
            <FilePicker />

            {/* Submit Button */}
            <Botton
              data={'Submit Application'}
              color={'#0099ff'}
              onPress={handleSubmit}
            />
          </View>
        </Frame>
      </View>
    </>
  );
}

export default Leave;
