import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Executive FUNction Application.</Text>
      <Text style={styles.paragraph}>When it comes to health and fitness, having a growth mindset is incredibly important. People with a growth mindset tend to embrace challenges and setbacks, seeing them as opportunities for growth and learning.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Water Reminder" onPress={() => navigation.navigate('WaterReminder')} />
      </View>
      <View style={styles.buttonContainer}>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Motivational Quotes" onPress={() => navigation.navigate('MotivationQuotes')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  paragraph: { fontSize: 12, textAlign: 'center', marginBottom: 20, paddingHorizontal: 20 }, // Added styling for the paragraph text
  buttonContainer: { marginVertical: 8, width: '80%' }, // Adjusted width and margin for iPhone SE
});
