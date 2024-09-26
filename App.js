import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './screens/TitleScreen';
import IntroScreen from './screens/IntroScreen';
import WaterReminder from './screens/WaterReminder';
import HabitTracker from './screens/HabitTracker';
import SensoryBreak from './screens/SensoryBreak';
import PlantCondition from './screens/PlantCondition';
import AccessibilitySettings from './screens/AccessibilitySettings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TitleScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TitleScreen" component={TitleScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="WaterReminder" component={WaterReminder} />
        <Stack.Screen name="HabitTracker" component={HabitTracker} />
        <Stack.Screen name="SensoryBreak" component={SensoryBreak} />
        <Stack.Screen name="PlantCondition" component={PlantCondition} />
        <Stack.Screen name="AccessibilitySettings" component={AccessibilitySettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
