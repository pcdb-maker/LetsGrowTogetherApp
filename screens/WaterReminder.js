import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WaterReminder({ navigation }) {
  const [glasses, setGlasses] = useState(0);
  const [tokens, setTokens] = useState(0);
  const goal = 8;
  const progressAnim = useRef(new Animated.Value(0)).current;

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

  const animateProgress = () => {
    Animated.timing(progressAnim, {
      toValue: glasses / goal,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const checkGoalMet = () => {
    if (glasses === goal) {
      updateTokens(1); // Add 1 token when goal is met
      console.log('Goal met! Tokens:', tokens + 1);
    }
  };

  const incrementGlass = () => {
    if (glasses < goal) {
      setGlasses(prev => prev + 1);
    }
  };

  const decrementGlass = () => {
    if (glasses > 0) {
      setGlasses(prev => prev - 1);
    }
  };

  useEffect(() => {
    loadTokens();
  }, []);

  useEffect(() => {
    animateProgress();
    checkGoalMet();
  }, [glasses]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>Water Tracker</Text>
      <Text style={styles.text}>
        {glasses}/{goal} Glasses
      </Text>

      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressFill, { width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }) 
          }]}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});