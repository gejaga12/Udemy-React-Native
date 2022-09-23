import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaRoja}></View>
      <View style={styles.cajaAmarilla}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  cajaRoja: {
    flex: 2,
    // alignSelf: 'flex-end',
    // width: 100,
    // height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'red',
  },
  cajaAmarilla: {
    flex: 2,
    // alignSelf: 'center',
    // width: 100,
    // height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'yellow',
  },
  cajaVerde: {
    flex: 4,
    // alignItems: 'flex-end',
    // alignSelf: 'flex-start',
    // width: 100,
    // height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'green',
  },
});
