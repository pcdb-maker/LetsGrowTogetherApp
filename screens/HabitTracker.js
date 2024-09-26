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

  // Handle task completion and log token
  const handleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    updateTokens(1); // Add 1 token when a task is completed
    console.log('Task completed! Tokens:', tokens + 1);
  };

  useEffect(() => {
    loadTokens(); // Load tokens when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Track your good habits!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('IntroScreen')} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>Daily Task Tracker</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
              {item.title}
            </Text>
            {!item.completed && (
              <TouchableOpacity style={styles.completeButton} onPress={() => handleTaskCompletion(item.id)}>
                <Text style={styles.buttonText}>Complete</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <Text style={styles.tokenText}>Tokens Collected: {tokens}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f4f8' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#2d2d2d' },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  taskText: { fontSize: 18
  },
  taskText: { fontSize: 18, color: '#333' },
  completedTask: { textDecorationLine: 'line-through', color: '#aaa' },
  completeButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonText: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
  tokenText: { fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#4a4a4a' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 20,
    zIndex: 1000,
  },
});
