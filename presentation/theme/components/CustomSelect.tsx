import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface SelectOption {
  label: string;
  value: string | number;
}

interface Props {
  options: SelectOption[];
  value: string | number;
  onValueChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

const CustomSelect = ({
  options,
  value,
  onValueChange,
  placeholder = "",
  className = "",
  error,
}: Props) => {
  return (
    <View className={`mb-4 ${className}`}>
      <View className="bg-gray-50 rounded-lg border border-gray-200">
        <RNPickerSelect
          onValueChange={onValueChange}
          items={options}
          value={value}
          placeholder={{
            label: placeholder,
            value: null,
          }}
          style={styles}
        />
      </View>
      {error && <Text className="text-sm text-red-500 mt-1">{error}</Text>}
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    paddingRight: 30,
  },
});
