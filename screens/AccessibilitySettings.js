import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AccessibilitySettings({ navigation }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [neurodiversityMode, setNeurodiversityMode] = useState(false);
