import {StyleSheet, TextInput,View,Text,ScrollView} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
function Signup(){      
    return(
        <>
            <View className='flex-1 justify-center w-full items-center '>
                
               <View className='flex-row items-center  p-1 w-10/12'>
                    <Text>Enter your name</Text>
                </View>
                <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
                    <MaterialIcons name="person" size={24} color="gray" /> 
                    <TextInput placeholder='  Enter name'  className='text-gray-700 w-full border-0  p-1' />
                </View>
                 <View className='flex-row items-center  p-1 w-10/12'>
                    <Text>Enter your Id card number</Text>
                </View>
                <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
                    <AntDesign name="idcard" size={24} color="black" />
                    <TextInput keyboardType='numeric' placeholder='  Enter like 34101.....' className='text-gray-700 w-full border-0  p-1' />
                </View>
                 <View className='flex-row items-center  p-1 w-10/12'>
                    <Text>Enter your Password</Text>
                </View>
                <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
                    <MaterialIcons name="password" size={24} color="gray" /> 
                    <TextInput placeholder='Like Munee1234$Umar' className='text-gray-700 w-full border-0  p-1' secureTextEntry={true}/>
                </View>
                 <View className='flex-row items-center  p-1 w-10/12'>
                    <Text>Confirm Password</Text>
                </View>
                <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
                    <MaterialIcons name="confirmation-num" size={24} color="gray" /> 
                    <TextInput placeholder='Like Munee1234$Umar' className='text-gray-700 w-full  border-0  p-1' secureTextEntry={true}/>
                </View> 
                

            </View>
        </>
    );
    
}
export default Signup;