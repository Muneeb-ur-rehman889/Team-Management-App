import { View, Text, Alert } from 'react-native';
import Botton from './Botton';
import Frame from './Frame';
import { useEffect, useState } from 'react';

function ArrivingTask({ data }) {
  const {
    taskId,
    assignedAt,
    customerContact,
    description,
    endDate,
    location,
    projectId,
    startDate,
    wageAmount,
    wageType,
    status,
    refreshTasks,
    workerId,
  } = data;

  const [projectName, setProjectName] = useState('');
  const [workerName, setWorkerName] = useState('');
  const [loadingProject, setLoadingProject] = useState(true);
  const [loadingWorker, setLoadingWorker] = useState(true);

  // Fetch project name
  useEffect(() => {
    const fetchProjectName = async () => {
      try {
        const res = await fetch(
          `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Projects/${projectId}.json`
        );
        const projectData = await res.json();
        setProjectName(projectData?.projectName || 'Unknown Project');
      } catch (err) {
        console.error(err);
        setProjectName('Error loading project');
      } finally {
        setLoadingProject(false);
      }
    };

    fetchProjectName();
  }, [projectId]);

  // Fetch worker name
  useEffect(() => {
    const fetchWorkerName = async () => {
      try {
        const res = await fetch(
          `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/worker/${workerId}.json`
        );
        const workerData = await res.json();
        setWorkerName(workerData?.name || 'Unknown Worker');
      } catch (err) {
        console.error(err);
        setWorkerName('Error loading worker');
      } finally {
        setLoadingWorker(false);
      }
    };

    fetchWorkerName();
  }, [workerId]);

  const updateStatus = async (newStatus) => {
    const finalStatus = newStatus === 'accepted' ? 'accepted' : 'not accepted';
    const updatedTask = { ...data, status: finalStatus };

    try {
      // 1. Copy to TaskWithStatus
      const copyRes = await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/TaskWithStatus/${taskId}.json`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
        }
      );

      if (!copyRes.ok) {
        throw new Error('Failed to store task in TaskWithStatus');
      }

      // 2. Delete from tasks
      const deleteRes = await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${taskId}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!deleteRes.ok) {
        throw new Error('Failed to delete task from tasks node');
      }

      Alert.alert('Success', `Task marked as "${finalStatus}"`);
      refreshTasks?.();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong while updating status');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 items-center mb-4 px-4">
      <Frame>
        {/* Header */}
        <View className="mb-4">
          <Text className="text-2xl font-semibold text-blue-700">
            {loadingProject ? 'Loading project...' : projectName}
          </Text>
          <Text className="text-sm text-gray-600 mt-1">
            {loadingWorker ? 'Loading worker...' : `Prefers to: ${workerName}`}
          </Text>
          <Text className="text-gray-500 text-sm mt-1">
            Assigned: {assignedAt?.split('T')[0] || 'N/A'}
          </Text>
        </View>

        {/* Dates */}
        <View className="flex-row justify-between my-4">
          <View className="items-center">
            <Text className="text-sm text-gray-500">Start Date</Text>
            <Text className="text-base font-medium">{startDate}</Text>
          </View>
          <View className="items-center">
            <Text className="text-sm text-gray-500">End Date</Text>
            <Text className="text-base font-medium">{endDate}</Text>
          </View>
        </View>

        {/* Description */}
        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Description</Text>
          <Text className="text-base text-gray-800 bg-gray-100 px-2 py-1 rounded">
            {description}
          </Text>
        </View>

        {/* Wage & Location */}
        <View className="flex-row justify-between mb-4">
          <View className="items-center">
            <Text className="text-sm text-gray-500">Wage</Text>
            <Text className="text-base font-medium">
              {wageAmount} ({wageType})
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-sm text-gray-500">Location</Text>
            <Text className="text-base font-medium">{location}</Text>
          </View>
        </View>

        {/* Customer Contact */}
        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Customer Contact</Text>
          <Text className="text-base font-medium px-2 py-1 bg-gray-50 rounded">
            {customerContact}
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-col space-y-2 mt-4">
          <Botton
            data="Can not do"
            color="orange"
            onPress={() => updateStatus('cannot')}
          />
          <Botton
            data="Accept"
            color="#0099ff"
            onPress={() => updateStatus('accepted')}
          />
        </View>
      </Frame>
    </View>
  );
}

export default ArrivingTask;
