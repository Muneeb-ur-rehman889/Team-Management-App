import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import ArrivingTask from '../../Components/ArrivingTask';
import { ScrollView } from 'react-native-gesture-handler';

function NewTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json`
      );
      const data = await res.json();
      if (data) {
        const allTasks = Object.entries(data).map(([key, task]) => ({
          taskId: key,
          ...task,
        }));
        setTasks(allTasks);
      } else {
        setTasks([]); // Ensure tasks is empty array if no data
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const refreshTasks = () => {
    setLoading(true);
    fetchTasks();
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>No tasks available.</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView>
        <View className="items-center my-4">
          <Text className="text-2xl font-semibold">All Available Tasks</Text>
        </View>

        {tasks.map((item) => (
          <ArrivingTask
            key={item.taskId}
            data={{
              ...item,
              refreshTasks, // Optional if needed later
            }}
          />
        ))}
      </ScrollView>
      <View className="w-full h-20" />
    </>
  );
}

export default NewTask;
