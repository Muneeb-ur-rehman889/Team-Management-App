import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Attendence from './Attendence';
import AttendenceRecord from './AttendenceRecord';
function AttendNavigation(){
    const Material=createMaterialTopTabNavigator();
    return(
        <>
            <Material.Navigator screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#1E90FF', 
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#1E90FF', 
          height: 4,
          borderRadius: 10,
        },
        tabBarStyle: {
          backgroundColor: '#fff', 
          elevation: 5,
          borderBottomWidth: 1,
          borderColor: '#eee',
        },
        tabBarScrollEnabled: false, 
      }}>
                <Material.Screen name='Mark Attendence' component={Attendence}/>
                <Material.Screen name='See record' component={AttendenceRecord}/>
            </Material.Navigator>
        </>
    );
}
export default AttendNavigation