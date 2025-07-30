import Login from '../../Components/Login';
import {View,Text,TouchableOpacity} from 'react-native'
import Scrolling from '../../Components/Scrolling'
import Botton from '../../Components/Botton';
 function Handlelogedin(){

 }
function Contractorlogin({navigation}){
    function Goback(){
        navigation.navigate('ContratocsignUp');
    }
    function moveHome(){
        navigation.navigate('homenav');
    }
    return(
        <>
            <View className='flex-1  justify-center  bg-orange-600  items-center  '>
                <Text className='text-white text-2xl font-bold '>Login</Text>
                <Login/>
                <View className='w-full justify-center items-center '>
                 <TouchableOpacity onPress={moveHome} className='bg-blue-600 w-11/12 items-center p-4 rounded-lg'><Text className='text-white text-lg font-semibold'>Login</Text></TouchableOpacity>
                 </View>
                 <View className='my-10'>
                 <Text className='text-white  text-lg'>Do not have account?<TouchableOpacity onPress={Goback}><Text className='text-blue-600'>SignUP</Text></TouchableOpacity></Text>
                </View>
                </View>      
        </>
    );
}
export default Contractorlogin;