import Frame from '../../Components/Frame';
import Tasks from '../../Components/Tasks';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

function AllTasks() {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTaskHistory = async () => {
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
        setTaskList(formatted);
      }
    } catch (err) {
      console.error('Error fetching tasks with status:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskHistory();
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
          <Text className="text-2xl">All Tasks History</Text>
        </View>
        <View className="items-center">
          <Frame>
            {taskList.map((item, index) => (
              <Tasks data={item} key={item.id || index} />
            ))}
          </Frame>
        </View>
      </View>
      <View className="w-full h-20" />
    </ScrollView>
  );
}

export default AllTasks;
