import { View, Text, ScrollView, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import ProjectDropdown from '../../Components/ProjectDropdown';
import RadioButtons from '../../Components/RadioButton';
import Frame from '../../Components/Frame';
import Botton from '../../Components/Botton';

const wage = ['Daily', 'Monthly'];

const AssignTask = () => {
  const [selectedWageType, setSelectedWageType] = useState('');
  const [selectedWorker, setSelectedWorker] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [workers, setWorkers] = useState([]);
  const [projects, setProjects] = useState([]);

  // Input states
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [wageAmount, setWageAmount] = useState('');
  const [location, setLocation] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [description, setDescription] = useState('');

  // Fetch workers
  const fetchWorkers = async () => {
    try {
      const res = await fetch('https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/worker.json');
      const data = await res.json();
      if (data) {
        const workerArray = Object.entries(data).map(([key, value]) => ({
          key,
          value: value.name || 'Unnamed Worker',
        }));
        setWorkers(workerArray);
      }
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await fetch('https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json');
      const data = await res.json();
      if (data) {
        const projectArray = Object.entries(data).map(([key, value]) => ({
          key,
          value: value.projectName || 'Unnamed Project',
          fullData: value
        }));
        setProjects(projectArray);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchWorkers();
    fetchProjects();
  }, []);

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    const project = projects.find(p => p.key === projectId);
    if (project?.fullData) {
      setLocation(project.fullData.customerLocation || '');
      setCustomerContact(project.fullData.customerContact || '');
    }
  };

  const handleAssign = async () => {
    if (
      !selectedWorker ||
      !selectedProject ||
      !selectedWageType ||
      !startDate ||
      !endDate ||
      !wageAmount ||
      !location ||
      !customerContact
    ) {
      Alert.alert('Missing Fields', 'Please fill all fields before assigning.');
      return;
    }

    const taskData = {
      workerId: selectedWorker,
      projectId: selectedProject,
      wageType: selectedWageType,
      startDate,
      endDate,
      wageAmount,
      location,
      customerContact,
      description,
      assignedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(taskData),
        }
      );
      if (response.ok) {
        Alert.alert('Success', 'Task assigned successfully');
        // Optionally reset form
        setSelectedWorker('');
        setSelectedProject('');
        setSelectedWageType('');
        setStartDate('');
        setEndDate('');
        setWageAmount('');
        setLocation('');
        setCustomerContact('');
        setDescription('');
      } else {
        Alert.alert('Error', 'Failed to assign task');
      }
    } catch (error) {
      console.error('Task saving error:', error);
      Alert.alert('Error', 'Something went wrong while assigning the task');
    }
  };

  return (
    <View className='flex-1 my-6'>
      <ScrollView>
        <View className='flex-1 p-5'>
          <Text className='text-2xl mb-4'>Assign Task</Text>
          <Frame>
            <View className='flex-1 items-center'>

              <ProjectDropdown
                data={workers}
                title='Worker'
                selected={selectedWorker}
                onSelect={setSelectedWorker}
              />

              <RadioButtons
                Options={wage}
                text="Wage type"
                selected={selectedWageType}
                setSelected={setSelectedWageType}
              />

              <ProjectDropdown
                data={projects}
                title='Project'
                selected={selectedProject}
                onSelect={handleProjectSelect}
              />

              {/* Dates */}
              <View className='flex-row justify-between w-full'>
                <View className='w-[48%]'>
                  <Text className='text-gray-700 text-lg p-1'>Start date</Text>
                  <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2'>
                    <TextInput
                      placeholder='DD/MM/YYYY'
                      className='text-gray-700'
                      value={startDate}
                      onChangeText={setStartDate}
                    />
                  </View>
                </View>
                <View className='w-[48%]'>
                  <Text className='text-gray-700 text-lg p-1'>End date</Text>
                  <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2'>
                    <TextInput
                      placeholder='DD/MM/YYYY'
                      className='text-gray-700'
                      value={endDate}
                      onChangeText={setEndDate}
                    />
                  </View>
                </View>
              </View>

              {/* Wage Amount */}
              <Text className='text-gray-700 text-lg p-1 w-full'>Wage Amount</Text>
              <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-full'>
                <TextInput
                  placeholder='e.g. 2000'
                  keyboardType='numeric'
                  className='text-gray-700'
                  value={wageAmount}
                  onChangeText={setWageAmount}
                />
              </View>

              {/* Location */}
              <Text className='text-gray-700 text-lg p-1 w-full'>Enter location</Text>
              <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-full'>
                <TextInput
                  value={location}
                  onChangeText={setLocation}
                  placeholder='e.g. Jinnah Road'
                  className='text-gray-700'
                />
              </View>

              {/* Customer Contact */}
              <Text className='text-gray-700 text-lg p-1 w-full'>Customer contact</Text>
              <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-full'>
                <TextInput
                  value={customerContact}
                  onChangeText={setCustomerContact}
                  placeholder='0324...'
                  keyboardType='numeric'
                  className='text-gray-700'
                />
              </View>

              {/* Description */}
              <Text className='text-gray-700 text-lg p-1 w-full'>Description</Text>
              <View className='border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-full'>
                <TextInput
                  multiline
                  numberOfLines={4}
                  placeholder="Write details here..."
                  className='text-gray-700'
                  value={description}
                  onChangeText={setDescription}
                />
              </View>

              {/* Assign Button */}
              <Botton data={'Assign'} color={'#ff5500'} onPress={handleAssign} />

              <View className='h-10' />
            </View>
          </Frame>
        </View>
        <View className='h-20' />
      </ScrollView>
    </View>
  );
};

export default AssignTask;
