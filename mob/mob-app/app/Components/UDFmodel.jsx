import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function UDFmodel({ modalvisible, setVisible, onDelete, onUpdate }) {
  return (
    <Modal
      visible={modalvisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white mt-20 p-5 rounded-2xl w-[90%] max-h-[90%] border-2 border-orange-600">
          <View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <FontAwesome name="remove" size={24} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Delete */}
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Confirm Delete', 'Are you sure?', [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: onDelete, style: 'destructive' },
              ]);
            }}
            className="bg-red-600 px-5 py-3 items-center mt-4 rounded-xl shadow-md active:bg-orange-600"
          >
            <Text className="text-xl text-white">Delete</Text>
          </TouchableOpacity>

          {/* Update */}
          <TouchableOpacity
            onPress={onUpdate}
            className="bg-orange-500 px-5 py-3 mt-4 items-center rounded-xl shadow-md active:bg-orange-600"
          >
            <Text className="text-xl text-white">Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default UDFmodel;
