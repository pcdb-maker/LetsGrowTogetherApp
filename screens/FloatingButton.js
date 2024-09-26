import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Icon name="accessibility" size={24} color="#ffffff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: 'black',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Ensure elevation for Android
    zIndex: 1000, // Ensure it's on top for iOS
  },
});
