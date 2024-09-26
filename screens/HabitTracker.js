import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HabitTracker({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete Morning Routine', completed: false },
    { id: '2', title: 'Exercise for 30 Minutes', completed: false },
    { id: '3', title: 'Read a Book', completed: false },
    { id: '4', title: 'Plan Tomorrow’s Schedule', completed: false },
  ]);
  const [tokens, setTokens] = useState(0);

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
      setTokens(updatedTokens);
    } catch (error) {
      console.error('Failed to update tokens:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Track your good habits!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});
