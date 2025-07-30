import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function RadioButtons({ Options, text, selected, setSelected }) {
  return (
    <View className="p-4">
      <Text className="text-lg mb-4">Select {text}:</Text>
      <View className="flex-row">
        {Options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => setSelected(option)}
            className="mx-5 items-center mb-3"
          >
            <View
              className={`w-5 h-5 rounded-full border-2 mr-3 ${
                selected === option ? 'border-blue-600' : 'border-gray-400'
              } items-center justify-center`}
            >
              {selected === option && (
                <View className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              )}
            </View>
            <Text className="text-gray-700">{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
