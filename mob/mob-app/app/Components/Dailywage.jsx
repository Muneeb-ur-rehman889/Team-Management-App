import { View, Text, TextInput } from 'react-native';

function Dailywage({ dailyWageAmount, setDailyWageAmount, daysWorked, setDaysWorked }) {
  return (
    <View className='w-full items-center'>
      <View className='flex-row items-center p-1 w-10/12'>
        <Text className='text-lg'>Daily wage amount</Text>
      </View>
      <View className='flex-row border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-[92%]'>
        <TextInput
          placeholder='e.g. 200'
          keyboardType='numeric'
          className='text-gray-700 w-full p-1'
          value={dailyWageAmount}
          onChangeText={setDailyWageAmount}
        />
      </View>
      <View className='flex-row items-center p-1 w-10/12'>
        <Text className='text-lg'>Number of days worked</Text>
      </View>
      <View className='flex-row border-2 border-gray-300 p-2 rounded-lg bg-white my-2 w-[92%]'>
        <TextInput
          placeholder='e.g. 22'
          keyboardType='numeric'
          className='text-gray-700 w-full p-1'
          value={daysWorked}
          onChangeText={setDaysWorked}
        />
      </View>
    </View>
  );
}

export default Dailywage;
