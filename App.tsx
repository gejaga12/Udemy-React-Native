import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey'}}>
      <DimensionesScreen />
    </SafeAreaView>
  );
};
