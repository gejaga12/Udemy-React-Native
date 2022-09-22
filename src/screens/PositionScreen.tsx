import React from 'react';
import {StyleSheet, View} from 'react-native';
import { styles } from './styles/styles';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};


