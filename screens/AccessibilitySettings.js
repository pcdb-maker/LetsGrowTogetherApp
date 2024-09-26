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
      <View style={styles.option}>
        <Text style={styles.optionText}>High Contrast Mode</Text>
        <Switch
          value={highContrast}
          onValueChange={(value) => setHighContrast(value)}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Large Text</Text>
        <Switch
          value={largeText}
          onValueChange={(value) => setLargeText(value)}
        />
