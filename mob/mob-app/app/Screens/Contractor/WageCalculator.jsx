import MyDatePicker from "../../Components/Datepicker";
import RadioButtons from "../../Components/RadioButton";
import Frame from '../../Components/Frame';
import Monthlywage from '../../Components/Monthlywage';
import Dailywage from '../../Components/Dailywage';
import Botton from "../../Components/Botton";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from "react";

const wage = ['Daily', 'Monthly'];

function WageCalculator({ navigation }) {
  const [selectedWageType, setSelectedWageType] = useState('');
  const [totalWage, setTotalWage] = useState(0);

  const [dailyWageAmount, setDailyWageAmount] = useState('');
  const [daysWorked, setDaysWorked] = useState('');

  const [monthlyWageAmount, setMonthlyWageAmount] = useState('');
  const [projectCost, setProjectCost] = useState('');

  function GotoHistory() {
    navigation.navigate('Wage History');
  }

  const calculateTotal = () => {
    if (selectedWageType === 'Daily') {
      const total = Number(dailyWageAmount) * Number(daysWorked);
      setTotalWage(total);
    } else if (selectedWageType === 'Monthly') {
      const thirtyPercent = Number(projectCost) * 0.3;
      const total = thirtyPercent * Number(monthlyWageAmount);
      setTotalWage(total);
    }
  };

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="items-center p-4 flex-1">
          <Frame>
            <View className="w-full p-5 my-8 items-center">
              <Text className="text-lg font-bold">Calculator</Text>
            </View>
            <View className="items-center">
              <View className="w-full mx-10">
                <RadioButtons
                  Options={wage}
                  text="Wage type"
                  selected={selectedWageType}
                  setSelected={setSelectedWageType}
                />
              </View>

              {selectedWageType === 'Daily' && (
                <Dailywage
                  dailyWageAmount={dailyWageAmount}
                  setDailyWageAmount={setDailyWageAmount}
                  daysWorked={daysWorked}
                  setDaysWorked={setDaysWorked}
                />
              )}

              {selectedWageType === 'Monthly' && (
                <Monthlywage
                  wageAmount={monthlyWageAmount}
                  setWageAmount={setMonthlyWageAmount}
                  setProjectCost={setProjectCost}
                />
              )}

              <Botton data={'Calculate'} color={'#ff5500'} onPress={calculateTotal} />

              {totalWage > 0 && (
                <View className="mt-4">
                  <Text className="text-xl font-bold text-green-700">
                    Total Wage: {totalWage.toFixed(2)}
                  </Text>
                </View>
              )}

              <View className="h-10" />
            </View>
          </Frame>

          <View className="my-2">
            <Frame>
              <TouchableOpacity onPress={GotoHistory} className="bg-orange-500 p-2 rounded-lg">
                <Text className="text-white text-center">Recent Calculations</Text>
              </TouchableOpacity>
            </Frame>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default WageCalculator;
