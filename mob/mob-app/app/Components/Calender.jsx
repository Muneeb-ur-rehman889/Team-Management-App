import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

function Calenders(){
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#0099ff' }
        }}
        theme={{
          selectedDayBackgroundColor: '#0099ff',
          todayButtonFontWeight:'bold',
          todayBackgroundColor:'#90EE90',
          todayTextColor:'white',
          arrowColor: '#0099ff',
        }}
      />

      {selectedDate !== '' && (
        <Text className="mt-4 text-lg">
          Selected Date: <Text className="font-semibold">{selectedDate}</Text>
        </Text>
      )}
    </View>
  );
};

export default Calenders;
