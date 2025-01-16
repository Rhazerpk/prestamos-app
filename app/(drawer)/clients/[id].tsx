import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomStack from "@/presentation/theme/components/CustomStack";

const clientData = {
  id: "1",
  name: "Juan Pérez",
  phone: "(123) 456-7890",
  email: "juan@example.com",
  address: "Calle Principal #123",
  activeLoans: 2,
  totalLoans: 5,
  totalPaid: 15000,
};

const ClientDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <CustomStack
        headerTitle="Detalle del Cliente"
        headerStyle={{
          backgroundColor: "#2563eb",
        }}
        headerTintColor="white"
        headerLeft={{
          iconName: "chevron-back",
          onPress: () => router.push("/clients/clients-list"),
        }}
      />
      <ScrollView className="flex-1 bg-gray-50">
        {/* Información Principal */}
        <View className="px-4 py-6 bg-white shadow-sm mb-4">
          <View className="items-center mb-4">
            <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-2">
              <Text className="text-2xl text-blue-600">
                {clientData.name.charAt(0)}
              </Text>
            </View>
            <Text className="text-xl font-bold text-gray-800">
              {clientData.name}
            </Text>
            <Text className="text-gray-500">Cliente #{id}</Text>
          </View>

          <View className="flex-row justify-around mt-4">
            <TouchableOpacity
              className="items-center"
              onPress={() => router.push("/loans/add")}
            >
              <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mb-1">
                <Ionicons name="wallet-outline" size={20} color="#2563eb" />
              </View>
              <Text className="text-sm text-gray-600">Nuevo Préstamo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="items-center"
              onPress={() => router.push("/payments/add")}
            >
              <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mb-1">
                <Ionicons name="cash-outline" size={20} color="#16a34a" />
              </View>
              <Text className="text-sm text-gray-600">Registrar Pago</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Información de Contacto */}
        <View className="px-4 mb-4">
          <View className="bg-white rounded-xl shadow-sm p-4">
            <Text className="text-lg font-semibold mb-4">
              Información de Contacto
            </Text>

            <View className="mb-3">
              <Text className="text-sm text-gray-500 mb-1">Teléfono</Text>
              <View className="flex-row items-center">
                <Ionicons name="call-outline" size={20} color="#4b5563" />
                <Text className="text-gray-800 ml-2">{clientData.phone}</Text>
              </View>
            </View>

            <View className="mb-3">
              <Text className="text-sm text-gray-500 mb-1">Correo</Text>
              <View className="flex-row items-center">
                <Ionicons name="mail-outline" size={20} color="#4b5563" />
                <Text className="text-gray-800 ml-2">{clientData.email}</Text>
              </View>
            </View>

            <View>
              <Text className="text-sm text-gray-500 mb-1">Dirección</Text>
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={20} color="#4b5563" />
                <Text className="text-gray-800 ml-2">{clientData.address}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Resumen Financiero */}
        <View className="px-4 mb-4">
          <View className="bg-white rounded-xl shadow-sm p-4">
            <Text className="text-lg font-semibold mb-4">
              Resumen Financiero
            </Text>

            <View className="flex-row justify-between mb-3">
              <View>
                <Text className="text-gray-500">Préstamos Activos</Text>
                <Text className="text-xl font-semibold text-blue-600">
                  {clientData.activeLoans}
                </Text>
              </View>
              <View>
                <Text className="text-gray-500">Total Préstamos</Text>
                <Text className="text-xl font-semibold text-gray-800">
                  {clientData.totalLoans}
                </Text>
              </View>
              <View>
                <Text className="text-gray-500">Total Pagado</Text>
                <Text className="text-xl font-semibold text-green-600">
                  ${clientData.totalPaid}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Préstamos Activos */}
        <View className="px-4 mb-4">
          <View className="bg-white rounded-xl shadow-sm p-4">
            <Text className="text-lg font-semibold mb-4">
              Préstamos Activos
            </Text>

            {[1, 2].map((loan) => (
              <TouchableOpacity
                key={loan}
                className="border-b border-gray-100 py-3 last:border-0"
                onPress={() => router.push(`/loans/${loan}`)}
              >
                <View className="flex-row justify-between items-center">
                  <View>
                    <Text className="font-medium text-gray-800">
                      Préstamo #{loan}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      Próximo pago: 15 Ene
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="font-medium text-gray-800">$5,000</Text>
                    <Text className="text-sm text-green-600">Al día</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ClientDetailScreen;
