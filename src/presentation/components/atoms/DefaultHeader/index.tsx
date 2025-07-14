import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

type DefaultHeaderProps = {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  className?: string;
};

export const DefaultHeader: React.FC<DefaultHeaderProps> = ({
  title,
  showBackButton = false,
  rightComponent,
  className = '',
}) => {
  const navigation = useNavigation();

  return (
    <View
      className={`flex-row items-center justify-between border-b border-gray-200 px-4 py-3 ${className} bg-primaryDark`}>
      <View className="w-16">
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
            <AntDesign name="left" size={24} color="#0066CC" />
          </TouchableOpacity>
        )}
      </View>
      <Text className="text-lg font-semibold text-white">{title}</Text>
      <View className="w-16 items-end">{rightComponent}</View>
    </View>
  );
};
