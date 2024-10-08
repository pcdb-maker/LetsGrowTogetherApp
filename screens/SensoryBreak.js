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

  // Function to select a random sensory break
  const getRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * sensoryBreaks.length);
    setActivity(sensoryBreaks[randomIndex]);
  };

  // Load total tokens from AsyncStorage
  const loadTokens = async () => {
    try {
      const savedTokens = await AsyncStorage.getItem('totalTokens');
      if (savedTokens !== null) {
        setTokens(parseInt(savedTokens));
      }
    } catch (error) {
      console.error('Failed to load tokens:', error);
    }
  };

  // Save total tokens to AsyncStorage
  const updateTokens = async (newTokens) => {
    try {
      const savedTokens = await AsyncStorage.getItem('totalTokens');
      const currentTokens = savedTokens ? parseInt(savedTokens) : 0;
      const updatedTokens = currentTokens + newTokens;
      await AsyncStorage.setItem('totalTokens', updatedTokens.toString());
      setTokens(updatedTokens); // Update local state as well
    } catch (error) {
      console.error('Failed to update tokens:', error);
    }
  };

  // Confirm completion of the sensory break activity
  const confirmCompletion = () => {
    updateTokens(1); // Increment total tokens by 1
    console.log('Sensory break completed! Tokens:', tokens + 1);
  };

  // Load tokens and set initial activity on component mount
  useEffect(() => {
    loadTokens();
    getRandomActivity();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>Sensory Break</Text>
      <Text style={styles.activityText}>{activity}</Text>

      <TouchableOpacity style={styles.button} onPress={confirmCompletion}>
        <Text style={styles.buttonText}>I Did It!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getRandomActivity}>
        <Text style={styles.buttonText}>New Activity</Text>
      </TouchableOpacity>

      <Text style={styles.tokenText}>Tokens Collected: {tokens}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f4f8' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#2d2d2d' },
  activityText: { fontSize: 20, fontStyle: 'italic', textAlign: 'center', marginBottom: 30, color: '#333' },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '60%',
    marginVertical: 10,
  },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 20,
    zIndex: 1000,
  },
  tokenText: { fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#4a4a4a' },
});
