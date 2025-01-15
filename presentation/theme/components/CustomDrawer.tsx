import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pb-9">
        <Image
          source={require("@/assets/images/prestamo.png")}
          style={{
            width: 80,
            height: 80,
            marginBottom: 10,
            marginTop: 20,
          }}
          resizeMode="contain"
        />
        {/* Título */}
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          Préstamos App
        </Text>
        <Text style={{ fontSize: 14, color: "#d1d5db" }}>
          Tu solución rápida
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
