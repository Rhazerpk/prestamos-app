import React from "react";
import { View, Text, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  showPicker: boolean;
  onPress: () => void;
}

const CustomDatePicker = ({
  label,
  value,
  onChange,
  showPicker,
  onPress,
}: Props) => {
    
  return (
    <View className="mb-4">
      <Text className="text-sm font-medium text-gray-700 mb-1">{label}</Text>

      <Pressable
        className="bg-gray-50 rounded-lg border border-gray-200 flex-row items-center justify-between"
        onPress={onPress}
      >
        <Text className="p-4">{value.toLocaleDateString()}</Text>
        <View className="pr-4">
          <Ionicons name="calendar-outline" size={20} color="#6B7280" />
        </View>
      </Pressable>

      {/* Selector de Fecha */}
      {showPicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              onChange(selectedDate);
            }
          }}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
