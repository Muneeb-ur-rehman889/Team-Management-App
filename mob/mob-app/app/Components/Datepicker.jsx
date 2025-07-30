import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function DateInput() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Pick a Date" onPress={showDatePicker} />
      
      {date && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          Selected Date: {date.toDateString()}
        </Text>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // Allow selecting past and future dates
        minimumDate={new Date(1900, 0, 1)} // Optional: set to Jan 1, 1900
        maximumDate={new Date(2100, 11, 31)} // Optional: set far future
      />
    </View>
  );
}
