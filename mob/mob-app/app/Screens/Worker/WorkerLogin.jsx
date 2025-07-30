import Login from '../../Components/Login';
import {View,Text, TouchableOpacity} from 'react-native'
import Scrolling from '../../Components/Scrolling'
import Botton from '../../Components/Botton';
function Workerlogin({navigation}){
    function HanldeLogin(){
        navigation.navigate('Home')
    }
    function HandleSignup(){
        navigation.navigate('WorkerSignUp')
    }
    return(
        <>

            <View className='flex-1  justify-center  bg-blue-600  items-center my-7 '>
                <Text className='text-white text-2xl font-bold '>Login</Text>
                <Login navigation={navigation}/>
                <View className='my-10'>
                    <Text className='text-white  text-lg'>Do not have account?<TouchableOpacity onPress={HandleSignup} ><Text className='text-blue-900 mx-3'>SignUP</Text></TouchableOpacity></Text>
                </View>
            </View>
           
        </>
    );
}
export default Workerlogin