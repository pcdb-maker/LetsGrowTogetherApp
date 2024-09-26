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
            },
          ]}
        >
          Executive FUNction App
        </Animated.Text>
      ) : (
        <>
          <Text style={styles.title}>Executive FUNction App</Text>
         <br></br>
      <Text style={styles.paragraph}>
        We understand that people who identify as neurodiverse can struggle with executive functioning.
      </Text>
      <Text style={styles.paragraph}>
        This app aims to make functioning <Text style={styles.bold}>fun</Text> again!
      </Text>
      <Text style={styles.paragraph}>
        Track, log, and organise your way to success, and watch your plant grow along with you.
      </Text>
          <TouchableOpacity style={styles.continueButton} onPress={startAnimation}>
            <Text style={styles.buttonText}>Get Started...</Text>
          </TouchableOpacity>
          <FloatingButton onPress={() => navigation.navigate('AccessibilitySettings')} /> {/* Floating Button */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4e54c8' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  paragraph: { fontSize: 16, textAlign: 'center', marginBottom: 15, paddingHorizontal: 20, color: '#ffffff' },
  bold: { fontWeight: 'bold', color: '#ffffff' },
  continueButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: { color: '#4e54c8', fontSize: 16, fontWeight: 'bold' },
});
