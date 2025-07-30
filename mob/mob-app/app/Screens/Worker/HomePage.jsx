import {View,Image,Text,ScrollView} from 'react-native';
import Smalldiv from '../../Components/Smalldiv';
import Botton from '../../Components/Botton';
import Frame from '../../Components/Frame';
import Tasks from '../../Components/Tasks';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Hheader from '../../Components/Hheader';
function HomePage({navigation}){
    const date=[
        {
            heading:"check-in",
            data:"08:15 AM"
        },  {
            heading:"check-out",
            data:"-- : --"
        },  {
            heading:"Working Hours",
            data:"3h 45m"
        },
         {
            heading:"Shift",
            data:"08:00 - 17:00"
        }
    ]
    const CurrentTasks=[
        {
            name:"Doors making",
            location:'Local shop',
            time:"2 months",
             decision:'Accepted'
        }, {
            name:"Bed polishing",
            location:'Garden town',
            time:"10 days",
            decision:'Accepted'
        }, {
            name:"Floor Wooden Cielling",
            location:'Sialkot road',
            time:"1 months",
             decision:'Accepted'
        }, {
            name:"Wooden stairs",
            location:'Shalimar town',
            time:"10 days",
            decision:'Accepted'
        }
    ]
    function Handleattendence(){
        navigation.navigate('Attendence')
    }
    return(
        <>
        <ScrollView>
            <View className='container items-center flex-1 '>
            <Hheader/>
            <Frame>
                <View className='flex-row flex-1 items-center justify-between px-4'>
                    <Text className='text-xl'>Today's details</Text>
                    <Text className='text-blue-600 '>Thursday 25-june-2025</Text>
                </View>
               <View className='flex-row flex-wrap justify-between mx-4 '>
                {
                    date.map((item,index)=>{
                        return(
                                <Smalldiv heading={item.heading} data={item.data} />
                        );
                    })
                }
               </View>
               <Botton onPress={Handleattendence} data={'Mark Attendence'} color={'#0099ff'}/>
            </Frame>
            <View className='w-full justify-start'>
             <Text className='text-lg mx-3'>Earning</Text>
            </View>
                <Frame>
                    <Text className='text-gray-300'>Recent payment:</Text>
                     <Text className='text-2xl font-bold'>70,000PKR</Text>
                    <FontAwesome6 className='rounded-full absolute right-3 top-3' style={{with:20, height:20 }} name="circle-dollar-to-slot" size={24} color="#0099ff" />\
                    <View className='flex-1 flex-row justify-between'>
                        <Smalldiv heading={'recent payment'} data={'80,000PKR'} />
                       <Smalldiv heading={'Current payable'} data={'30,000PKR'} />
                    </View>
                </Frame>
            <View className='w-full justify-start'>
             <Text className='text-lg mx-3'>Accepted Tasks</Text>
            </View>
            <Frame>
                {
                    CurrentTasks.map((items,index)=>{
                        return(
                            <>
                            <Tasks data={items} key={index}/>
                            </>
                        );
                    })
                }
            </Frame>
            </View>
            <View className='w-full h-20'>

            </View>
            </ScrollView>
        </>
    );
}
export default HomePage;