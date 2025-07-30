import {View,ImageBackground, StyleSheet,Image} from 'react-native';
import Landing from '../Components/Landing';
import LButton from '../Components/L-Button';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Highlight from '../Components/Highlight'
const highlights=[
    {
        description:"Online task Assinment",
        logo:<MaterialIcons name="assignment-add" size={40} color='rgba(219, 130, 12, 0.84)' />
    },
     {
        description:"Online Payments",
        logo:<MaterialIcons name="payments" size={40} color='rgba(219, 130, 12, 0.84)' />
    },
     {
        description:"Online Wage calculations",
        logo:<FontAwesome6 name="calculator" size={40} color='rgba(219, 130, 12, 0.84)' />
    }
]
function LandingScreen({navigation}){
    function HandleC(){
        navigation.navigate('ContratocsignUp')
    }
    function HandleW(){
        navigation.navigate('WorkerSignUp')
    }
    return(
        <View style={{flex:1}}>
            <Landing>
                <View style={style.d}>
                    <Image source={require('../../assets/images/Logo4.png')} style={style.logo}></Image>
                    <LButton name={'Contractor'} onPress={HandleC} />
                     <LButton name={'Worker'} onPress={HandleW} />
                     <View style={style.h}>
                    {
                        highlights.map((item,index)=>{
                            return(
                                <>
                                    <Highlight key={index} data={item} />
                                </>
                            );
                        })
                    }
                    </View>
                    </View>
             </Landing>
        </View>
    );
}
const style=StyleSheet.create({
    logo:{
        marginVertical:50
    },
    d:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    h:{
        flexDirection:'row',
        marginVertical:30,
        justifyContent:'space-between',
        gap:20,
    }
})
export default LandingScreen;