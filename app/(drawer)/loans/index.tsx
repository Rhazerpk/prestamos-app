import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const LoanScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Préstamos</Text>
    </View>
  );
};

export default LoanScreen;
