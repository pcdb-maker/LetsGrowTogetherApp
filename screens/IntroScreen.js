import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button in Top Left */}
      <TouchableOpacity
  style={styles.backButton}
  onPress={() => navigation.reset({
    index: 0,
    routes: [{ name: 'TitleScreen' }],
  })}
>
  <Icon name="arrow-back" size={24} color="#ffffff" />
</TouchableOpacity>

      {/* Content Wrapper to Move Everything Down */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Welcome to the Executive FUNction Application.</Text>
        <Text style={styles.paragraph}>
        Designed to keep you encouraged while you maintain positive habits. Logging daily habits like drinking water and completing tasks will help both you and your plant grow.
        <br></br> Log your daily positive habits with the purple button, and check on your plant on the green "streak" button. 
        </Text>

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WaterReminder')}>
            <Text style={styles.buttonText}>Water Logger</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HabitTracker')}>
            <Text style={styles.buttonText}>Habit Tracker</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SensoryBreak')}>
            <Text style={styles.buttonText}>Sensory Break</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={() => navigation.navigate('PlantCondition')}>
            <Text style={styles.buttonText}>Plant Streak</Text>
          </TouchableOpacity>
        </View>
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
