import {View,Text,Image, ScrollView} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Frame from '../../Components/Frame'
import LittleDiv from '../../Components/LittleDiv';
import Little from '../../Components/Little';
import Projectdetail from '../../Components/Projectdetail';
const data=[
    {
        icon:<FontAwesome6 name="person-breastfeeding" size={16} color="purple" />,
    data:'42',
    heading:'Present Today',
    persentage:'-3'
},
 {
    icon:<Fontisto name="checkbox-active" size={16} color="blue" />,
    data:'12',
    heading:'Active Projects',
    persentage:'4'
},
{
    icon:<MaterialIcons name="payments" size={16} color="orange" />,
    data:'3',
    heading:'Payments Today',
    persentage:'0'
}
]
const users=[
    {
        icon:require('../../../assets/images/profile.png'),
    data:'Sir Waqas',
    heading:'Active',
    title:'Teacher'
},
 {
    icon:require('../../../assets/images/profile.png'),
    data:'Muneeb ur rehman',
    heading:'Active',
   title:'Carpenter'
},
{
    icon:require('../../../assets/images/profile.png'),
    data:'Maryam saif',
    heading:'Active',
    title:'Polisher'
},{
    icon:require('../../../assets/images/profile.png'),
    data:'Anika Shahid',
    heading:'Active',
    title:'Door maker'
}
]
const project=[
    {
    name:'Cabinate making ',
    descreiption:'cabinate kitchen with blue and black combination. make 12 cabinates at 3 sides',
    enddate:'july-20-2025',
    images:[require('../../../assets/images/profile.png'),require('../../../assets/images/bilal.png'),require('../../../assets/images/hidaya.png'),require('../../../assets/images/sameer.png'),require('../../../assets/images/server.png')],
    progress:67,
 },
  {
    name:'Cabinate making ',
    descreiption:'cabinate kitchen with blue and black combination. make 12 cabinates at 3 sides',
    enddate:'july-20-2025',
    images:[require('../../../assets/images/profile.png'),require('../../../assets/images/bilal.png'),require('../../../assets/images/hidaya.png'),require('../../../assets/images/sameer.png'),require('../../../assets/images/server.png')],
    progress:90,
 },
  {
    name:'Cabinate making ',
    descreiption:'cabinate kitchen with blue and black combination. make 12 cabinates at 3 sides',
    enddate:'july-20-2025',
    images:[require('../../../assets/images/profile.png'),require('../../../assets/images/bilal.png'),require('../../../assets/images/hidaya.png'),require('../../../assets/images/sameer.png'),require('../../../assets/images/server.png')],
    progress:36,
 }, {
    name:'Cabinate making ',
    descreiption:'cabinate kitchen with blue and black combination. make 12 cabinates at 3 sides',
    enddate:'july-20-2025',
    images:[require('../../../assets/images/profile.png'),require('../../../assets/images/bilal.png'),require('../../../assets/images/hidaya.png'),require('../../../assets/images/sameer.png'),require('../../../assets/images/server.png')],
    progress:48,
 }
]
function ContractorHome(){
    return(
        <>
        <View className='flex-1'>
             <ScrollView>
            <View className='flex-row justify-between p-5'>
            <View className='mx-5 my-5'>
                <Text className='text-2xl'>Hello,Muneeb</Text>
                <Text className='text-gray'>Manage your team efficiently</Text>
            </View>
            <View className='bg-orange-500 justify-center items-center p-3 w-50 h-50 rounded-full'>
                <Image style={{width:80 , height:80, borderRadius:100}} source={require('../../../assets/images/profile.png')} />
            </View>
            </View>
            <View className='my-5 mx-7 '>
                <Text className='text-xl'>Quick Stats</Text>
            </View>
           
            <View className='flex-1 items-center'>
                
        <Frame>
            <View className='flex-row flex-wrap justify-between'>
                {
                    data.map((items)=>{
                        return(
                            <LittleDiv icon={items.icon} data={items.data} heading={items.heading} persentage={items.persentage} />
                        );
                    })
                }
            </View>
            </Frame>
            <View className='flex-1 w-full  items-start'>
             <View className='my-5 mx-8'>
                <Text className='text-xl '>Team Members</Text>
            </View>
            </View>
             <Frame>
            <View className='flex-row flex-wrap justify-between'>
                {
                    users.map((items)=>{
                        return(
                            <Little icon={items.icon} data={items.data} heading={items.heading} title={items.title} />
                        );
                    })
                }
            </View>
            </Frame>
             <View className='flex-1 w-full items-start'>
             <View className='my-5 mx-8'>
                <Text className='text-xl'>Current Projects</Text>
            </View>
            </View>
            <View className='w-full items-center'>
                {
                    project.map((items)=>{
                        return(
                            <Projectdetail name={items.name} descreiption={items.descreiption} enddate={items.enddate} images={items.images} progress={items.progress} />
                        );
                    })
                }
            </View>
            </View> 
            <View className='w-full h-20'>

            </View>
          </ScrollView>
        </View>
        </>
    );
}
export default ContractorHome