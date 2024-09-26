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
