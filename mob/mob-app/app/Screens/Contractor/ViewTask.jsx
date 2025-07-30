import Frame from '../../Components/Frame';
import Tasks from '../../Components/Tasks';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

function ViewTask() {
  const [acceptedTasks, setAcceptedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchAcceptedTasks = async () => {
  try {
    const res = await fetch(
      'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/TaskWithStatus.json'
    );
    const data = await res.json();

    if (data) {
      const formatted = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      // ✅ Correct key and value
      const filtered = formatted.filter(task => task.status?.toLowerCase() === 'accepted');
      setAcceptedTasks(filtered);
    }
  } catch (err) {
    console.error('Error fetching accepted tasks:', err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchAcceptedTasks();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <View className="items-center my-4">
          <Text className="text-2xl">Accepted Tasks</Text>
        </View>
        <View className="items-center">
          <Frame>
            {acceptedTasks.map((task, index) => (
              <Tasks data={task} key={task.id || index} />
            ))}
          </Frame>
        </View>
      </View>
      <View className="w-full h-20" />
    </ScrollView>
  );
}

export default ViewTask;
