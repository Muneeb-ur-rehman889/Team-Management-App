import {View,Text} from 'react-native';
function LittleDiv({icon,data,heading,persentage}){
    return(
        <>
            <View className='w-[48%] bg-gray-200 border border-orange-500 p-4 rounded-lg my-5'>
                <View className='rounded-full justify-center items-center absolute top-0 right-0 w-20 h-20 bg'>{icon}</View>
            
            <View>
                <Text className='text-gray-500'>{heading}</Text>
                <Text className='text-lg'>{data}</Text>

            </View>
            <View className='absolute bottom-4 right-4'> 
                <Text>
                    {persentage}
                </Text>
            </View>
            </View>
        </>
    );
}
export default LittleDiv