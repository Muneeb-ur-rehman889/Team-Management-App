import { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import firebaseConfig from '../firebaseConfig'; // adjust if needed
import { onAuthStateChanged } from 'firebase/auth';

const auth = firebaseConfig.auth;

function Hheader() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const response = await fetch(
            `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/worker/${user.uid}.json`
          );
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0099ff" />;
  }

  if (!userData) {
    return <Text>No user data found.</Text>;
  }

  return (
    <View className='flex w-11/12 my-5 bg-gray-300 rounded-lg flex-row p-3 justify-center items-center'>
      <View className='mx-3 rounded-full bg-blue-600 p-2'>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: userData.imageUrl }}
        />
      </View>
      <View>
        <Text className='text-2xl font-bold'>{userData.name}</Text>
        <Text className='text-2xl'>ID: {userData.securityNo}</Text>
        <Text className='text-lg'>{userData.email}</Text>
      </View>
    </View>
  );
}

export default Hheader;
