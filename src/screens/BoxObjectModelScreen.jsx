import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    fontSize: 20,
    borderWidth: 10,
    marginHorizontal: 20,
    marginTop:20,
    // width: 150,
    // backgroundColor: 'blue',
  },
});
