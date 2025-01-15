import { Ionicons } from "@expo/vector-icons";

interface MenuRoute {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}

export const dashboardRoutes: MenuRoute[] = [
  {
    title: "Inicio",
    icon: "home-outline",
    name: "dashboard/index",
  },
];

export const clientRoutes: MenuRoute[] = [
  {
    title: "Clientes",
    icon: "people-outline",
    name: "clients/index",
  },
];

export const loanRoutes: MenuRoute[] = [
  {
    title: "Préstamos",
    icon: "wallet-outline",
    name: "loans/index",
  },
];

export const paymentRoutes: MenuRoute[] = [
  {
    title: "Pagos",
    icon: "cash-outline",
    name: "payments/index",
  },
];

export const settingsRoutes: MenuRoute[] = [
  {
    title: "Configuración",
    icon: "settings-outline",
    name: "settings/index",
  },
];

export const allRoutes: MenuRoute[] = [
  ...dashboardRoutes,
  ...clientRoutes,
  ...loanRoutes,
  ...paymentRoutes,
  ...settingsRoutes,
];
