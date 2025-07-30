import HomePage from './HomePage';
import AttendenceNavigation from './AttendNavigation';
import TaskNavigation from './TaskNavigation';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ApplicationNavigation from './ApplicationNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeNav() {
  const Bottum = createBottomTabNavigator();
  return (
    <Bottum.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Disable default label
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          justifyContent:'center',
          borderRadius: 15,
          height: 70,
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Bottum.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <Entypo
                name="home"
                size={20}
                color={focused ? '#1E90FF' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#1E90FF' : 'gray' }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Task"
        component={TaskNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <MaterialIcons
                name="add-task"
                size={20}
                color={focused ? '#1E90FF' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#1E90FF' : 'gray' }}>
                Task
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Attendence"
        component={AttendenceNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <FontAwesome5
                name="user-check"
                size={20}
                color={focused ? '#1E90FF' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#1E90FF' : 'gray' }}>
                Attendance
              </Text>
            </View>
          ),
        }}
      />
      <Bottum.Screen
        name="Application"
        component={ApplicationNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className='my-2'>
              <MaterialCommunityIcons
                name="application-edit"
                size={20}
                color={focused ? '#1E90FF' : 'gray'}
              />
              <Text style={{ fontSize: 10, color: focused ? '#1E90FF' : 'gray' }}>
                Application
              </Text>
            </View>
          ),
        }}
      />
    </Bottum.Navigator>
  );
}

export default HomeNav;
