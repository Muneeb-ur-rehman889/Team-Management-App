import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WageCalculator from './WageCalculator';
import ProjectCalculator from './ProjectCalculator';
function NavigationCal(){
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
                <Material.Screen name='Wage Calculator' component={WageCalculator}/>
                <Material.Screen name='Project cost Calculator' component={ProjectCalculator}/>
            </Material.Navigator>
        </>
    );
}
export default NavigationCal;