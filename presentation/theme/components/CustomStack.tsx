import React from "react";
import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  headerTitle: string;
  headerLeft?: {
    iconName?: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  headerRight?: {
    iconName?: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  headerStyle?: object;
  headerTintColor?: string;
}

const CustomStack = ({
  headerTitle,
  headerLeft,
  headerRight,
  headerStyle = { backgroundColor: "#2563eb" },
  headerTintColor = "white",
}: Props) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitle: headerTitle,
        headerStyle: headerStyle,
        headerTintColor: headerTintColor,
        headerLeft: headerLeft
          ? () => (
              <Pressable
                onPress={headerLeft.onPress}
                style={{ marginLeft: 16 }}
              >
                <Ionicons
                  name={headerLeft.iconName}
                  size={24}
                  color={headerTintColor}
                />
              </Pressable>
            )
          : undefined,
        headerRight: headerRight
          ? () => (
              <Pressable
                onPress={headerRight.onPress}
                style={{ marginRight: 16 }}
              >
                <Ionicons
                  name={headerRight.iconName}
                  size={24}
                  color={headerTintColor}
                />
              </Pressable>
            )
          : undefined,
      }}
    />
  );
};

export default CustomStack;
