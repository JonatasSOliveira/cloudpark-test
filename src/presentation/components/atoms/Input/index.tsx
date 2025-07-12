import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  Platform,
} from "react-native";
import { input } from "./variants";

type InputProps = TextInputProps & {
  label?: string;
  errorMessage?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  editable = true,
  ...rest
}) => {
  const hasError = !!errorMessage;
  const disabled = !editable;

  const styles = input({ hasError, disabled });

  return (
    <View className={styles.container()}>
      {label && <Text className={styles.label()}>{label}</Text>}

      <TextInput
        className={styles.input()}
        editable={editable}
        placeholderTextColor="#9CA3AF"
        {...rest}
      />

      {hasError && <Text className={styles.errorMessage()}>{errorMessage}</Text>}
    </View>
  );
};
