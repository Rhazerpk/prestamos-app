import { View, Text } from "react-native";
import React from "react";
import CustomHeader from "@/presentation/theme/components/CustomHeader";
import { Stack } from "expo-router";

const PaymentsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Pagos",
          header: () => (
            <CustomHeader
              icon="menu-outline"
              title="Pagos"
              size={30}
              showDrawerButton
            />
          ),
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          header: () => (
            <CustomHeader
              icon="close-outline"
              title="Agregar pago"
              size={30}
              showBackButton
            />
          ),
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          header: () => (
            <CustomHeader
              icon="arrow-back-outline"
              title="Detalle del Pago"
              size={30}
              showBackButton
            />
          ),
        }}
      />
      <Stack.Screen
        name="payments-list"
        options={{
          header: () => (
            <CustomHeader
              icon="arrow-back-outline"
              title="Lista de Pagos"
              size={30}
              showBackButton
            />
          ),
        }}
      />
    </Stack>
  );
};

export default PaymentsLayout;
