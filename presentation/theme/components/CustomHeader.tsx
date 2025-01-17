import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useColorScheme } from "@/presentation/theme/hooks/useColorScheme.web";

interface Props {
  icon?: keyof typeof Ionicons.glyphMap;
  title?: string;
  size?: number;
  showBackButton?: boolean;
  showDrawerButton?: boolean;
}

const CustomHeader = ({
  icon,
  title,
  size,
  showBackButton = false,
  showDrawerButton = false,
}: Props) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const backgroundColor = isDarkMode ? "#1f2937" : "#2563eb";
  const textColor = isDarkMode ? "#e5e7eb" : "white";

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      style={{
        paddingTop: 80,
        paddingBottom: 10,
        backgroundColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {showBackButton && (
        <TouchableOpacity
          onPress={handleBack}
          style={{
            position: "absolute",
            left: 10,
            bottom: 5,
          }}
        >
          <Ionicons name={icon} size={size} color={textColor} />
        </TouchableOpacity>
      )}

      {showDrawerButton && (
        <TouchableOpacity
          onPress={handleOpenDrawer}
          style={{
            position: "absolute",
            left: 10,
            bottom: 5,
          }}
        >
          <Ionicons name={icon} size={size} color={textColor} />
        </TouchableOpacity>
      )}

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: textColor,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
