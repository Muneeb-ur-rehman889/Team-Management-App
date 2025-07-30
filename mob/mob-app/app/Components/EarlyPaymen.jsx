import { View, Text, TextInput, Alert } from 'react-native';
import Frame from './Frame';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Botton from './Botton';
import { useState } from 'react';
import { submitApplication } from './submitApplication'; // Add this
function EarlyPayment() {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');


const handleSubmit = () => {
  if (!amount.trim() || !reason.trim()) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  submitApplication('Early Payment', {
    amount,
    reason,
    date: currentDate,
    time: currentTime,
  });

  setAmount('');
  setReason('');
};


  return (
    <View className="items-center">
      <Frame>
        <View>
          <Text className="text-xl">Early Wages Application</Text>
        </View>

        <View className="items-center">
          {/* Amount Input */}
          <View className="flex-row items-center p-1 w-10/12">
            <Text>Enter amount</Text>
          </View>
          <View className="flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12">
            <FontAwesome6 name="sack-dollar" size={24} color="gray" />
            <TextInput
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholder="e.g. 5000"
              className="text-gray-700 w-full border-0 p-1"
            />
          </View>

          {/* Reason Input */}
          <View className="flex-row items-center p-1 w-10/12">
            <Text>Reason</Text>
          </View>
          <View className="flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12">
            <TextInput
              multiline
              numberOfLines={5}
              value={reason}
              onChangeText={setReason}
              placeholder="Enter your reason for early wages"
              className="text-gray-700 w-full border-0 p-1"
            />
          </View>

          {/* Submit Button */}
          <Botton data={'Submit Application'} color={'#0099ff'} onPress={handleSubmit} />
        </View>
      </Frame>
    </View>
  );
}

export default EarlyPayment;
