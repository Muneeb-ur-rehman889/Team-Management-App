import LandingScreen from './Screens/LandingScreen.jsx';
import SignupScreen from './Screens/Contractor/SignupScreen.jsx';
import SignUp from './Screens/Worker/SignUp.jsx'
import Contractorlogin from './Screens/Contractor/Contractorlogin.jsx';
import Workerlogin from './Screens/Worker/WorkerLogin.jsx'
import Attendence from './Screens/Worker/Attendence.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Screens/Worker/HomePage.jsx'
import HomeNav from './Screens/Worker/HomeNavigation.jsx';
import ContractorHome from './Screens/Contractor/ContractorHome.jsx';
import RecentWage from './Screens/Contractor/RecentWage.jsx';
import RecentProject from './Components/RecentProject.jsx';
import HomeCNavigation from './Screens/Contractor/HomeCNavigation.jsx';
export default function Index() {
   const Stack=createNativeStackNavigator();

  return (
   <>
   <Stack.Navigator  initialRouteName="Landing" screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Landing' component={LandingScreen} ></Stack.Screen>
    <Stack.Screen name='ContratocsignUp' component={SignupScreen} ></Stack.Screen>
    <Stack.Screen name='WorkerSignUp' component={SignUp} ></Stack.Screen>
    <Stack.Screen name='ContractorLogin' component={Contractorlogin} ></Stack.Screen>
     <Stack.Screen name='WorkerLogin' component={Workerlogin} ></Stack.Screen>
      <Stack.Screen name='Home' component={HomeNav} ></Stack.Screen>
      <Stack.Screen name='Homepage' component={HomePage} ></Stack.Screen>
      <Stack.Screen name='Attendence' component={Attendence} ></Stack.Screen>
      <Stack.Screen name='homenav' component={HomeCNavigation} ></Stack.Screen>
       <Stack.Screen name='CHome' component={ContractorHome} ></Stack.Screen>
       <Stack.Screen name='Wage History' component={RecentWage} ></Stack.Screen>
        <Stack.Screen name='Project History' component={RecentProject} ></Stack.Screen>
   </Stack.Navigator>
   </>
  );
}
