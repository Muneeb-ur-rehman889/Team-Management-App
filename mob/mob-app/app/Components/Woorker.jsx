import {View,Text,Image} from 'react-native';
function Woorker({img,idcard,name,account,project}){
    return(
        <> 
        <View className=''>
            <View className='flex-1 items-center'>
                <View className='rounded-full my-10 bg-blue-600 w-52 h-52 overflow-hidden'>
                    <Image source={img} style={{width:'100%',height:'100%',borderRadius:100}}/>
                </View>
            </View>
            <View className='my-2 items-center w-full '> 
                <View className='my-3 p-2 items-center rounded-lg flex-row bg-gray-300'>
                    <Text className='text-lg mx-6'>Name</Text>
                    <Text className='text-gray-400'>{name}</Text>
                </View>
                <View className='my-3 p-2 items-center  rounded-lg flex-row bg-gray-300'>
                     <Text className='text-lg mx-6'>ID card</Text>
                    <Text text-gray-400>{idcard}</Text>
                </View>
                <View className='my-3 p-2 items-center  rounded-lg flex-row bg-gray-300'>
                    <Text className='text-lg mx-6'>Account Number</Text>
                    <Text text-gray-400>{account}</Text>
                </View>
                <View className='my-3 p-2 items-center rounded-lg flex-row bg-gray-300'>
                    <Text className='text-lg mx-6'>Project</Text>
                    <Text text-gray-400 >{project}</Text>
                </View>
            </View>
            </View>
        </>
    );
}
export default Woorker