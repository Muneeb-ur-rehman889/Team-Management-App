import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArrivingApplication from './ArrivingApplication';
import PreviousApplications from './PreviousApplicatios';
import { View, Text } from 'react-native';

const Material = createMaterialTopTabNavigator();

function NavigationApplication() {
  return (
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
      <Material.Screen name='New Applications' component={ArrivingApplication} />
      <Material.Screen name='Applications History' component={PreviousApplications} />
    </Material.Navigator>
  );
}

export default NavigationApplication;
