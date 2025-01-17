import React from "react";
import CustomHeader from "@/presentation/theme/components/CustomHeader";
import { Stack } from "expo-router";

const LoansLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Préstamos",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader
              icon="menu-outline"
              title="Prestamos"
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
              title="Agregar Préstamo"
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
              title="Detalle del Prestamo"
              size={30}
              showBackButton
            />
          ),
        }}
      />
      <Stack.Screen
        name="loans-list"
        options={{
          header: () => (
            <CustomHeader
              icon="arrow-back-outline"
              title="Lista de Préstamos"
              size={30}
              showBackButton
            />
          ),
        }}
      />
    </Stack>
  );
};

export default LoansLayout;
