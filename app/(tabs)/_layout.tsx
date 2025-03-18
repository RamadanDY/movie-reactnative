import { View, Text, ImageBackground, Image } from "react-native";
import { Tabs } from "expo-router/tabs"; // Correct import for Tabs
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

// lets create a new component to save the ui of the tab
// how to make a custom component reusable and to do that we need to pass the props
const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4  justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
      <Text className="text-secondary text-base font0semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  );
};

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          // Custom Tab icon which allows us to access the state of the tab whether  it is being clicked or not
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
