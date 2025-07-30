import {View,Text} from 'react-native'
function Caldiv({data,key}){
    const {name,time,Result}=data
    return(
        <>
            <View key={key} className='rounded-lg border-[1px] border-orange-500 p-3 my-3 bg-gray-100'>
                <Text className='text-2xl'>{name}</Text>
                <View className='flex-row justify-between'>
                <View>
                <Text className='text-gray-500'>Total time  {time}</Text>
                </View>
                 <View className=' justify-center items-center rounded-2xl w-20 h-10 bg-green-400 '><Text className='text-green-700'>{Result}</Text></View>
                </View>
            </View>
        </>
    );
}
export default Caldiv