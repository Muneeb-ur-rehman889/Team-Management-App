import DetailWorker from '../../Components/DetailWorker';
import { View, Text, Image, ScrollView } from 'react-native';
import Frame from '../../Components/Frame';
import SearchInput from '../../Components/SearchInput';

const users = [
  {
    icon: require('../../../assets/images/profile.png'),
    data: 'Sir Waqas',
    heading: 'Active',
    title: 'Teacher'
  },
  {
    icon: require('../../../assets/images/profile.png'),
    data: 'Muneeb ur rehman',
    heading: 'Active',
    title: 'Carpenter'
  },
  {
    icon: require('../../../assets/images/profile.png'),
    data: 'Maryam saif',
    heading: 'Active',
    title: 'Polisher'
  },
  {
    icon: require('../../../assets/images/profile.png'),
    data: 'Anika Shahid',
    heading: 'Active',
    title: 'Door maker'
  }
];

function WorkerDetais() {
  return (
    <View className="flex-1 p-3">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="items-center">
          <View className="my-5 mx-7">
            <Text className="text-xl">Team details</Text>
          </View>
          <View className="w-full items-center mt-4">
                  <SearchInput />
                </View>
          <Frame>
            <View>
              {users.map((items, index) => (
                <DetailWorker
                  key={index}
                  icon={items.icon}
                  data={items.data}
                  heading={items.heading}
                  title={items.title}
                />
              ))}
            </View>
          </Frame>
        </View>
        <View className='w-full h-20'>

            </View>
      </ScrollView>
    </View>
  );
}

export default WorkerDetais;
