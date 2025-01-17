import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";
import SummaryCard from "@/presentation/dashboard/components/SummaryCard";
import ActionCard from "@/presentation/dashboard/components/ActionCard";
import DashboardHeader from "@/presentation/dashboard/components/DashboardHeader";

const DashboardScreen = () => {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      {/* <DashboardHeader title="Sistema de Préstamos" /> */}

      {/* Main Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 150 }}
      >
        {/* Stats Cards Section */}
        <View className="px-4 -mt-8">
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold">Resumen</Text>
              <Text className="text-sm text-gray-500">Hoy</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <View style={{ flex: 1, marginRight: 8 }}>
                <SummaryCard
                  iconName="cash-outline"
                  iconColor="#2563eb"
                  backgroundColor="#EFF6FF"
                  value="$25,400"
                  description="Préstamos Activos"
                />
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <SummaryCard
                  iconName="trending-up-outline"
                  iconColor="#16a34a"
                  backgroundColor="#D1FAE5"
                  value="$3,200"
                  description="Pagos del Mes"
                />
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 16,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}
            >
              Acciones Rápidas
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <ActionCard
                iconName="wallet-outline"
                iconColor="#2563eb"
                backgroundColor="#F9FAFB"
                title="Nuevo Préstamo"
                onPress={() => router.push("/loans/add")}
              />
              <ActionCard
                iconName="people-outline"
                iconColor="#2563eb"
                backgroundColor="#F9FAFB"
                title="Nuevo Cliente"
                onPress={() => router.push("/clients/add")}
              />
              <ActionCard
                iconName="calendar-outline"
                iconColor="#2563eb"
                backgroundColor="#F9FAFB"
                title="Registrar Pago"
                onPress={() => router.push("/payments/add")}
              />
              <ActionCard
                iconName="alert-circle-outline"
                iconColor="red"
                backgroundColor="#F9FAFB"
                title="Ver Atrasados"
                onPress={() => router.push("/loans")}
              />
            </View>
          </View>

          {/* Recent Activity */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">
              Actividad Reciente
            </Text>
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
                    <Text className="text-sm text-gray-500">
                      Vence en 2 días
                    </Text>
                  </View>
                  <Text className="text-gray-600 font-medium">$200.00</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
