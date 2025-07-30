import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function SearchInput() {
  const [query, setQuery] = useState('');

  return (
     <View className=' border-2 items-center border-gray-300 p-2 rounded-lg bg-white my-2 w-[90%]'>
      <TextInput
        className="h-10 px-4 w-full rounded-full border border-gray-300 bg-gray-100"
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}
