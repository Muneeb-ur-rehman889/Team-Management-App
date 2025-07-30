import {Button, View,StyleSheet,TouchableOpacity,Text} from 'react-native';
function LButton({name,onPress}){
    return(
        <View style={style.bg} >
            <TouchableOpacity style={style.btn} onPress={onPress}>
                <Text style={style.txt}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
    
}
const style=StyleSheet.create({
    btn:{
        padding:20, 
        width:'100%',
         backgroundColor: 'rgba(206, 141, 20, 0.97)', 
        borderRadius:5
    },
    txt:{
         color:'white',
          fontWeight:'bold',
           fontSize:20,
           textAlign:'center'
    },
    bg:{
        padding :10,
        width:'70%',
        justifyContent:'center',
       
    }
})
export default LButton;