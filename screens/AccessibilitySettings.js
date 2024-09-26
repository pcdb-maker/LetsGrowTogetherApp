import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AccessibilitySettings({ navigation }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [neurodiversityMode, setNeurodiversityMode] = useState(false);

  return (
    <View style={styles.container}>
      {/* Close Button in Top Left */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="close" size={24} color="#ffffff" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Accessibility Settings</Text>

      {/* Accessibility Options */}
