import { View, Text, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import AddProjejectmodel from './AddProjectmodel'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

function UDmodel({ modalvisible, setVisible }) {
    const [upvisible,setupvisible]=useState(false)
  return (
    <View>
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className='bg-white mt-20 p-5 rounded-2xl w-[90%] max-h-[90%] border-2 border-orange-600'>
                <View>
                    <TouchableOpacity onPress={()=>setVisible(false)}>
                    <FontAwesome name="remove" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>setVisible(false)} className='bg-red-600 px-5 py-3 items-center   mt-4 rounded-xl shadow-md active:bg-orange-600'>
                <Text className='text-xl text-white'>Delete</Text>
              </TouchableOpacity>
              {/* Save Button */}
              <TouchableOpacity onPress={()=>setupvisible(true)} className='bg-orange-500 px-5 py-3 mt-4 items-center rounded-xl shadow-md active:bg-orange-600'>
                <Text className='text-xl text-white'>Update</Text>
              </TouchableOpacity>
          </View>
        </View>
         <AddProjejectmodel modalvisible={upvisible} setVisible={setupvisible} title={'Update Project'}/> 
      </Modal>
    </View>
  );
}

export default UDmodel;
