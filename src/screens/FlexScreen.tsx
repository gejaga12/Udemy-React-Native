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
    // alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent:'center',
    // flexWrap: 'wrap',
    // alignContent: 'space-between',
    // height: 300,
  },
  caja1: {
    // alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    color: 'red',
    backgroundColor: 'black',
    
  },
  caja2: {
    // alignSelf: 'flex-end',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    color: 'green',
    backgroundColor: 'black'
  },
  caja3: {
    // alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    color: 'yellow',
    backgroundColor: 'black'
  },
});
