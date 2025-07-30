import {View,Text} from 'react-native';
import Woorker from '../../Components/Woorker.jsx';
const worker={
    name:"Muneeb ur rehman",
    image: require('../../../assets/images/profile.png'),
    project:'Kitchen Cabinates',
    idcard:"341019920919",
    account:'123..#$'

}
function Workerprofile(){
    return(
        <>
            <View className='flex-1'>
                <Woorker name={worker.name} img={worker.image} project={worker.project} idcard={worker.idcard} account={worker.account}/>
            </View>
        </>
    );
}
export default Workerprofile