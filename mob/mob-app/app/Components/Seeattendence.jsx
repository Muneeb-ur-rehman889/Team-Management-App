import {View,Text} from 'react-native'
function Seeattendence({data}){
    const {day,status,checkin,checkout,huors}=data
    return(
        <>
            <View  className='my-2 p-3 rounded-lg border-[1px] border-blue-500'>
            <View>
            <Text className='text-xl'>{day}</Text>
            </View>
            <View className='bg-yellow-200 absolute top-4 right-4 justify-center items-center rounded-lg w-20 h-6'> 
                <Text className='text-yellow-600'>{status}</Text>
            </View>
            <View className='flex-row items-center justify-between my-5'>
            <View className='mx-2'>
                <Text>Check-in</Text>
                <Text>{checkin}</Text>
            </View>
            <View className='mx-2'>
                <Text>Check-out</Text>
                <Text>{checkout}</Text>
            </View>
            <View className='mx-2'>
                <Text>Total Hours</Text>
                <Text>{huors}</Text>
            </View>
            </View>
            </View>
        </>
    );
}
export default Seeattendence;