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
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Neurodiversity Mode</Text>
        <Switch
          value={neurodiversityMode}
          onValueChange={(value) => setNeurodiversityMode(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f4f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  option: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  optionText: { fontSize: 18, color: '#333' },
  closeButton: {
    position: 'absolute',
    top: 40, // Adjust for top position
    left: 20, // Adjust for left position
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 20,
  },
});
