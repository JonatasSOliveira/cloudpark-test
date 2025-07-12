import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { button } from "./variants";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  loading = false,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const { container, text } = button({ variant, disabled: isDisabled });

  return (
    <TouchableOpacity
      className={container()}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={text()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
