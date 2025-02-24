import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

const AddClientScreen = () => {
  const { id } = useLocalSearchParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    phone: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (isEditing) {
      const mockClient = {
        id: Number(id),
        firstName: "Juan",
        lastName: "Pérez",
        nickname: "Juanito",
        phone: "1234567890",
        address: "Calle 123",
        email: "juan@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setFormData({
        firstName: mockClient.firstName,
        lastName: mockClient.lastName,
        nickname: mockClient.nickname || "",
        phone: mockClient.phone,
        address: mockClient.address || "",
        email: mockClient.email || "",
      });
    }
  }, [id]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es requerido";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Ingrese un número válido de 10 dígitos";
      isValid = false;
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingrese un email válido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (isEditing) {
        //TODO: Update client in database
        Alert.alert("Éxito", "Cliente actualizado correctamente");
      } else {
        //TODO: Save new client to database
        Alert.alert("Éxito", "Cliente registrado correctamente");
      }
      router.push("/clients/list");
    }
  };

  return (
    <>
      <ScrollView className="flex-1 bg-gray-50">
        <View className="p-4">
          <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
            
            {/* Nombre */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </Text>
              <TextInput
                className={`bg-gray-50 p-4 rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Ingrese el nombre"
                value={formData.firstName}
                onChangeText={(text) =>
                  setFormData({ ...formData, firstName: text })
                }
              />
              {errors.firstName ? (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </Text>
              ) : null}
            </View>

            {/* Apellido */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Apellido *
              </Text>
              <TextInput
                className={`bg-gray-50 p-4 rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Ingrese el apellido"
                value={formData.lastName}
                onChangeText={(text) =>
                  setFormData({ ...formData, lastName: text })
                }
              />
              {errors.lastName ? (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </Text>
              ) : null}
            </View>

            {/* Apodo */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Apodo
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                placeholder="Ingrese el apodo"
                value={formData.nickname}
                onChangeText={(text) =>
                  setFormData({ ...formData, nickname: text })
                }
              />
            </View>

            {/* Teléfono */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Teléfono *
              </Text>
              <TextInput
                className={`bg-gray-50 p-4 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Ingrese el teléfono"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
              />
              {errors.phone ? (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </Text>
              ) : null}
            </View>

            {/* Email */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Email
              </Text>
              <TextInput
                className={`bg-gray-50 p-4 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Ingrese el email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
              {errors.email ? (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.email}
                </Text>
              ) : null}
            </View>

            {/* Dirección */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Dirección
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                placeholder="Ingrese la dirección"
                multiline
                numberOfLines={3}
                value={formData.address}
                onChangeText={(text) =>
                  setFormData({ ...formData, address: text })
                }
              />
            </View>
          </View>

          {/* Botones */}
          <View className="flex-row gap-4 mt-4">
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
                {isEditing ? "Actualizar" : "Guardar"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AddClientScreen;
