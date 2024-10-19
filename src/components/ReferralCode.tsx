import React from 'react';
import { View, Text } from 'react-native';

const ReferralCode = ({ code }: { code: string }) => {
  return (
    <View>
      <Text>Referral Code: {code}</Text>
    </View>
  );
};

export default ReferralCode;
