import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

type DefaultListProps<T> = {
  data: T[];
  isLoading?: boolean;
  keyExtractor: (item: T, index: number) => string;
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  emptyComponent?: React.ReactNode;
  className?: string;
};

export function DefaultList<T>({
  data,
  isLoading = false,
  keyExtractor,
  renderItem,
  emptyComponent,
  className,
}: DefaultListProps<T>) {
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center py-8">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-4 text-base text-gray-500">Carregando...</Text>
      </View>
    );
  }

  if (!isLoading && data.length === 0 && emptyComponent) {
    return <>{emptyComponent}</>;
  }

  return (
    <FlatList
      className={twMerge('w-full', className)}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerClassName="py-3 px-4 gap-3"
      showsVerticalScrollIndicator={false}
    />
  );
}
