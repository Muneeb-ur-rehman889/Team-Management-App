import { useState } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import firebaseConfig from '../firebaseConfig'; // adjust path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';

const auth = firebaseConfig.auth;

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Alert.alert('Success', `Welcome back ${user.email}!`);
      // navigate to home or dashboard
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <>
      <View className="w-11/12 bg-gray-200 my-7 justify-center h-72 rounded-lg items-center">
        <View className="flex-row items-center p-1 w-10/12">
          <Text>Enter your Email</Text>
        </View>
        <View className="flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12">
          <MaterialIcons name="email" size={24} color="gray" />
          <TextInput
            keyboardType="email-address"
            placeholder="e.g. muneeb@example.com"
            value={email}
            onChangeText={setEmail}
            className="text-gray-700 w-full border-0 p-1"
          />
        </View>

        <View className="flex-row items-center p-1 w-10/12">
          <Text>Enter your Password</Text>
        </View>
        <View className="flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12">
          <MaterialIcons name="password" size={24} color="gray" />
          <TextInput
            placeholder="e.g. Munee1234$Umar"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="text-gray-700 w-full border-0 p-1"
          />
        </View>
         <View className='w-full justify-center items-center '>
                <TouchableOpacity onPress={handleLogin} className='bg-blue-500 w-11/12 items-center p-4 rounded-lg'><Text className='text-white text-lg font-semibold'>Login</Text></TouchableOpacity>
             </View>
      </View>
    </>
  );
}

export default Login;
