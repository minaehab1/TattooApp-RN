import React from 'react';
import { View, Text } from 'react-native';

const PointsDisplay = ({ points }: { points: number }) => {
  return (
    <View>
      <Text>Points: {points}</Text>
    </View>
  );
};

export default PointsDisplay;
