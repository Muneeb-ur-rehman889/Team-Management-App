import { View, Text, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Payment({ modalvisible, setVisible, title }) {
  return (
    <View>
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className='bg-white mt-20 p-5 rounded-2xl w-[90%] max-h-[90%] border-2 border-orange-600'>
            <ScrollView
              className="w-full"
              contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
            >
              {/* Header */}
              <View className='flex-row justify-between w-full px-4 mb-4'>
                <Text className='text-xl font-bold'>{title}</Text>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <FontAwesome name="close" size={24} color="gray" />
                </TouchableOpacity>
              </View>
              <View className='w-10/12'>
                <Text className='mb-1'>Enter Amount
                </Text>
                <View className='flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4'>
                  <FontAwesome name="money" size={24} color="gray" />
                  <TextInput
                    keyboardType='numeric'
                    placeholder='2000 PKR'
                    className='text-gray-700 flex-1 ml-5'
                  />
                </View>
                <Text className='mb-1'>Enter Worker Account number</Text>
                <View className='flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4'>
                  <MaterialIcons name="account-balance" size={24} color="gray" />
                  <TextInput
                    keyboardType='numeric'
                    placeholder='1001......'
                    className='text-gray-700 flex-1 ml-5'
                  />
                </View>
                <Text className='mb-1'>Enter Contractor Account number</Text>
                <View className='flex-row items-center border-2 border-gray-700 p-2 rounded-lg bg-white mb-4'>
                 <MaterialIcons name="account-balance" size={24} color="gray" />
                  <TextInput
                    keyboardType='numeric'
                    placeholder='1001......'
                    className='text-gray-700 flex-1 ml-5'
                  />
                </View>
              </View>

              {/* Save Button */}
              <TouchableOpacity className='bg-orange-500 px-5 py-3 mt-4 rounded-xl shadow-md active:bg-orange-600'>
                <Text className='text-xl text-white'>Pay Now</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Payment;
