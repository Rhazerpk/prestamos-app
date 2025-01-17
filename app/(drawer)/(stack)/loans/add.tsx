import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import CustomDatePicker from "@/presentation/theme/components/CustomDatePicker";
import React from "react";
import { useColorScheme } from "@/presentation/theme/hooks/useColorScheme.web";

type SelectedClient = {
  id: number;
  firstName: string;
  lastName: string;
} | null;

const AddLoanScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [formData, setFormData] = useState({
    amount: "",
    interestRate: "",
    term: "",
    lateFeesRate: "",
    paymentFrequency: "mensual",
    startDate: new Date(),
  });

  const [calculations, setCalculations] = useState({
    installmentAmount: 0,
    totalAmount: 0,
    endDate: new Date(),
  });

  const [selectedClient, setSelectedClient] = useState<SelectedClient>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Mock de clientes para el ejemplo
  const mockClients = [
    { id: 1, firstName: "Juan", lastName: "Pérez" },
    { id: 2, firstName: "María", lastName: "García" },
  ];

  // Cálculo de cuota y monto total
  useEffect(() => {
    const calculateLoan = () => {
      const amount = parseFloat(formData.amount) || 0;
      const interestRate = parseFloat(formData.interestRate) || 0;
      const term = parseInt(formData.term) || 0;

      // Cálculo de cuota mensual
      const monthlyRate = interestRate / 100 / 12;
      const installment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, term))) /
        (Math.pow(1 + monthlyRate, term) - 1);

      // Ajuste según frecuencia de pago
      let frequencyMultiplier = 1;
      switch (formData.paymentFrequency) {
        case "semanal":
          frequencyMultiplier = 12 / 52;
          break;
        case "quincenal":
          frequencyMultiplier = 12 / 24;
          break;
      }

      const adjustedInstallment = installment * frequencyMultiplier;
      const totalAmount =
        adjustedInstallment * ((term * (12 / frequencyMultiplier)) / 12);

      // Cálculo de fecha final
      const endDate = new Date(formData.startDate);
      endDate.setMonth(endDate.getMonth() + term);

      setCalculations({
        installmentAmount: isNaN(adjustedInstallment) ? 0 : adjustedInstallment,
        totalAmount: isNaN(totalAmount) ? 0 : totalAmount,
        endDate,
      });
    };

    calculateLoan();
  }, [formData]);

  const handleSubmit = () => {
    if (!selectedClient) {
      Alert.alert("Error", "Debe seleccionar un cliente");
      return;
    }

    if (!validateForm()) {
      return;
    }

    //TODO: Save loan to database
    Alert.alert("Éxito", "Préstamo registrado correctamente");
    router.back();
  };

  const validateForm = () => {
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      Alert.alert("Error", "El monto debe ser mayor a 0");
      return false;
    }

    if (!formData.interestRate || parseFloat(formData.interestRate) <= 0) {
      Alert.alert("Error", "La tasa de interés debe ser mayor a 0");
      return false;
    }

    if (!formData.term || parseInt(formData.term) <= 0) {
      Alert.alert("Error", "El plazo debe ser mayor a 0");
      return false;
    }

    return true;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Nuevo Prestamo",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1f2937" : "#2563eb",
          },
          headerTintColor: "white",
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ marginLeft: 16 }}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
      <ScrollView className="flex-1 bg-gray-50">
        <View className="p-4">
          {/* Cliente */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">Cliente</Text>
            <View className="bg-gray-50 rounded-lg border border-gray-200 mb-4">
              <Picker
                selectedValue={selectedClient?.id?.toString() || ""}
                onValueChange={(itemValue: string) => {
                  const client = mockClients.find(
                    (client) => client.id.toString() === itemValue
                  );
                  setSelectedClient(client || null);
                }}
              >
                <Picker.Item label="Seleccione un cliente" value="" />
                {mockClients.map((client) => (
                  <Picker.Item
                    key={client.id}
                    label={`${client.firstName} ${client.lastName}`}
                    value={client.id.toString()}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Detalles del Préstamo */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">
              Detalles del Préstamo
            </Text>

            {/* Monto */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Monto del Préstamo *
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                placeholder="0.00"
                keyboardType="decimal-pad"
                value={formData.amount}
                onChangeText={(text) =>
                  setFormData({ ...formData, amount: text })
                }
              />
            </View>

            {/* Tasa de Interés */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Tasa de Interés Anual (%) *
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                placeholder="0.00"
                keyboardType="decimal-pad"
                value={formData.interestRate}
                onChangeText={(text) =>
                  setFormData({ ...formData, interestRate: text })
                }
              />
            </View>

            {/* Plazo */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Plazo (meses) *
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                placeholder="12"
                keyboardType="number-pad"
                value={formData.term}
                onChangeText={(text) =>
                  setFormData({ ...formData, term: text })
                }
              />
            </View>

            {/* Frecuencia de Pago */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Frecuencia de Pago
              </Text>
              <View className="bg-gray-50 rounded-lg border border-gray-200">
                <Picker
                  selectedValue={formData.paymentFrequency}
                  onValueChange={(itemValue: string) =>
                    setFormData({ ...formData, paymentFrequency: itemValue })
                  }
                >
                  <Picker.Item label="Mensual" value="mensual" />
                  <Picker.Item label="Quincenal" value="quincenal" />
                  <Picker.Item label="Semanal" value="semanal" />
                </Picker>
              </View>
            </View>

            {/* Fecha de Inicio */}
            <View className="mb-4">
              <CustomDatePicker
                label="Fecha de Inicio"
                value={formData.startDate}
                showPicker={showDatePicker}
                onPress={() => setShowDatePicker(true)}
                onChange={(selectedDate) => {
                  setShowDatePicker(false);
                  setFormData({ ...formData, startDate: selectedDate });
                }}
              />
            </View>
          </View>

          {/* Resumen */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">
              Resumen del Préstamo
            </Text>

            <View className="mb-2">
              <Text className="text-sm text-gray-600">Monto de Cuota:</Text>
              <Text className="text-xl font-bold">
                ${calculations.installmentAmount.toFixed(2)}
              </Text>
            </View>

            <View className="mb-2">
              <Text className="text-sm text-gray-600">
                Monto Total a Pagar:
              </Text>
              <Text className="text-xl font-bold">
                ${calculations.totalAmount.toFixed(2)}
              </Text>
            </View>

            <View className="mb-2">
              <Text className="text-sm text-gray-600">
                Fecha de Finalización:
              </Text>
              <Text className="text-xl font-bold">
                {calculations.endDate.toLocaleDateString()}
              </Text>
            </View>
          </View>

          {/* Botones */}
          <View className="flex-row gap-4 mt-4 mb-8">
            <Pressable
              onPress={() => router.back()}
              className="flex-1 bg-gray-100 p-4 rounded-lg"
            >
              <Text className="text-center font-medium text-gray-700">
                Cancelar
              </Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit}
              className="flex-1 bg-blue-600 p-4 rounded-lg"
            >
              <Text className="text-center font-medium text-white">
                Guardar
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AddLoanScreen;
