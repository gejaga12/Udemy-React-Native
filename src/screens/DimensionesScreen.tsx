import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');


export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();
  
  return (
    <View>

      <View style={styles.container}>
        <View style={styles.cajaNaranja} />
        <View style={{...styles.cajaMorada, width: width * 0.6 }} />
      </View>

      <Text style={styles.title}>
        W: {width} H: {height}
      </Text>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#E0A23B',
    width: '75%',
    height: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'purple',
  },
});
