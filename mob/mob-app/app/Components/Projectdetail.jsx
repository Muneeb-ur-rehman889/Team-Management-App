import {View,Text, TouchableOpacity} from 'react-native'
import Frame from './Frame';
import Avatar from './Avatar';
import UDmodel from './UDmodel';
import { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
function Projectdetail({name,descreiption,enddate,images,progress }){
    const [modalvisible,setVisible]=useState(false);
    const originalProgress=Math.max(0,Math.min(progress,100));
    return(
        <>
            <Frame>
                <View>
                    
                <View >
                    <View className='flex-row justify-between'>
                         <Text className='text-xl'>{name}</Text>
                         <TouchableOpacity onPress={()=>setVisible(true)}>
                         <View>
                            <Entypo name="dots-three-vertical" size={20} color="gray" />
                        </View>
                        </TouchableOpacity>
                    </View>
                    <Text className='text-gray-400'>{descreiption}</Text>
                </View>
                <View className='flex-row my-4 justify-between'>
                    <View><Avatar images={images} /></View>
                    <Text className='text-gray-500'>Deadline:  {enddate}</Text>
                </View>
                <View className='w-full'>
                <View className='my-1'>
                    <Text className='text-gray-600'>Progress {originalProgress}</Text>
                </View>
                <View className='w-full bg-gray-200 border h-4 rounded-full'>
                    <View className='bg-green-500 h-full rounded-full ' style={{width:  `${originalProgress}%`  }}></View>
                </View>
                </View>
                </View>
                 <UDmodel modalvisible={modalvisible} setVisible={setVisible} /> 
            </Frame>
        </>
    );
}
export default Projectdetail;