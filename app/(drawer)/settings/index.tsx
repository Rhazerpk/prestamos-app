import React, { useState } from "react";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import { StatusBar } from "expo-status-bar";
import ThemedCard from "@/presentation/theme/components/ThemedCard";
import { ThemedView } from "@/presentation/theme/components/ThemedView";
import ThemedSwitch from "@/presentation/theme/components/ThemedSwitch";

const SettingsScreen = () => {
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext();
  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        {/* <ThemedSwitch
          text="System Mode"
          className="mb-5"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        /> */}
      </ThemedCard>
    </ThemedView>
  );
};

export default SettingsScreen;
