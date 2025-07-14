import React from 'react';
import { TextInput, TextInputProps, Text, View } from 'react-native';
import { textarea } from './variants';

type TextareaProps = TextInputProps & {
  label?: string;
  errorMessage?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  errorMessage,
  editable = true,
  ...rest
}) => {
  const hasError = !!errorMessage;
  const disabled = !editable;

  const styles = textarea({ hasError, disabled });

  return (
    <View className={styles.container()}>
      {label && <Text className={styles.label()}>{label}</Text>}

      <TextInput
        multiline
        numberOfLines={4}
        className={styles.textarea()}
        editable={editable}
        textAlignVertical="top"
        placeholderTextColor="#9CA3AF"
        {...rest}
      />

      {hasError && <Text className={styles.errorMessage()}>{errorMessage}</Text>}
    </View>
  );
};
