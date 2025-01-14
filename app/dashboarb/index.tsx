import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-blue-600 p-6 pb-12">
        <Text className="text-2xl font-bold text-white mt-10">Dashboard</Text>
        <Text className="text-white mt-2">Sistema de Préstamos</Text>
      </View>

      {/* Stats Cards Section */}
      <View className="px-4 -mt-8">
        <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">Resumen</Text>
            <Text className="text-sm text-gray-500">Hoy</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <View className="flex-1 mr-2">
              <View className="bg-blue-50 p-4 rounded-lg">
                <Ionicons
                  name="cash-outline"
                  size={24}
                  color="#2563eb"
                  className="mb-2"
                />
                <Text className="text-2xl font-bold">$25,400</Text>
                <Text className="text-sm text-gray-600">Préstamos Activos</Text>
              </View>
            </View>
            <View className="flex-1 ml-2">
              <View className="bg-green-50 p-4 rounded-lg">
                <Ionicons
                  name="trending-up-outline"
                  size={24}
                  color="#16a34a"
                  className="mb-2"
                />
                <Text className="text-2xl font-bold">$3,200</Text>
                <Text className="text-sm text-gray-600">Pagos del Mes</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Acciones Rápidas</Text>
          <View className="flex-row flex-wrap justify-between">
            <Pressable
              className="w-[48%] bg-gray-50 p-4 rounded-lg mb-3"
              onPress={() => router.push('/loans/add')}
            >
              <Ionicons
                name="wallet-outline"
                size={24}
                color="#2563eb"
                className="mb-2"
              />
              <Text className="font-medium">Nuevo Préstamo</Text>
            </Pressable>
            <Pressable
              className="w-[48%] bg-gray-50 p-4 rounded-lg mb-3"
              onPress={() => router.push('/clients/add')}
            >
              <Ionicons
                name="people-outline"
                size={24}
                color="#2563eb"
                className="mb-2"
              />
              <Text className="font-medium">Nuevo Cliente</Text>
            </Pressable>
            <Pressable
              className="w-[48%] bg-gray-50 p-4 rounded-lg"
              onPress={() => router.push('/payments/add')}
            >
              <Ionicons
                name="calendar-outline"
                size={24}
                color="#2563eb"
                className="mb-2"
              />
              <Text className="font-medium">Registrar Pago</Text>
            </Pressable>
            <Pressable
              className="w-[48%] bg-gray-50 p-4 rounded-lg"
              onPress={() => router.push("/loans")}
            >
              <Ionicons
                name="alert-circle-outline"
                size={24}
                color="#2563eb"
                className="mb-2"
              />
              <Text className="font-medium">Ver Atrasados</Text>
            </Pressable>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Actividad Reciente</Text>
          {[1, 2, 3].map((item) => (
            <View
              key={item}
              className="border-b border-gray-100 py-3 last:border-0"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="font-medium">Juan Pérez</Text>
                  <Text className="text-sm text-gray-500">Pago recibido</Text>
                </View>
                <Text className="text-green-600 font-medium">+$150.00</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Upcoming Payments */}
        <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <Text className="text-lg font-semibold mb-4">Próximos Pagos</Text>
          {[1, 2, 3].map((item) => (
            <View
              key={item}
              className="border-b border-gray-100 py-3 last:border-0"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="font-medium">María García</Text>
                  <Text className="text-sm text-gray-500">Vence en 2 días</Text>
                </View>
                <Text className="text-gray-600 font-medium">$200.00</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
