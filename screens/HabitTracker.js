import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HabitTracker({ navigation }) {
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
