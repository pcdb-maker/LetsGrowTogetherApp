import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WaterReminder({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remember to drink water!</Text>
      {/* You can add an animation here */}
      <Button title="Back to Home" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}
