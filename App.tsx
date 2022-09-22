import React from 'react';
import {SafeAreaView} from 'react-native';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};
