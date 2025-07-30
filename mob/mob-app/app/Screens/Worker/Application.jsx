import ApplicationType from "../../Components/ApplicationType";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React,{useState} from 'react';
import Leave from "../../Components/Leave";
import EarlyLeave from "../../Components/EarlyLeave";
import EarlyPayment from "../../Components/EarlyPaymen";
import Frame from "../../Components/Frame";
import {View,Text, ScrollView} from 'react-native';
function Application(){
    const [isleave,setisleave]=useState(false);
     const [isEarlyL,setisEarlyL]=useState(false);
       const [isEarlyP,setisEarlyP]=useState(false);
    const [selected, setSelected] = useState(null);
    function HandleEalyP(){
        setSelected('Early payment');
        setisEarlyL(false);
        setisleave(false);
        setisEarlyP(true);  
    }
    function HandleEalyL(){
       setSelected('Early Leave');
       setisleave(false);
        setisEarlyP(false);  
        setisEarlyL(true);
    }
     function HandleLeave(){
       setSelected('Leave')
        setisEarlyP(false);  
        setisEarlyL(false);
         setisleave(true);
    }
    return(
        <>
            <ScrollView>
            <View className="items-center">
                <Frame>
                <View className='flex-row justify-center'>
                <ApplicationType name={'Early payment'} selected={selected=== 'Early payment'}
                onPress={HandleEalyP} icon={<FontAwesome6 name="circle-dollar-to-slot" size={24} color={'#0099ff'} />} />
                <ApplicationType name={'Leave'} selected={selected === 'Leave'}
                onPress={HandleLeave} icon={<Entypo name="calendar" size={24} color='#0099ff' />} />
                <ApplicationType name={'Early Leave'}  selected={selected === 'Early Leave'}
                onPress={HandleEalyL} icon={<Ionicons name="time" size={24} color='#0099ff' />} />
                </View>
                </Frame>
            </View>
             {
                    isleave&&<View>
                        <Leave/>
                    </View>
                }
                {
                    isEarlyL&&<View>
                        <EarlyLeave/>
                    </View>
                }
                {
                    isEarlyP&&<View>
                        <EarlyPayment/>
                    </View>
                }
                <View className='w-full h-20'>

            </View>
            </ScrollView>
        </>
    );
}
export default Application;