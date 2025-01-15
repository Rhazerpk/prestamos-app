import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../../theme/hooks/useThemeColor";

interface Props {
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  backgroundColor: string;
  value: string;
  description: string;
}

const SummaryCard = ({
  iconName,
  iconColor,
  backgroundColor,
  value,
  description,
}: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  return (
    <View style={{ backgroundColor, padding: 16, borderRadius: 8 }}>
      <Ionicons
        name={iconName}
        size={24}
        color={iconColor}
        style={{ marginBottom: 8 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'semibold' }}>{value}</Text>
      <Text style={{ fontSize: 14, color: primaryColor }}>{description}</Text>
    </View>
  );
};

export default SummaryCard;
