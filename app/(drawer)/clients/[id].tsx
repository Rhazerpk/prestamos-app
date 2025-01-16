import React from "react";
import { View, Text, Pressable } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ClientDetails = () => {
  const { i } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `Detalles del Cliente ${i}`,
          headerStyle: {
            backgroundColor: "#2563eb",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <Pressable onPress={() => router.push('/clients')} style={{ marginLeft: 16 }}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
      <View className="flex-1 bg-gray-50 p-4">
        <Text className="text-lg font-bold">Detalles del Cliente</Text>
        <Text>ID: {i}</Text>
        {/* Aquí puedes añadir más información del cliente si la obtienes de una API */}
      </View>
    </>
  );
};

export default ClientDetails;
