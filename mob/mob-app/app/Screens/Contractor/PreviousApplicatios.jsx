import { View, Text, ScrollView } from 'react-native';
import Apprecord from '../../Components/Apprecord';
import { useEffect, useState } from 'react';

function PreviousApplications() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const [appsResponse, usersResponse] = await Promise.all([
          fetch('https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/ApplicationWithStatus.json'),
          fetch('https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'),
        ]);

        if (!appsResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch applications or users');
        }

        const appsData = await appsResponse.json();
        const usersData = await usersResponse.json();

        const allRecords = [];

        for (const userId in appsData) {
          const userApplications = appsData[userId];

          const workerName = usersData?.[userId]?.name || 'Unknown Worker';

          for (const applicationId in userApplications) {
            const appData = userApplications[applicationId];

            allRecords.push({
              ...appData,
              userId,
              applicationId,
              workerName, // 💡 Add the worker’s name here
            });
          }
        }

        setRecords(allRecords);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 p-3">
        <Text className="text-xl my-5 mx-5">All Applications (Contractor View)</Text>

        {records.length > 0 ? (
          records.map((item, index) => (
            <Apprecord key={index} data={item} />
          ))
        ) : (
          <Text className="text-center text-gray-500">No applications found.</Text>
        )}

        <View className="w-full h-20" />
      </View>
    </ScrollView>
  );
}

export default PreviousApplications;
