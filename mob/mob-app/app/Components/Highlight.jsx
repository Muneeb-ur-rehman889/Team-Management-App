import {View,Text,StyleSheet} from 'react-native'
function Highlight({data}){
    const {description,logo}=data
    return(
        <>
            <View style={style.con}>
                <View style={style.log}>{logo}</View>
                <Text style={style.txt}>{description}</Text>
            </View>
        </>
    );
}
const style=StyleSheet.create({
    con:{
        width:60,
    },
   txt:{   
        color: 'rgba(255, 255, 255, 0.77)',
        fontSize:12
   },
   log:{
     color:'rgba(219, 130, 12, 0.84)',
     fontSize:50,
     marginVertical:5
   }
})
export default Highlight;