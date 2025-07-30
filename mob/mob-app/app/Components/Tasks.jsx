import { View, Text } from 'react-native';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

function Tasks({ data }) {
  const {
    name,
    location,
    description,
    startDate,
    endDate,
    wageAmount,
    wageType,
    customerContact,
    assignedAt,
    status,
  } = data;

  const isAccepted = status?.toLowerCase() === 'accepted';

  const statusBgColor = isAccepted ? 'bg-green-100' : 'bg-red-100';
  const statusTextColor = isAccepted ? 'text-green-700' : 'text-red-700';
  const statusBorderColor = isAccepted ? 'border-green-400' : 'border-red-400';

  return (
    <View className="relative rounded-2xl border-[1px] border-blue-300 bg-white p-4 shadow-md mb-4">
      {/* Top Section with Name and Status */}
      <View className="flex-row justify-between items-start mb-2">
        <Text className="text-xl font-semibold text-blue-700">{name}</Text>
        <View className={`px-3 py-1 rounded-full border ${statusBgColor} ${statusBorderColor}`}>
          <Text className={`text-xs font-bold uppercase ${statusTextColor}`}>
            {status}
          </Text>
        </View>
      </View>

      {/* Details Section */}
      <View className="space-y-1 mt-1">
        <View className="flex-row items-center">
          <Entypo name="location-pin" size={18} color="gray" />
          <Text className="ml-1 text-gray-700">Location: {location}</Text>
        </View>

        <View className="flex-row items-center">
          <MaterialIcons name="phone" size={18} color="gray" />
          <Text className="ml-1 text-gray-700">Contact: {customerContact}</Text>
        </View>

        <View className="flex-row items-center">
          <FontAwesome5 name="calendar-alt" size={16} color="gray" />
          <Text className="ml-1 text-gray-700">Start: {startDate} | End: {endDate}</Text>
        </View>

        <View className="flex-row items-center">
          <FontAwesome5 name="money-bill-wave" size={16} color="gray" />
          <Text className="ml-1 text-gray-700">
            Wage: {wageAmount} ({wageType})
          </Text>
        </View>

        <View className="flex-row items-center">
          <MaterialIcons name="access-time" size={18} color="gray" />
          <Text className="ml-1 text-gray-700">
            Assigned: {new Date(assignedAt).toLocaleString()}
          </Text>
        </View>

        <View className="mt-2">
          <Text className="text-gray-700 font-medium">Description:</Text>
          <Text className="text-gray-600 text-sm mt-1 leading-5">{description}</Text>
        </View>
      </View>
    </View>
  );
}

export default Tasks;
