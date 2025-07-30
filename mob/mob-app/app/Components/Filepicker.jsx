import * as DocumentPicker from 'expo-document-picker';
import { Button, Text, View } from 'react-native';
import { useState } from 'react';

export default function FilePicker() {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
    }
  };

  return (
    <View className="p-4 w-[70%] rounded-lg">
      <Button title="Attach File" onPress={pickDocument} />

      {file && (
        <Text className="mt-4">
          Selected: {file.name} ({Math.round(file.size / 1024)} KB)
        </Text>
      )}
    </View>
  );
}
