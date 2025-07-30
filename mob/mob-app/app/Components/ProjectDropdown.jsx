// Components/Dropdown.js

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function ProjectDropdown({ data, title, selected, onSelect }) {
  const [selectedValue, setSelectedValue] = useState(selected || '');

  useEffect(() => {
    setSelectedValue(selected || '');
  }, [selected]);

  return (
    <View className="w-full my-2 px-2">
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{title}</Text>
      <SelectList
        setSelected={(value) => {
          setSelectedValue(value);
          onSelect?.(value); // call parent's callback
        }}
        data={data}
        save="value"
        placeholder={`Select ${title}`}
        boxStyles={{
          borderRadius: 10,
          borderColor: '#ccc',
          backgroundColor: '#fcd34d' // tailwind "yellow-300"
        }}
        dropdownStyles={{
          borderRadius: 10,
          backgroundColor: '#fef3c7' // tailwind "yellow-100"
        }}
        defaultOption={
          selected
            ? data.find(item => item.value === selected)
            : undefined
        }
      />
    </View>
  );
}
