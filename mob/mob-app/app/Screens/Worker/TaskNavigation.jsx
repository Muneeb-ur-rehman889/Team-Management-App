import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTasks from './AllTasks';
import NewTask from './NewTask'
function TaskNavigation(){
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
                <Material.Screen name='All' component={AllTasks}/>
                <Material.Screen name='New Task' component={NewTask}/>
            </Material.Navigator>
        </>
    );
}
export default TaskNavigation