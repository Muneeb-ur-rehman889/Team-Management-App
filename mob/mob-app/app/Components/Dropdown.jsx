import React, { useState } from 'react';
import { View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
export default function Dropdown({ data, title, onSelect }) {
  const [selected, setSelected] = useState('');
  return (
    <View className="p-2 w-full">
      <SelectList
        setSelected={value => {
          setSelected(value);
          onSelect?.(value); // ✅ Pass selected value back to Items
        }}
        data={data}
        save="value"
        placeholder={`Select ${title}`}
        boxStyles={{ borderRadius: 10, borderColor: '#ccc', backgroundColor: 'orange' }}
        dropdownStyles={{ borderRadius: 10 }}
      />
    </View>
  );
}
