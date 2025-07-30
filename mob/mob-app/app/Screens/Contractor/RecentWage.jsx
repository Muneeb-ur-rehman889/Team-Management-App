import {View,Text,ScrollView} from 'react-native';
import Frame from '../../Components/Frame';
import Caldiv from '../../Components/Caldiv';
function RecentWage(){
   const CurrentTasks=[
        {
            name:"Muneeb ur rehman",
            time:"2 months",
             Result:'20500'
        }, {
            name:"Maryam saif",
            time:"10 days",
            Result:'20500'
        }, {
            name:"sana ullah",
            time:"1 months",
             Result:'20500'
        }, {
            name:"Wooden stairs",
            time:"10 days",
            Result:'20500'
        },
        {
            name:"Muneeb ur rehman",
            time:"2 months",
             Result:'20500'
        }, {
            name:"Maryam saif",
           
            time:"10 days",
            Result:'20500'
        }, {
            name:"sana ullah",
            time:"1 months",
             Result:'20500'
        }, {
            name:"Wooden stairs",
            time:"10 days",
            Result:'20500'
        }
    ]
    return(
        <>
         <ScrollView>
            <View >
                <View className='items-center my-4'><Text className='text-2xl '>Calculated Wages</Text></View>
                <View className='items-center p-5'>
                <Frame>
                {
                    CurrentTasks.map((items,index)=>{
                        return(
                            <>
                            <Caldiv data={items} key={index}/>
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
export default RecentWage