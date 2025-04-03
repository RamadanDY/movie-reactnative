import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { Text, View, Image, ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      {/* the scrollview makes the content fit inside the screen no mater the size by making the screen scrollable  */}
      {/* also to remove the vertical scroll bar we us an additional prop called show..... and conta....  */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", padding: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar />
        </View>
      </ScrollView>
      {/* <Text className="text-7xl color-white">helloS</Text> */}
    </View>
  );
}
