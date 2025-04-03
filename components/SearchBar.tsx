import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import { icons } from "@/constants/icons";
import React from "react";

const SearchBar = () => {
  return (
    <View className="flex-row items-centerbg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} />
      <TextInput
        onPress={() => {}}
        placeholder="search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
