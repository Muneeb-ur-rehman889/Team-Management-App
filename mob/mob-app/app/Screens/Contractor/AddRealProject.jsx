import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import SearchInput from '../../Components/SearchInput';
import Projectdetail from '../../Components/Projectdetail';
import AddProjejectmodel from '../../Components/AddProjectmodel';

function AddRealProject() {
  const [modalvisible, setVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json'
      );
      const data = await response.json();

      if (data) {
        const parsed = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          progress: Math.floor(Math.random() * 50 + 40), // Random progress for demo
          images: [
            require('../../../assets/images/profile.png'),
            require('../../../assets/images/bilal.png'),
            require('../../../assets/images/hidaya.png'),
            require('../../../assets/images/sameer.png'),
          ], // You can add image URLs later if needed
        }));
        setProjects(parsed);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects when component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  // Optional: Refetch after adding a project
  useEffect(() => {
    if (!modalvisible) {
      fetchProjects();
    }
  }, [modalvisible]);

  return (
    <View className="flex-1 relative pt-6">
      <View className="w-full items-center mt-4">
        <SearchInput />
      </View>

      <View className="my-3 p-4 flex-1">
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#FB923C" />
            <Text className="mt-2 text-gray-500">Loading projects...</Text>
          </View>
        ) : (
          <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
            {projects.map((item) => (
              <Projectdetail
                key={item.id}
                name={item.projectName}
                descreiption={item.description}
                enddate={item.endDate}
                images={item.images}
                progress={item.progress}
              />
            ))}
          </ScrollView>
        )}
      </View>

      <AddProjejectmodel modalvisible={modalvisible} setVisible={setVisible} title="Add Project" />

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View className="w-14 h-14 bg-orange-700 absolute bottom-28 right-8 rounded-full justify-center items-center shadow-lg z-50">
          <Text className="text-white text-2xl">+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddRealProject;
