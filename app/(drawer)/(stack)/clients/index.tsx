import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/presentation/theme/hooks/useColorScheme.web";
import CustomStack from "@/presentation/theme/components/CustomStack";

const ClientsHomeScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const menuItems = [
    {
      title: "Consultar Clientes",
      description: "Ver lista completa de clientes",
      icon: "people" as "people",
      route: "/clients/clients-list",
    },
    {
      title: "Agregar Cliente",
      description: "Registrar nuevo cliente",
      icon: "person-add" as "person-add",
      route: "/clients/add",
    },
  ];

  return (
    <>
      {/* <CustomStack
        headerTitle="Gestión de Clientes"
        headerStyle={{
          backgroundColor: isDarkMode ? "#1f2937" : "#2563eb",
        }}
        headerTintColor="white"
        headerLeft={{
          iconName: "chevron-back",
          onPress: () => router.back(),
        }}
      /> */}

      <ScrollView className="flex-1 bg-gray-50">
        <View className="p-4">
          {/* Stats Card */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-4">
              Resumen
            </Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-blue-600">150</Text>
                <Text className="text-sm text-gray-600">Total Clientes</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">12</Text>
                <Text className="text-sm text-gray-600">Nuevos (Mes)</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-600">45</Text>
                <Text className="text-sm text-gray-600">Activos</Text>
              </View>
            </View>
          </View>

          {/* Menu Grid */}
          <View className="flex-row flex-wrap justify-between">
            {menuItems.map((item, index) => (
              <Pressable
                key={index}
                className="bg-white w-[48%] rounded-xl shadow-sm p-4 mb-4"
                onPress={() => router.push(item.route as any)}
              >
                <View className="items-center mb-2">
                  <View className="bg-blue-100 p-3 rounded-full mb-2">
                    <Ionicons name={item.icon} size={24} color="#2563eb" />
                  </View>
                  <Text className="text-base font-bold text-gray-800 text-center">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-600 text-center mt-1">
                    {item.description}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>

          {/* Quick Actions */}
          {/* <View className="bg-white rounded-xl shadow-sm p-4 mt-2">
            <Text className="text-lg font-bold text-gray-800 mb-4">
              Acciones Rápidas
            </Text>
            <View className="space-y-3">
              <Pressable 
                className="flex-row items-center py-2"
                onPress={() => router.push("/clients/export")}
              >
                <Ionicons name="download" size={20} color="#6B7280" />
                <Text className="ml-3 text-gray-700">Exportar Lista</Text>
                <Ionicons 
                  name="chevron-forward" 
                  size={20} 
                  color="#6B7280" 
                  style={{ marginLeft: 'auto' }}
                />
              </Pressable>
              <Pressable 
                className="flex-row items-center py-2"
                onPress={() => router.push("/clients/import")}
              >
                <Ionicons name="cloud-upload-outline" size={20} color="#6B7280" />
                <Text className="ml-3 text-gray-700">Importar Clientes</Text>
                <Ionicons 
                  name="chevron-forward" 
                  size={20} 
                  color="#6B7280" 
                  style={{ marginLeft: 'auto' }}
                />
              </Pressable>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

export default ClientsHomeScreen;
