import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon library for back button

export default function SensoryBreak({ navigation }) {
  const [activity, setActivity] = useState('');
  const [tokens, setTokens] = useState(0);

  // List of sensory break suggestions
  const sensoryBreaks = [
    'Take 5 deep breaths',
    'Stretch for 2 minutes',
    'Listen to calming music',
    'Try a grounding exercise: name 5 things you see around you',
    'Squeeze a stress ball or soft object',
    'Take a short walk outside',
    'Drink a glass of water slowly',
  ];

