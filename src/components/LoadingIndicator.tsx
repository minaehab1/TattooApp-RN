import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#607AFB" />
    </View>
  );
};

export default LoadingIndicator;
