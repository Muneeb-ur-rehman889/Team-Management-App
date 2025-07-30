import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import ProjectDropdown from './ProjectDropdown';

function Monthlywage({ wageAmount, setWageAmount, setProjectCost }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json'
      );
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
    const project = projects.find(p => p.key === projectId);
    if (project?.fullData?.totalCost) {
      setProjectCost(Number(project.fullData.totalCost));
    } else {
      setProjectCost(0);
    }
  };

  if (loading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <View className='w-full items-center'>
      <View className='flex-row items-center p-1 w-10/12'>
        <Text className='text-lg'>Monthly wage amount</Text>
      </View>
      <View className='flex-row border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-[92%]'>
        <TextInput
          placeholder='e.g. 2.5'
          keyboardType='numeric'
          className='text-gray-700 w-full p-1'
          value={wageAmount}
          onChangeText={setWageAmount}
        />
      </View>
      <View className='flex-row items-center p-1 w-10/12'>
        <Text className='text-lg'>Select Project</Text>
      </View>
      <ProjectDropdown
        data={projects}
        title={'Project'}
        selected={selectedProject}
        onSelect={handleSelectProject}
      />
    </View>
  );
}

export default Monthlywage;
