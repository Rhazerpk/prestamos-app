import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/presentation/theme/components/CustomDrawer";
import DashboardHeader from "@/presentation/dashboard/components/DashboardHeader";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="dashboard/index"
        options={{
          drawerLabel: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: true,
          headerTitle: "Inicio",
          header: () => <DashboardHeader title="Sistemas de Préstamos"/>,
        }}
      />
      <Drawer.Screen
        name="(stack)/clients"
        options={{
          drawerLabel: "Clientes",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(stack)/loans"
        options={{
          drawerLabel: "Préstamos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(stack)/payments"
        options={{
          drawerLabel: "Pagos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings/index"
        options={{
          drawerLabel: "Configuración",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
