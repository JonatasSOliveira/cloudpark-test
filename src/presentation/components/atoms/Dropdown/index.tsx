import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

type DropdownProps<T, K extends keyof T, V extends keyof T> = {
  data: T[];
  selectedId?: T[K];
  onSelect: (item: T) => void;
  idKey: K;
  labelKey: V;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  errorMessage?: string;
  className?: string;
};

export function Dropdown<T, K extends keyof T, V extends keyof T>({
  data,
  selectedId,
  onSelect,
  idKey,
  labelKey,
  label,
  placeholder = 'Selecione...',
  isLoading = false,
  errorMessage,
  className = '',
}: DropdownProps<T, K, V>) {
  const [visible, setVisible] = useState(false);
  const selectedItem = data.find((item) => item[idKey] === selectedId);

  return (
    <View className={className}>
      {label && <Text className="mb-1 font-semibold text-gray-700">{label}</Text>}

      <TouchableOpacity
        className={`rounded border ${
          errorMessage ? 'border-red-600' : 'border-gray-300'
        } bg-white px-4 py-3`}
        onPress={() => !isLoading && setVisible(true)}
        activeOpacity={0.7}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#3B82F6" />
        ) : (
          <Text className={`${selectedItem ? 'text-black' : 'text-gray-400'}`}>
            {selectedItem ? String(selectedItem[labelKey]) : placeholder}
          </Text>
        )}
      </TouchableOpacity>

      {errorMessage && <Text className="mt-1 text-sm text-red-600">{errorMessage}</Text>}

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View className="flex-1 items-center justify-center bg-black bg-opacity-40">
            <View className="max-h-60 w-3/4 rounded-lg bg-white shadow-lg">
              {isLoading ? (
                <View className="items-center py-8">
                  <ActivityIndicator size="large" color="#3B82F6" />
                </View>
              ) : (
                <FlatList
                  data={data}
                  keyExtractor={(item) => String(item[idKey])}
                  keyboardShouldPersistTaps="handled"
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="border-b border-gray-200 px-4 py-3"
                      onPress={() => {
                        onSelect(item);
                        setVisible(false);
                      }}>
                      <Text className="text-black">{String(item[labelKey])}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
