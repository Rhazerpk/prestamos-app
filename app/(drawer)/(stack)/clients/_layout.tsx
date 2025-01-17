import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";

const ClientsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Clientes",
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="black"
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          ),
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          title: "Agregar Cliente",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Detalle del Cliente",
        }}
      />
      <Stack.Screen
        name="clients-list"
        options={{
          title: "Lista de Clientes",
        }}
      />
    </Stack>
  );
};

export default ClientsLayout;
