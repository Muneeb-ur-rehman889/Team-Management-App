import {View,Text,Image, TouchableOpacity} from 'react-native'
function Avatar({images}){
    const visible = images.slice(0,3);
    const remaining=images.length - 3;
    return(
        <>
            <View className='flex-row  items-center'>

                {
                    visible.map((items,index)=>{
                        return(
                            <View key={index} className='w-8 h-8 justify-center border-2 border-white bg-gray-400 overflow-hidden rounded-full'>
                                <Image source={items} style={{width:'100%', height:'100%' , borderRadius:100}}/>
                            </View>
                        );
                    })
                }
                {
                    remaining>0 &&(
                        <TouchableOpacity>
                        <View className='w-8  h-8 rounded-full items-center justify-items-center bg-gray-300 border-2 border-white'>
                            <Text className='text-sm text-white'>+{remaining}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </>
    );
}
export default Avatar;