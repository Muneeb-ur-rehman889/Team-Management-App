import {View,Text,TouchableOpacity} from 'react-native'
function Botton({data,color,onPress}){
    return(
        <>
            <View className='w-full justify-center items-center my-7'   >
                <TouchableOpacity style={{backgroundColor:color}} onPress={onPress} className='rounded-lg p-3 justify-center items-center  flex-1 w-11/12'  >
                    <Text className='text-white text-lg font-bold'>{data}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Botton