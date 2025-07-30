import { Image, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../../Components/Fotter';
import Scrolling from '../../Components/Scrolling';
import Sheader from '../../Components/Sheader';
import UserSignup from '../../Components/USerSignup';

function SignUp({navigation}){
            function Handlelogin(){
                 navigation.navigate('WorkerLogin')
            }    
    return(
        <>
         <View style={{ flex: 1 }}>
            <Sheader color={'#0099ff'} path={"M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,218.7C840,181,960,107,1080,117.3C1200,128,1320,224,1380,272L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}/>
             <Scrolling>
            <View className='w-full justify-center items-center'>
                <Image source={require('../../../assets/images/Bluelogo.png')}></Image>
            </View>
             <View className='w-full my-3 p-3  justify-center items-center'>
                <Text className=' text-2xl text-gray-800 font-extrabold'>Sign Up</Text>
            </View>
            <UserSignup navigation={navigation}/>
           
             <View>
                <Text className='text-gray-400 my-3 text-lg'>Already have account?<TouchableOpacity onPress={Handlelogin} ><Text className='text-blue-600'>login</Text></TouchableOpacity></Text>
                </View>
            </Scrolling>
            <Footer color={'#0099ff'} path={"M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,218.7C840,181,960,107,1080,117.3C1200,128,1320,224,1380,272L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}/>
            </View>
        </>
    );
   
}
export default SignUp;