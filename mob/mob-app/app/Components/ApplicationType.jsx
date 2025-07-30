import {View,Text, TouchableOpacity} from 'react-native'
function ApplicationType({name,icon,selected, onPress}){
   
    return(
        <>
            <View className="w-[30%] ">
           <TouchableOpacity onPress={onPress}>
                <View className={`items-center  justify-center ${selected?'bg-blue-100 border-[1px] border-blue-600 rounded-lg':' '}`}>
                    <View>{icon}</View>
                    <Text className={`mt-1 ${selected?'text-blue-500':''}`}>{name}</Text>
                </View>
           </TouchableOpacity>
           </View>
        </>
    );
}
export default ApplicationType;