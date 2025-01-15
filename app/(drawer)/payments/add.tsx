import {
    View,
    Text,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import { useState, useEffect } from "react";
  import { router } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";
  import { Picker } from "@react-native-picker/picker";
  import DateTimePicker from "@react-native-community/datetimepicker";
  import React from "react";
  
  type LoanSummary = {
    id: number;
    clientName: string;
    nextPaymentDate: Date;
    installmentAmount: number;
    remainingAmount: number;
    lateFeesRate: number;
  };
  
  const AddPaymentScreen = () => {
    const mockLoans: LoanSummary[] = [
      {
        id: 1,
        clientName: "Juan Pérez",
        nextPaymentDate: new Date(2024, 0, 1),
        installmentAmount: 1000,
        remainingAmount: 5000,
        lateFeesRate: 5,
      },
      {
        id: 2,
        clientName: "María García",
        nextPaymentDate: new Date(2024, 0, 15),
        installmentAmount: 1500,
        remainingAmount: 7500,
        lateFeesRate: 5,
      },
    ];
  
    const [selectedLoan, setSelectedLoan] = useState<LoanSummary | null>(null);
    const [paymentDate, setPaymentDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [amount, setAmount] = useState("");
    const [lateFees, setLateFees] = useState(0);
  
    // Calcular mora si el pago es tardío
    useEffect(() => {
      if (selectedLoan) {
        const daysLate = Math.max(
          0,
          Math.floor(
            (paymentDate.getTime() - selectedLoan.nextPaymentDate.getTime()) /
              (1000 * 60 * 60 * 24)
          )
        );
  
        if (daysLate > 0) {
          const fees =
            (selectedLoan.installmentAmount *
              (selectedLoan.lateFeesRate / 100) *
              daysLate) /
            365;
          setLateFees(fees);
        } else {
          setLateFees(0);
        }
      }
    }, [selectedLoan, paymentDate]);
  
    const handleSubmit = () => {
      if (!selectedLoan) {
        Alert.alert("Error", "Debe seleccionar un préstamo");
        return;
      }
  
      if (!amount || parseFloat(amount) <= 0) {
        Alert.alert("Error", "Debe ingresar un monto válido");
        return;
      }
  
      //TODO: Save payment to database
  
      Alert.alert("Éxito", "Pago registrado correctamente");
      router.back();
    };
  
    return (
      <ScrollView className="flex-1 bg-gray-50">
        {/* Header */}
        <View className="bg-blue-600 p-4">
          <View className="flex-row items-center mt-10">
            <Pressable onPress={() => router.back()} className="mr-4">
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
            <Text className="text-xl font-bold text-white">Registrar Pago</Text>
          </View>
        </View>
  
        {/* Form */}
        <View className="p-4">
          {/* Selección de Préstamo */}
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">
              Seleccionar Préstamo
            </Text>
            <View className="bg-gray-50 rounded-lg border border-gray-200">
              <Picker
                selectedValue={selectedLoan?.id || ""}
                onValueChange={(itemValue) => {
                  const loan = mockLoans.find((l) => l.id === itemValue);
                  setSelectedLoan(loan || null);
                  if (loan) {
                    setAmount(loan.installmentAmount.toString());
                  }
                }}
              >
                <Picker.Item label="Seleccione un préstamo" value="" />
                {mockLoans.map((loan) => (
                  <Picker.Item
                    key={loan.id}
                    label={`${loan.clientName} - $${loan.remainingAmount}`}
                    value={loan.id}
                  />
                ))}
              </Picker>
            </View>
          </View>
  
          {selectedLoan && (
            <>
              {/* Detalles del Préstamo */}
              <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <Text className="text-lg font-semibold mb-4">
                  Detalles del Préstamo
                </Text>
  
                <View className="mb-2">
                  <Text className="text-sm text-gray-600">Cliente:</Text>
                  <Text className="text-base font-medium">
                    {selectedLoan.clientName}
                  </Text>
                </View>
  
                <View className="mb-2">
                  <Text className="text-sm text-gray-600">Próximo Pago:</Text>
                  <Text className="text-base font-medium">
                    {selectedLoan.nextPaymentDate.toLocaleDateString()}
                  </Text>
                </View>
  
                <View className="mb-2">
                  <Text className="text-sm text-gray-600">Cuota Regular:</Text>
                  <Text className="text-base font-medium">
                    ${selectedLoan.installmentAmount.toFixed(2)}
                  </Text>
                </View>
  
                <View className="mb-2">
                  <Text className="text-sm text-gray-600">Monto Pendiente:</Text>
                  <Text className="text-base font-medium">
                    ${selectedLoan.remainingAmount.toFixed(2)}
                  </Text>
                </View>
              </View>
  
              {/* Detalles del Pago */}
              <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <Text className="text-lg font-semibold mb-4">
                  Detalles del Pago
                </Text>
  
                {/* Fecha de Pago */}
                <View className="mb-4">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Fecha de Pago
                  </Text>
                  <Pressable
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    onPress={() => setShowDatePicker(true)}
                  >
                    <Text>{paymentDate.toLocaleDateString()}</Text>
                  </Pressable>
                  {showDatePicker && (
                    <DateTimePicker
                      value={paymentDate}
                      mode="date"
                      display="default"
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) {
                          setPaymentDate(selectedDate);
                        }
                      }}
                    />
                  )}
                </View>
  
                {/* Monto */}
                <View className="mb-4">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Monto a Pagar *
                  </Text>
                  <TextInput
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    placeholder="0.00"
                    keyboardType="decimal-pad"
                    value={amount}
                    onChangeText={setAmount}
                  />
                </View>
  
                {/* Mora */}
                {lateFees > 0 && (
                  <View className="bg-red-50 p-4 rounded-lg">
                    <Text className="text-sm text-red-600 mb-1">
                      Mora por Atraso:
                    </Text>
                    <Text className="text-lg font-bold text-red-600">
                      ${lateFees.toFixed(2)}
                    </Text>
                    <Text className="text-sm text-red-500 mt-1">
                      Total a pagar: $
                      {(parseFloat(amount || "0") + lateFees).toFixed(2)}
                    </Text>
                  </View>
                )}
              </View>
            </>
          )}
  
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
                Registrar Pago
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default AddPaymentScreen;
  