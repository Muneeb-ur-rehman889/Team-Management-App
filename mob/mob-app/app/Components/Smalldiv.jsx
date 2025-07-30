import {View,Text} from 'react-native'
function Smalldiv({data,heading,icon}){
    return(
        
            <View className='bg-gray-200 w-[47%] rounded-lg my-3 p-5 border-[1px] border-blue-500'>
                <Text className='text-gray-400 '>{heading}</Text>
                  <Text className='text-2xl'>{data}</Text>
                  <View className='absolute top-4 right-4'>
                    {icon}
                  </View>
            </View>
       
    );
}
export default Smalldiv