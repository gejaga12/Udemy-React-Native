import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>CAJA 1</Text>
      <Text style={styles.caja2}>CAJA 2</Text>
      <Text style={styles.caja3}>CAJA 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
