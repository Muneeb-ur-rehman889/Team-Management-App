import {View,Text,Image} from 'react-native';
function Little({icon,data,heading,title}){
    return(
        <>
            <View className='w-[48%] bg-gray-100 border border-orange-500 p-4 rounded-md my-5'>
            <View className='flex-row'>
                <View className='rounded-full justify-center items-center w-20 h-20 bg-orange-500'>
                    <Image style={{width:80 , height:80, borderRadius:100}} source={icon}></Image>
                </View>
                <View className='flex-1 items-center  mx-2  justify-between'>
                    <Text className='font-bold my-2'>{data}</Text>
                    <View className='flex-row my-1 p-3justify-between'>
                    <View className='bg-green-500 rounded-full my-2 w-[10px] h-[10px] mr-2'></View>
                        <Text className='text-sm'>{heading}</Text>
                    </View>
                    
                </View>
            </View>
            <View className='p-2 flex-1 w-[60%] my-4 rounded-lg bg-purple-300'>
                <Text className='text-purple-500'>{title}</Text>
            </View>
            </View>
        </>
    );
}
export default Little;