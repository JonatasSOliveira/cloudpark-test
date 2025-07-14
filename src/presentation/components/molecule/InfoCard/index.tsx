import { View, Text } from 'react-native';

interface InfoCardProps {
  title: string;
  subtitle?: string;
  metadata?: string;
}

export function InfoCard({ title, subtitle, metadata }: InfoCardProps) {
  return (
    <View className="mb-3 rounded-xl bg-gray-100 p-4 shadow-md">
      <Text className="text-lg font-semibold">{title}</Text>
      {subtitle && <Text className="mt-1 text-sm text-gray-600">{subtitle}</Text>}
      {metadata && <Text className="mt-1 text-xs text-gray-400">Criado em: {metadata}</Text>}
    </View>
  );
}
