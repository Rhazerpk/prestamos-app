import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/presentation/theme/hooks/useColorScheme.web";
import { Client } from "@/models/Client";

const mockClients: Client[] = [
  {
    id: 1,
    firstName: "Juan",
    lastName: "Pérez",
    nickname: "Juanito",
    phone: "1234567890",
    address: "Calle 123",
    email: "juan@example.com",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: 2,
    firstName: "María",
    lastName: "López",
    nickname: "Mari",
    phone: "9876543210",
    address: "Avenida 456",
    email: "maria@example.com",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-15"),
  },
];

const ClientsListScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  const filteredClients = clients.filter((client) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      client.firstName.toLowerCase().includes(searchLower) ||
      client.lastName.toLowerCase().includes(searchLower) ||
      client.phone.includes(searchQuery) ||
      client.email.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleLongPress = (client: Client) => {
    setSelectedClient(client);
    setShowOptions(true);
  };

  const handleEdit = () => {
    setShowOptions(false);
    if (selectedClient) {
      router.push(`/clients/edit/${selectedClient.id}`);
    }
  };

  const handleDelete = () => {
    setShowOptions(false);
    Alert.alert(
      "Eliminar Cliente",
      "¿Estás seguro que deseas eliminar este cliente?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            if (selectedClient) {
              setClients(
                clients.filter((client) => client.id !== selectedClient.id)
              );
              Alert.alert("Éxito", "Cliente eliminado correctamente");
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Client }) => (
    <Pressable
      className="mb-3 bg-white rounded-xl shadow-sm overflow-hidden"
      onPress={() => router.push(`/clients/${item.id}`)}
      onLongPress={() => handleLongPress(item)}
      delayLongPress={500}
    >
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <View>
            <Text className="text-lg font-bold text-gray-800">
              {item.firstName} {item.lastName}
            </Text>
            {item.nickname && (
              <Text className="text-sm text-gray-600">"{item.nickname}"</Text>
            )}
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </View>

        <View className="space-y-1">
          <View className="flex-row items-center gap-2">
            <Ionicons name="call-outline" size={16} color="#6B7280" />
            <Text className="text-sm text-gray-600">{item.phone}</Text>
          </View>

          {item.email && (
            <View className="flex-row items-center gap-2">
              <Ionicons name="mail-outline" size={16} color="#6B7280" />
              <Text className="text-sm text-gray-600">{item.email}</Text>
            </View>
          )}

          {item.address && (
            <View className="flex-row items-center gap-2">
              <Ionicons name="location-outline" size={16} color="#6B7280" />
              <Text className="text-sm text-gray-600">{item.address}</Text>
            </View>
          )}

          <View className="flex-row items-center gap-2 mt-2">
            <Ionicons name="calendar-outline" size={16} color="#6B7280" />
            <Text className="text-xs text-gray-500">
              Creado: {formatDate(item.createdAt)}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <>
      {/* <Stack.Screen
        options={{
          headerTitle: "Consulta de Clientes",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1f2937" : "#2563eb",
          },
          headerTintColor: "white",
          headerShadowVisible: false,
          headerShown: true,
          headerLeft: () => (
            <Pressable
              onPress={() => router.push("/clients")}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
          ),
        }}
      /> */}

      <View className="flex-1 bg-gray-50">
        <View className="p-4">
          {/* Barra de búsqueda */}
          <View className="mb-4">
            <View className="flex-row items-center bg-white rounded-lg px-4 shadow-sm">
              <Ionicons name="search" size={20} color="#6B7280" />
              <TextInput
                className="flex-1 p-3 text-gray-800"
                placeholder="Buscar cliente..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery !== "" && (
                <Pressable onPress={() => setSearchQuery("")}>
                  <Ionicons name="close-circle" size={20} color="#6B7280" />
                </Pressable>
              )}
            </View>
          </View>

          {/* Lista de clientes */}
          <FlatList
            data={filteredClients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center py-8">
                <Ionicons name="people-outline" size={48} color="#9CA3AF" />
                <Text className="text-gray-500 mt-2 text-center">
                  {searchQuery
                    ? "No se encontraron clientes"
                    : "No hay clientes registrados"}
                </Text>
                <Pressable
                  onPress={() => router.push("/clients/add")}
                  className="mt-4 bg-blue-600 px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-medium">
                    Agregar Cliente
                  </Text>
                </Pressable>
              </View>
            }
          />
        </View>
      </View>

      {/* Modal de opciones */}
      <Modal
        visible={showOptions}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <Pressable
          className="flex-1 bg-black/50 justify-end"
          onPress={() => setShowOptions(false)}
        >
          <View className="bg-white rounded-t-xl">
            <View className="p-4">
              <Text className="text-lg font-bold text-gray-800 mb-4">
                Opciones del Cliente
              </Text>
              <Pressable
                className="flex-row items-center py-3"
                onPress={handleEdit}
              >
                <Ionicons name="create-outline" size={24} color="#2563eb" />
                <Text className="text-gray-700 ml-3">Editar Cliente</Text>
              </Pressable>
              <Pressable
                className="flex-row items-center py-3"
                onPress={handleDelete}
              >
                <Ionicons name="trash-outline" size={24} color="#dc2626" />
                <Text className="text-red-600 ml-3">Eliminar Cliente</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default ClientsListScreen;
