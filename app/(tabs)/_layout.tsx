import { View, Text } from "react-native";
import { Tabs } from "expo-router/tabs"; // Correct import for Tabs
import React from "react";

const Layout = () => {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false, // Correctly placed inside options
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false, // Correctly placed inside options
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false, // Correctly placed inside options
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false, // Correctly placed inside options
        }}
      />
    </Tabs>
  );
};

export default Layout;
