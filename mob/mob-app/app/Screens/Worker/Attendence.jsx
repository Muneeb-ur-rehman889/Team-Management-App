import { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Frame from '../../Components/Frame';
import Attendencemodel from '../../Components/Attendencemodel';
import Calenders from '../../Components/Calender';
import Seeattendence from '../../Components/Seeattendence';
import firebaseConfig from '../../firebaseConfig';
import moment from 'moment';
const auth = firebaseConfig.auth;

function Attendence() {
  const [modalvisible, setVisible] = useState(false);
  const [attendances, setAttendances] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [presentDayData, setPresentDayData] = useState(null);
        function calculateHours(checkin, checkout) {
  if (!checkin || !checkout) return '--:--';

  const [inH, inM] = checkin.split(':').map(Number);
  const [outH, outM] = checkout.split(':').map(Number);

  const start = inH * 60 + inM;
  const end = outH * 60 + outM;
  const total = end - start;

  if (total <= 0) return '--:--'; // In case checkout is earlier than checkin

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  return `${hours}:${minutes.toString().padStart(2, '0')}`;
}

 useEffect(() => {
  const fetchAttendance = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const userId = user.uid;
    const today = moment().format('YYYY-MM-DD');
    const currentHour = new Date().getHours();

    const response = await fetch(
      `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/attendance/${userId}.json`
    );
    const data = await response.json() || {};

    // Auto-mark absent after 5 PM
    if (!data[today] && currentHour >= 17) {
      await fetch(
        `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/attendance/${userId}/${today}.json`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            status: 'Absent',
            checkin: '--:--',
            checkout: '--:--',
            // We'll not save hours here; compute it dynamically instead
          }),
        }
      );
      data[today] = {
        status: 'Absent',
        checkin: '--:--',
        checkout: '--:--',
      };
    }

    // Map entries and calculate hours dynamically
    const allEntries = Object.entries(data).map(([date, value]) => {
      const { checkin, checkout } = value;
      let calculatedHours = '--:--';

      if (
        checkin &&
        checkout &&
        checkin !== '--:--' &&
        checkout !== '--:--'
      ) {
       calculatedHours = calculateHours(checkin, checkout);
      }

      return {
        date,
        ...value,
        hours: calculatedHours,
      };
    });

    // Filter last 7 days
    const last7Days = allEntries.filter((entry) =>
      moment(entry.date).isSameOrAfter(moment().subtract(6, 'days'), 'day')
    );

    setPresentDayData(data[today] || null);
    setAttendances(last7Days.reverse()); // Most recent first
  };

  fetchAttendance();
}, []);


  const renderStatus = (data) => {
    const status = data?.status?.toLowerCase();
    if (!data || status === 'pending') return { status: 'Pending', color: 'yellow' };
    if (status === 'absent') return { status: 'Absent', color: 'red' };
    return { status: 'Present', color: 'green' };
  };

  return (
    <>
      <View className='p-4'>
        <Text className='text-xl'>Attendance</Text>
        <Text className='text-gray-400'>{moment().format('dddd, MMM-DD-YYYY')}</Text>
      </View>

      <ScrollView>
        <View className='flex-1 items-center'>
          <Frame>
           <Seeattendence
  data={{
    day: moment().format('dddd, MMM-DD-YYYY'),
    status: presentDayData?.status || 'pending',
    checkin: presentDayData?.checkin || '--:--',
    checkout: presentDayData?.checkout || '--:--',
    hours: calculateHours(
      presentDayData?.checkin,
      presentDayData?.checkout
    ),
  }}
  statusColor={renderStatus(presentDayData).color}
/>


            <View className='flex-1 my-3 items-center'>
              <TouchableOpacity
                className='w-[90%] rounded-lg items-center bg-blue-600 p-4 shadow-lg'
                onPress={() => setVisible(true)}
              >
                <Text className='text-white text-2xl'>Mark Attendance</Text>
              </TouchableOpacity>
            </View>
          </Frame>

          <Frame>
            <Text className='text-xl mb-2'>Select Date</Text>
            <Calenders onDateChange={setSelectedDate} />
          </Frame>

          <Frame>
            <Text className='text-xl mb-2'>This Week's Attendance</Text>
            {attendances.map((item, index) => (
              <Seeattendence
                key={index}
                data={{
                  day: moment(item.date).format('dddd, MMM-DD-YYYY'),
                  status: item.status,
                  checkin: item.checkin,
                  checkout: item.checkout,
                  hours: item.hours
                }}
                statusColor={renderStatus(item).color}
              />
            ))}
          </Frame>
        </View>
        <View className='w-full h-20' />
      </ScrollView>

      <Attendencemodel
        modalvisible={modalvisible}
        setVisible={setVisible}
        date={selectedDate}
      />
    </>
  );
}

export default Attendence;
