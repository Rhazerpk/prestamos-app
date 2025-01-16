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
      style={{
        paddingTop: 50,
        paddingBottom: 5,
        backgroundColor: isDarkMode ? "#1f2937" : "#2563eb",
      }}
      className="absolute left-0 right-0 z-50"
    >
      <View
        className="flex-row items-center px-4"
        style={{
          height: 50,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleOpenDrawer}
          className="p-2"
          style={{
            position: "absolute",
            left: 10, 
            bottom: 4,
          }}
        >
          <Ionicons
            name="menu"
            size={24}
            color={isDarkMode ? "#e5e7eb" : "white"}
          />
        </TouchableOpacity>

        <Text
          className={`text-2xl font-bold mx-auto ${
            isDarkMode ? "text-gray-100" : "text-white"
          }`}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default DashboardHeader;
