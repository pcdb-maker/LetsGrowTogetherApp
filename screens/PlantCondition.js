import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import seedImage from '../images/seed.png';
import sproutImage from '../images/sprout.png';
import smallPlantImage from '../images/small-plant.png';
import grownPlantImage from '../images/grown-plant.png';

export default function PlantGrowth({ navigation }) {
  const [tokens, setTokens] = useState(0);
  const [currentStage, setCurrentStage] = useState({});
  const [nextStageTokens, setNextStageTokens] = useState(0);

  const plantStages = [
    { stage: 'seed', minTokens: 0, maxTokens: 4, image: seedImage },
    { stage: 'sprout', minTokens: 5, maxTokens: 9, image: sproutImage },
    { stage: 'small-plant', minTokens: 10, maxTokens: 14, image: smallPlantImage },
    { stage: 'grown-plant', minTokens: 15, image: grownPlantImage },
  ];

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

  const resetTokens = async () => {
    try {
      await AsyncStorage.setItem('totalTokens', '0');
      setTokens(0);
      console.log('Tokens reset to 0.');
    } catch (error) {
      console.error('Failed to reset tokens:', error);
    }
  };

  const determineGrowthStage = () => {
    const stage = plantStages.find(stage => tokens >= stage.minTokens && (stage.maxTokens === undefined || tokens <= stage.maxTokens));
    setCurrentStage(stage || plantStages[0]);
    const nextStage = plantStages.find(stage => stage.minTokens > tokens);
    setNextStageTokens(nextStage ? nextStage.minTokens - tokens : 0);
  };

  useEffect(() => {
    loadTokens();
  }, []);

  useEffect(() => {
    determineGrowthStage();
  }, [tokens]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>Your Plant</Text>
      <Text style={styles.subtitle}>Tokens Collected: {tokens}</Text>
      <Text style={styles.subtitle}>Current Stage: {currentStage.stage}</Text>
      {nextStageTokens > 0 && (
        <Text style={styles.subtitle}>
          Tokens needed for the next stage: {nextStageTokens}
        </Text>
      )}

      {currentStage.image && (
        <Image
          source={currentStage.image}
          style={styles.plantImage}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={loadTokens}>
        <Text style={styles.buttonText}>Refresh Plant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetTokens}>
        <Text style={styles.buttonText}>Reset Tokens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f4f8' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#2d2d2d' },
  subtitle: { fontSize: 18, marginBottom: 10, color: '#4a4a4a' },
  plantImage: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '60%',
  },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 20,
  },
  resetButton: {
    backgroundColor: '#ff6b6b', // Different color for reset button
    marginTop: 20,
  },
});
