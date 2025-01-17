import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case "activo":
        return "bg-green-100 text-green-800";
      case "completado":
        return "bg-blue-100 text-blue-800";
      case "cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <View className={`px-3 py-1 rounded-full ${getStatusColor()}`}>
      <Text className="text-xs font-medium capitalize">{status}</Text>
    </View>
  );
};

const LoanScreen = ({ loan }: { loan: any }) => {
  return (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-sm mb-3"
      onPress={() => router.push(`/loans/${loan.id}`)}
    >
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center">
          <Ionicons name="cash-outline" size={20} color="#2563eb" />
          <Text className="text-lg font-bold ml-2">
            ${loan.amount.toLocaleString()}
          </Text>
        </View>
        <StatusBadge status={loan.status} />
      </View>

      <View className="flex-row justify-between mb-3">
        <View className="flex-1">
          <Text className="text-xs text-gray-500">Interés</Text>
          <Text className="text-sm font-medium">{loan.interestRate}%</Text>
        </View>
        <View className="flex-1">
          <Text className="text-xs text-gray-500">Plazo</Text>
          <Text className="text-sm font-medium">{loan.term} meses</Text>
        </View>
        <View className="flex-1">
          <Text className="text-xs text-gray-500">Frecuencia</Text>
          <Text className="text-sm font-medium capitalize">
            {loan.paymentFrequency}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center border-t border-gray-100 pt-3">
        <View className="flex-row items-center">
          <MaterialIcons name="event" size={16} color="gray" />
          <Text className="text-xs text-gray-500 ml-1">
            Próximo pago: {new Date(loan.nextPaymentDate).toLocaleDateString()}
          </Text>
        </View>
        <Text className="text-xs font-medium text-blue-600">
          ${loan.installmentAmount.toLocaleString()} / cuota
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function LoansIndex() {
  const loans = [
    {
      id: 1,
      amount: 50000,
      interestRate: 15,
      term: 12,
      status: "activo",
      paymentFrequency: "mensual",
      nextPaymentDate: new Date(),
      installmentAmount: 5000,
    },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white p-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold">Préstamos</Text>
          <TouchableOpacity
            className="bg-blue-600 p-2 rounded-full"
            onPress={() => router.push("/loans/add")}
          >
            <Ionicons name="add-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mt-4">
          <View className="bg-blue-50 p-3 rounded-lg flex-1 mr-2">
            <FontAwesome name="bar-chart" size={20} color="#2563eb" />
            <Text className="text-xs text-gray-500">Total Activos</Text>
            <Text className="text-lg font-bold text-blue-600">$50,000</Text>
          </View>
          <View className="bg-green-50 p-3 rounded-lg flex-1 ml-2">
            <Ionicons name="wallet-outline" size={20} color="#16a34a" />
            <Text className="text-xs text-gray-500">Por Cobrar</Text>
            <Text className="text-lg font-bold text-green-600">$50,000</Text>
          </View>
        </View>
      </View>

      {/* Lista de Préstamos */}
      <ScrollView className="flex-1 p-4">
        {loans.map((loan) => (
          <LoanScreen key={loan.id} loan={loan} />
        ))}
      </ScrollView>
    </View>
  );
}
