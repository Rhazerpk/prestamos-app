import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  options: { label: string; route: string }[];
}

const DrawerSubMenu = ({ title, iconName, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className="flex-row justify-between items-center py-3"
      >
        <View className="flex-row items-center">
          <Ionicons name={iconName} size={24} color="#2563eb" />
          <Text className="ml-3 text-base font-semibold text-gray-800">
            {title}
          </Text>
        </View>
        <Ionicons
          name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#6b7280"
        />
      </Pressable>
      {isOpen && (
        <View className="ml-8">
          {options.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => router.push(option.route as any)}
              className="py-2"
            >
              <Text className="text-gray-600">{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default DrawerSubMenu;
