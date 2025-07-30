import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Application from './Application';
import ApplicationData from './ApplicationData';
function ApplicationNavigation(){
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
                <Material.Screen name='Write New' component={Application}/>
                <Material.Screen name='See Previous' component={ApplicationData}/>
            </Material.Navigator>
        </>
    );
}
export default ApplicationNavigation;