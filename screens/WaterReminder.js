import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WaterReminder({ navigation }) {
  const [glasses, setGlasses] = useState(0);
  const [tokens, setTokens] = useState(0);
  const goal = 8;
  const progressAnim = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remember to drink water!</Text>
      {/* You can add an animation here */}
      <Button title="Back to Home" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});