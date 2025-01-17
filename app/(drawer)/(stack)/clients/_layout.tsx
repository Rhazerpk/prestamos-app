import CustomHeader from "@/presentation/theme/components/CustomHeader";
import { Stack } from "expo-router";
import React from "react";

const ClientsLayout = () => {
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
          header: () => (
            <CustomHeader
              icon="menu-outline"
              title="Clientes"
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
              title="Agregar Cliente"
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
              title="Detalle del Cliente"
              size={30}
              showBackButton
            />
          ),
        }}
      />
      <Stack.Screen
        name="clients-list"
        options={{
          header: () => (
            <CustomHeader
              icon="arrow-back-outline"
              title="Lista de Clientes"
              size={30}
              showBackButton
            />
          ),
        }}
      />
    </Stack>
  );
};

export default ClientsLayout;
