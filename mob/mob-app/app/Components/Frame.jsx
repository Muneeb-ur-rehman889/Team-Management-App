import {View} from 'react-native'
function Frame({children}){
    return(
        <View className='bg-white rounded-2xl w-[100%] my-4 p-3'>
            {children}
        </View>
    );
}
export default Frame;