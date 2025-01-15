import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  backgroundColor: string;
  title: string;
  onPress: () => void;
};

const ActionCard = ({
  iconName,
  iconColor,
  backgroundColor,
  title,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "48%",
        backgroundColor,
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      <Ionicons
        name={iconName}
        size={24}
        color={iconColor}
        style={{ marginBottom: 8 }}
      />
      <Text style={{ fontWeight: "500", fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
};

export default ActionCard;
