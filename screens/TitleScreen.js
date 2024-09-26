import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import FloatingButton from './FloatingButton'; // Import FloatingButton

export default function TitleScreen({ navigation }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const fadeAnim = new Animated.Value(0); // Initial opacity value
  const scaleAnim = new Animated.Value(0.5); // Initial scale value

  const startAnimation = () => {
    setShowAnimation(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10, // Reduced duration for quicker fade-in
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 7, // Adds a spring effect for scaling
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('IntroScreen');
    });
  };

  return (
    <View style={styles.container}>
      {showAnimation ? (
        <Animated.Text
          style={[
            styles.title,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }], // Apply both opacity and scale transformations
