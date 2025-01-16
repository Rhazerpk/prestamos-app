import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { router, Stack, useRouter } from "expo-router";

const clients = [
  { id: "1", name: "Juan Pérez" },
  { id: "2", name: "María López" },
  { id: "3", name: "Carlos García" },
];

const ClientsScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Lista de Clientes",
          headerStyle: {
            backgroundColor: "#2563eb",
          },
          headerTintColor: "white",
        }}
      />
      <View className="flex-1 bg-gray-50 p-4">
        <FlatList
          data={clients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              className="p-4 mb-2 bg-white rounded-lg shadow"
              onPress={() => router.push(`/clients/${item.id}`)}
            >
              <Text className="text-lg font-bold text-gray-800">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default ClientsScreen;
