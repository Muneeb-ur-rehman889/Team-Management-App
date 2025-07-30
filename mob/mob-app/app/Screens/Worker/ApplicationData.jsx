import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Apprecord from '../../Components/Apprecord';
import firebaseConfig from '../../firebaseConfig';

const auth = firebaseConfig.auth;

function ApplicationData() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error('User not authenticated');

        const userId = user.uid;

        const response = await fetch(
          `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/ApplicationWithStatus/${userId}.json`
        );

        const data = await response.json();

        if (!data) {
          setApplications([]);
          setLoading(false);
          return;
        }

        const records = Object.values(data)
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
          .reverse(); // Most recent first

        setApplications(records);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching status applications:', error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 p-4">
        <View className="my-8">
          <Text className="text-xl font-semibold">Applications Status</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : applications.length === 0 ? (
          <Text className="text-center text-gray-600">No status-recorded applications.</Text>
        ) : (
          applications.map((item, index) => (
            <Apprecord key={index} data={item} />
          ))
        )}

        <View className="h-20" />
      </View>
    </ScrollView>
  );
}

export default ApplicationData;
