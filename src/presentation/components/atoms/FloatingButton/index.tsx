import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type FloatingButtonProps = {
  onPress: () => void;
  className?: string;
  icon?: React.ReactNode;
};

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  className = '',
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-primary absolute bottom-6 right-6 h-14 w-14 items-center justify-center rounded-full shadow-lg ${className}`}>
      {icon ?? <Text className="text-3xl font-bold text-white">+</Text>}
    </TouchableOpacity>
  );
};
