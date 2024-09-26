import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import FloatingButton from './FloatingButton'; // Import FloatingButton

export default function TitleScreen({ navigation }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const fadeAnim = new Animated.Value(0); // Initial opacity value
  const scaleAnim = new Animated.Value(0.5); // Initial scale value
