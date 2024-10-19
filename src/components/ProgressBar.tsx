import React from 'react';
import { View } from 'react-native';

const ProgressBar = ({ progress, targetPoints }: { progress: number, targetPoints: number }) => {
  return (
    <View style={{ width: '100%', height: 10, backgroundColor: '#e0e0e0' }}>
      <View style={{ width: `${progress * 100}%`, height: '100%', backgroundColor: '#607AFB' }} />
    </View>
  );
};

export default ProgressBar;
