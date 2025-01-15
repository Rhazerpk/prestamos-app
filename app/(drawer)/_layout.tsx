import React from "react";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/presentation/theme/components/CustomDrawer";
import { allRoutes } from "@/constants/routes";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "#2563eb",
        drawerInactiveTintColor: "#6b7280",
        headerShadowVisible: false,
        headerShown: true,
        headerTitle: ""
      }}
    >
      {allRoutes.map((route) => (
        <Drawer.Screen
          key={route.name}
          name={route.name}
          options={{
            drawerLabel: route.title,
            title: route.title,
            drawerIcon: ({ color, size }) => (
              <Ionicons name={route.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Drawer>
  );
};

export default DrawerLayout;
