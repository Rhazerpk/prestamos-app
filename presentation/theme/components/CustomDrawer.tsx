import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <DrawerContentScrollView
      className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <View className="px-4 pb-9">
        <Image
          source={require("@/assets/images/prestamo.png")}
          style={{
            width: 80,
            height: 80,
            marginBottom: 10,
            marginTop: 20,
          }}
          resizeMode="contain"
        />
        {/* Título */}
        <ThemedText
          className={`${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
          type="title"
        >
          JCapital
        </ThemedText>
        <Text
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-900"
          }`}
        >
          Tu solución rápida
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
