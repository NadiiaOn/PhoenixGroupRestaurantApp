import { StyleSheet, View } from "react-native";

import CuisineCard from "../components/CuisineCard";

export default function CuisineMenu() {
  const cuisines = [
    {
      id: 1,
      title: "Italian food",
      description: "Classic meals from Italy",
      // image: require(""),
      flag: require("../assets/flags/italy.png"),
    },
    {
      id: 2,
      title: "Indonesian food",
      description: "Spicy flavors from Indonesia",
      // image: require(""),
      flag: require("../assets/flags/indonesia.png"),
    },
    {
      id: 3,
      title: "Swedish food",
      description: "Traditional flavors from Sweden",
      // image: require(""),
      flag: require("../assets/flags/sweden.png"),
    },
    {
      id: 4,
      title: "Ukrainian food",
      description: "Traditional meals from Ukraine",
      // image: require(""),
      flag: require("../assets/flags/ukraine.png"),
    },
  ];
  return (
    <View style={styles.container}>
      {cuisines.map((cuisine) => (
        <CuisineCard key={cuisine.id} cuisine={cuisine} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
