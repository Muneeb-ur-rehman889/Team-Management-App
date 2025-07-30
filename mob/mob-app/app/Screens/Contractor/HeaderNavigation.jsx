import { createDrawerNavigator } from '@react-navigation/drawer';
import ContractorHome from './ContractorHome';
import WorkerDetails from './WorkerDetails';
import AddRealProject from './AddRealProject';
import AddProject from './AddProject';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Drawer = createDrawerNavigator();

export default function HeaderNavigation() {
  return (
      <Drawer.Navigator
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#FF6F00', 
          },
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#121212', 
            
          },
          drawerActiveBackgroundColor: '#FF6F00',
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#cccccc',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          
        }}
      >
        <Drawer.Screen
          name="Home"
          component={ContractorHome}
          options={{
            drawerIcon: ({ color }) => <Entypo name="home" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Payment"
          component={WorkerDetails}
          options={{
            drawerIcon: ({ color }) => <MaterialIcons name="payments" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Furniture"
          component={AddProject}
          options={{
            drawerIcon: ({ color }) => <MaterialIcons name="chair" size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Projects"
          component={AddRealProject}
          options={{
            drawerIcon: ({ color }) => <MaterialIcons name="assignment" size={20} color={color} />,
          }}
        />
      </Drawer.Navigator>
  
  );
}
