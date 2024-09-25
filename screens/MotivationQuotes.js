import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MotivationQuotes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>“Your limitation—it’s only your imagination.”</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, padding: 20, textAlign: 'center' },
});
