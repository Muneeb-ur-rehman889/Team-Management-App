import {View,Text} from 'react-native'
function Calproject({data,key}){
    const {name,location,time,Result}=data
    return(
        <>
            <View key={key} className='rounded-lg border-[1px] border-orange-500 p-3 my-3 bg-gray-100'>
                <Text className='text-2xl'>{name}</Text>
                <View className='flex-row'>
                <View>
                <Text className='text-lg text-gray-600'>location:  {location}</Text>
                <Text className='text-gray-500'>Total time  {time}</Text>
                </View>
                <View className='absolute justify-center items-center rounded-2xl w-20 h-10 bg-green-400 top-3 right-3'><Text className='text-green-700'>{Result}</Text></View>
                </View>
            </View>
        </>
    );
}
export default Calproject