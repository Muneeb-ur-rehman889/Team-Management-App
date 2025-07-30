import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AssignTask from './AssignTask';
import ViewTask from './ViewTask';
function NavigationTask(){
    const Material=createMaterialTopTabNavigator();
    return(
        <>
            <Material.Navigator
             screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#FF8C42', 
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FF8C42', 
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
      }}
            >
                <Material.Screen name='Assign Task' component={AssignTask}/>
                <Material.Screen name='Task History' component={ViewTask}/>
            </Material.Navigator>
        </>
    );
}
export default NavigationTask;