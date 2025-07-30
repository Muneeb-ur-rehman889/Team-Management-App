import { View, Text, TextInput, Platform, TouchableOpacity, Alert } from 'react-native';
import Frame from './Frame';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Botton from './Botton';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
 import { submitApplication } from './submitApplication'; // Add this
function EarlyLeave() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [reason, setReason] = useState('');

 

const handleSubmit = () => {
  if (!reason) {
    Alert.alert('Missing Info', 'Please enter the reason for early leave.');
    return;
  }

  const formattedDate = moment(date).format('YYYY-MM-DD');
  const formattedTime = moment(time).format('hh:mm A');

  submitApplication('Early Leave', {
    date: formattedDate,
    time: formattedTime,
    reason,
  });
};


  return (
    <View className='items-center'>
      <Frame>
        <View>
          <Text className='text-xl'>Early Leave Application</Text>
        </View>

        <View className='items-center'>

          {/* Date Field */}
          <View className='flex-row items-center p-1 w-10/12'>
            <Text>Date</Text>
          </View>
          <TouchableOpacity
            className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'
            onPress={() => setShowDatePicker(true)}
          >
            <FontAwesome name="calendar-o" size={24} color="gray" />
            <Text className='text-gray-700 ml-2'>{moment(date).format('YYYY-MM-DD')}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          {/* Time Field */}
          <View className='flex-row items-center p-1 w-10/12'>
            <Text>Time to leave</Text>
          </View>
          <TouchableOpacity
            className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'
            onPress={() => setShowTimePicker(true)}
          >
            <Entypo name="back-in-time" size={24} color="gray" />
            <Text className='text-gray-700 ml-2'>{moment(time).format('hh:mm A')}</Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          )}

          {/* Reason */}
          <View className='flex-row items-center p-1 w-10/12'>
            <Text>Reason</Text>
          </View>
          <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
            <TextInput
              multiline
              numberOfLines={4}
              className='text-gray-700 w-full border-0 p-1'
              value={reason}
              onChangeText={setReason}
              placeholder="Type your reason here..."
            />
          </View>

          {/* Submit Button */}
          <Botton data={'Submit Application'} color={'#0099ff'} onPress={handleSubmit} />

        </View>
      </Frame>
    </View>
  );
}

export default EarlyLeave;
