import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export const LoginLogo: React.FC = () => {
  return (
    <View className="flex flex-col items-center justify-center">
      <AntDesign name="cloudo" size={60} color="#0066CC" />
      <Text className="text-2xl font-bold">
        <Text className="text-primary">Cloud</Text>
        <Text className="text-white">Park Test</Text>
      </Text>
    </View>
  );
};
