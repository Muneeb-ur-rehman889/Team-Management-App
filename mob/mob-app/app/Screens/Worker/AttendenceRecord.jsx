import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Frame from '../../Components/Frame';
import Smalldiv from '../../Components/Smalldiv';
import Seeattendence from '../../Components/Seeattendence';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Zocial from '@expo/vector-icons/Zocial';
import firebaseConfig from '../../firebaseConfig';
import moment from 'moment';

const auth = firebaseConfig.auth;

function AttendenceRecord() {
  const [allAttendance, setAllAttendance] = useState([]);

  const calculateHours = (checkin, checkout) => {
    if (!checkin || !checkout || checkin === '--:--' || checkout === '--:--') return '--:--';

    const [inH, inM] = checkin.split(':').map(Number);
    const [outH, outM] = checkout.split(':').map(Number);

    const start = inH * 60 + inM;
    const end = outH * 60 + outM;
    const total = end - start;

    if (total <= 0) return '--:--';

    const hours = Math.floor(total / 60);
    const minutes = total % 60;

    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchAllAttendance = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userId = user.uid;

      const response = await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/attendance/${userId}.json`
      );
      const data = await response.json() || {};

      const allEntries = Object.entries(data).map(([date, value]) => {
        const { checkin, checkout } = value;
        const hours = calculateHours(checkin, checkout);

        return {
          date,
          ...value,
          hours,
        };
      });

      // Sort by date descending
      const sorted = allEntries.sort((a, b) =>
        moment(b.date).diff(moment(a.date))
      );

      setAllAttendance(sorted);
    };

    fetchAllAttendance();
  }, []);

  const recordSummary = [
    {
      heading: 'Attendance Rate',
      name: '92%',
      icon: <MaterialCommunityIcons name="brightness-percent" size={24} color="#0099ff" />,
    },
    {
      heading: 'Total Hours',
      name: '168h',
      icon: <MaterialCommunityIcons name="hours-24" size={24} color="#0099ff" />,
    },
    {
      heading: 'Project time',
      name: '12h',
      icon: <Octicons name="project" size={24} color="#0099ff" />,
    },
    {
      heading: 'Status',
      name: '18 2 1',
      icon: <Zocial name="statusnet" size={24} color="#0099ff" />,
    },
  ];

  const renderStatus = (data) => {
    const status = data?.status?.toLowerCase();
    if (!data || status === 'pending') return { status: 'Pending', color: 'yellow' };
    if (status === 'absent') return { status: 'Absent', color: 'red' };
    return { status: 'Present', color: 'green' };
  };

  return (
    <ScrollView>
      <View className="flex-1 items-center">
        <Frame>
          <View className="flex-row justify-between">
            <Text className="text-xl">Monthly Summary</Text>
            <Text className="text-blue-500">All Time</Text>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {recordSummary.map((item, index) => (
              <Smalldiv key={index} data={item.name} heading={item.heading} icon={item.icon} />
            ))}
          </View>
        </Frame>

        <Frame>
          {allAttendance.map((item, index) => (
            <Seeattendence
              key={index}
              data={{
                day: moment(item.date).format('dddd, MMM-DD-YYYY'),
                status: item.status,
                checkin: item.checkin,
                checkout: item.checkout,
                hours: item.hours,
              }}
              statusColor={renderStatus(item).color}
            />
          ))}
        </Frame>
      </View>

      <View className="w-full h-20" />
    </ScrollView>
  );
}

export default AttendenceRecord;
