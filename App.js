import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './screens/IntroScreen';
import WaterReminder from './screens/WaterReminder';
import HabitTracker from './screens/HabitTracker';
import MotivationQuotes from './screens/MotivationQuotes';

const Stack = createNativeStackNavigator();

console.log("I am working")

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="WaterReminder" component={WaterReminder} />
        <Stack.Screen name="HabitTracker" component={HabitTracker} />
        <Stack.Screen name="MotivationQuotes" component={MotivationQuotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
