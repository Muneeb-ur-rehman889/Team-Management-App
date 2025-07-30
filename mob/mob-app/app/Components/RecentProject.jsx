import {View,Text,ScrollView} from 'react-native';
import Frame from './Frame';
import Calproject from '../Screens/Contractor/Calproject';
function RecentProject(){
   const CurrentTasks=[
        {
            name:"Doors making",
            location:'Local shop',
            time:"2 months",
             Result:'20500'
        }, {
            name:"Bed polishing",
            location:'Garden town',
            time:"10 days",
            Result:'2070'
        }, {
            name:"Floor Wooden Cielling",
            location:'Sialkot road',
            time:"1 months",
             Result:'2450'
        }, {
            name:"Wooden stairs",
            location:'Shalimar town',
            time:"10 days",
            Result:'2500'
        },
         {
            name:"Doors making",
            location:'Local shop',
            time:"2 months",
             Result:'20500'
        }, {
            name:"Bed polishing",
            location:'Garden town',
            time:"10 days",
            Result:'2070'
        }, {
            name:"Floor Wooden Cielling",
            location:'Sialkot road',
            time:"1 months",
             Result:'2450'
        }, {
            name:"Wooden stairs",
            location:'Shalimar town',
            time:"10 days",
            Result:'2500'
        }
    ]
    return(
        <>
         <ScrollView >
            <View >
               
                <View className='items-center my-4'><Text className='text-2xl '>Calculated project cost</Text></View>
                <View className='items-center p-5'>
                <Frame>
                {
                    CurrentTasks.map((items,index)=>{
                        return(
                            <>
                            <Calproject data={items} key={index}/>
                            </>
                        );
                    })
                }
            </Frame>
            </View>
            </View>
            </ScrollView>
        </>
    );
}
export default RecentProject;