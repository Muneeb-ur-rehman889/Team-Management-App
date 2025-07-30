import Signup from '../../Components/Signup';
import Sheader from '../../Components/Sheader';
import Footer from '../../Components/Fotter';
import Scrolling from '../../Components/Scrolling'
import Botton from '../../Components/Botton';
import { View,Image,TouchableOpacity,Text,TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView, Platform} from 'react-native';
function SignupScreen({navigation}){
            function HandleC(){
                navigation.navigate('ContractorLogin')
            }
            function Handlelogin(){
                 navigation.navigate('ContractorLogin')
            }
    return(
        <>
         <View style={{ flex: 1 }}>
            <Sheader color={"#ff5500"} path={'M0,224L40,208C80,192,160,160,240,176C320,192,400,256,480,277.3C560,299,640,277,720,261.3C800,245,880,235,960,240C1040,245,1120,267,1200,245.3C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'} />
            <Scrolling>
            <View className='w-full justify-center items-center'>
                <Image source={require('../../../assets/images/Logo4.png')}></Image>
            </View>
             <View className='w-full my-3 p-3  justify-center items-center'>
                <Text className=' text-2xl text-gray-800 font-extrabold'>Sign Up</Text>
            </View>
            <Signup/>
            <Botton data={'SignUp'} color={'#ff5500'} onPress={HandleC}/>
             <View>
             <Text className='text-gray-400 my-3 text-lg'>Already have account?<TouchableOpacity onPress={Handlelogin} ><Text className='text-blue-600'>login</Text></TouchableOpacity></Text>
            </View>
           </Scrolling>
            <Footer color={"#ff5500"} path={'M0,160L34.3,160C68.6,160,137,160,206,154.7C274.3,149,343,139,411,160C480,181,549,235,617,234.7C685.7,235,754,181,823,165.3C891.4,149,960,171,1029,197.3C1097.1,224,1166,256,1234,256C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'}/>
        </View>
        </>
    );
   
}
export default SignupScreen;