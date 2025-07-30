import ContractorHome from './ContractorHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationApplication from './NavigateApplication';
import NavigationCal from './NavigationCal';
import { View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import NavigationTask from './NavigationTask';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HeaderNavigation from './HeaderNavigation';

function HomeCNavigation() {
  const Bottum = createBottomTabNavigator();
  return (
    <Bottum.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Disable default label
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 60, // Reduced height
        },
        tabBarActiveTintColor: '#FF6F00',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Bottum.Screen
        name="Home"
        component={HeaderNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <Entypo
                name="home"
                size={20}
                color={focused ? '#FF6F00' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#FF6F00' : 'gray' }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Application"
        component={NavigationApplication}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <MaterialCommunityIcons
                name="application-edit"
                size={20}
                color={focused ? '#FF6F00' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#FF6F00' : 'gray' }}>
                Application
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Tasks"
        component={NavigationTask}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <MaterialIcons
                name="add-task"
                size={20}
                color={focused ? '#FF6F00' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#FF6F00' : 'gray' }}>
                Tasks
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Calculator"
        component={NavigationCal}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <Entypo
                name="calculator"
                size={20}
                color={focused ? '#FF6F00' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#FF6F00' : 'gray' }}>
                Calculator
              </Text>
            </View>
          ),
        }}
      />
    </Bottum.Navigator>
  );
}

export default HomeCNavigation;
