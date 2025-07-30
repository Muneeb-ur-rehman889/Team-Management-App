import { View, Text, TouchableOpacity } from 'react-native';

function NewApplication({ data, onActionComplete }) {
  const { type, Cuname, date, amount, reason, start, end, time, userId, applicationId } = data;

  function getTypeStyle() {
    if (type === 'Leave') return 'bg-green-100';
    if (type === 'Early leave') return 'bg-purple-100';
    if (type === 'Early Payment') return 'bg-orange-200';
    return 'bg-gray-100 text-gray-700';
  }

  function getTypeText() {
    if (type === 'Leave') return 'text-green-500';
    if (type === 'Early leave') return 'text-purple-500';
    if (type === 'Early Payment') return 'text-orange-500';
    return 'text-gray-700';
  }

  function getBorder() {
    if (type === 'Leave') return 'border-l-green-500';
    if (type === 'Early leave') return 'border-l-purple-500';
    if (type === 'Early Payment') return 'border-l-orange-500';
    return 'border-l-gray-400';
  }

  const handleAction = async (status) => {
    try {
      const payload = {
        ...data,
        status,
        actedAt: new Date().toISOString(),
      };

      await fetch(`https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/ApplicationWithStatus/${userId}/${applicationId}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Optional: Remove from /application to simulate "moved"
      await fetch(`https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/application/${userId}/${applicationId}.json`, {
        method: 'DELETE',
      });

      alert(`Application ${status}`);
      if (onActionComplete) onActionComplete();
    } catch (error) {
      console.error(`Failed to ${status} application:`, error);
      alert(`Failed to ${status} application.`);
    }
  };

  return (
    <View className='items-center flex-1'>
      <View className={`p-4 bg-white my-5 rounded-md border-l-2 ${getBorder()}`}>
        {/* Type */}
        <View className={`px-3 py-1 w-20 justify-center items-center rounded-full ${getTypeStyle()}`}>
          <Text className={`text-sm font-semibold ${getTypeText()}`}>{type}</Text>
        </View>

        {/* Name and Date */}
        <View className="mt-2">
          <Text className="text-xl">{Cuname}</Text>
          <Text className="text-sm text-gray-400">{date}</Text>
        </View>

        {/* Conditionals */}
        <View className="mt-2 flex-row justify-between">
          {type === 'Leave' && (
            <>
              <Text className="font-semibold">Period</Text>
              <Text>{`${start} - ${end}`}</Text>
            </>
          )}
          {type === 'Early leave' && (
            <>
              <Text className="font-semibold">Date & Time</Text>
              <Text>{`${date} - ${time}`}</Text>
            </>
          )}
          {type === 'Early Payment' && (
            <>
              <Text className="font-semibold">Amount</Text>
              <Text>{amount}</Text>
            </>
          )}
        </View>

        {/* Reason */}
        <View className="mt-2">
          <Text className="font-semibold">Reason</Text>
          <Text>{reason}</Text>
        </View>

        {/* Buttons */}
        <View className='flex-1 my-4 flex-row'>
          <TouchableOpacity
            onPress={() => handleAction('accepted')}
            className='p-2 justify-center w-[50%] h-20 rounded-lg items-center bg-green-500'>
            <Text className='text-white'>ACCEPT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleAction('rejected')}
            className='p-2 justify-center w-[50%] h-20 rounded-lg items-center border-2 border-rose-600'>
            <Text className='text-rose-600'>REJECT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default NewApplication;
