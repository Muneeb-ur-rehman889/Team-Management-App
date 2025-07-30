import { View, Text, ScrollView } from 'react-native';
import NewApplication from '../../Components/NewApplication';
import { useEffect, useState } from 'react';

function ArrivingApplication() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch(`https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/application.json`);
      const data = await res.json();

      const result = [];

      for (const userId in data) {
        const userApps = data[userId];
        for (const appId in userApps) {
          result.push({
            ...userApps[appId],
            userId,
            applicationId: appId,
          });
        }
      }

      setApplications(result);
    } catch (error) {
      console.error("Failed to load applications:", error);
    }
  };

  return (
    <ScrollView>
      <View className='flex-1 items-center my-5'>
        <Text className='text-xl'>New Applications</Text>
      </View>

      <View className='flex-1 p-3 items-center'>
        {applications.map((item, index) => (
          <NewApplication
            key={`${item.userId}-${item.applicationId}`}
            data={item}
            onActionComplete={fetchApplications}
          />
        ))}
      </View>

      <View className='w-full h-20' />
    </ScrollView>
  );
}

export default ArrivingApplication;
