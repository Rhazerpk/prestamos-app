import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useColorScheme } from "@/presentation/theme/hooks/useColorScheme.web";

interface Props {
  title?: string;
}

const DashboardHeader = ({ title }: Props) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-blue-600"
      } absolute top-0 left-0 right-0 z-50`}
    >
      <View className="flex-row items-center px-4 pt-12 pb-6">
        <TouchableOpacity
          onPress={handleOpenDrawer}
          className="absolute left-4 top-12 z-10 p-2"
        >
          <Ionicons
            name="menu"
            size={24}
            color={isDarkMode ? "#e5e7eb" : "white"}
          />
        </TouchableOpacity>

        <View className="flex-1 items-center">
          <Text
            className={`text-2xl font-bold ${
              isDarkMode ? "text-gray-100" : "text-white"
            }`}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardHeader;
