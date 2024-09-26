import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>When it comes to health and fitness, having a growth mindset is incredibly important. People with a growth mindset tend to embrace challenges and setbacks, seeing them as opportunities for growth and learning.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Water Reminder" onPress={() => navigation.navigate('WaterReminder')} />
      </View>
      <View style={styles.buttonContainer}>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#f0f4f8' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 20,
    zIndex: 1000,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 80, // Adjust this value to move the content down
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#2d2d2d' },
  paragraph: { fontSize: 16, textAlign: 'center', marginBottom: 15, paddingHorizontal: 20, color: '#4a4a4a' },
  bold: { fontWeight: 'bold', color: '#4a4a4a' },
  buttonWrapper: { marginVertical: 15, width: '80%' },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  greenButton: { backgroundColor: '#4CAF50' }, // Green color for Plant Condition button
});
