import { StyleSheet, View, ScrollView } from "react-native";

import CuisineCard from "../components/CuisineCard";
import Navbar from "../components/Navbar";

export default function CuisineMenu({ navigation }) {
  const cuisines = [
    {
      id: 1,
      title: "Italian food",
      description: "Classic meals from Italy",
      image: require("../assets/cusineCard/italianfood.png"),
      flag: require("../assets/flags/italy.png"),
      background: "rgba(60, 152, 92, 0.05)",
      country: "Italy",
    },
    {
      id: 2,
      title: "Swedish food",
      description: "Traditional flavors from Sweden",
      image: require("../assets/cusineCard/swedishfood.png"),
      flag: require("../assets/flags/sweden.png"),
      background: "rgba(55, 64, 150, 0.05)",
      country: "Sweden",
    },
    {
      id: 3,
      title: "Indonesian food",
      description: "Spicy flavors from Indonesia",
      image: require("../assets/cusineCard/indonesianfood.png"),
      flag: require("../assets/flags/indonesia.png"),
      background: "rgba(151, 77, 77, 0.05)",
      country: "Indonesia",
    },

    {
      id: 4,
      title: "Ukrainian food",
      description: "Traditional meals from Ukraine",
      image: require("../assets/cusineCard/ukrainefood.png"),
      flag: require("../assets/flags/ukraine.png"),
      background: "rgba(71, 79, 151, 0.05)",
      country: "Ukraine",
    },
  ];

  function goTo(country) {
    navigation.navigate("ProductCardMenu", { country });
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {cuisines.map((cuisine) => (
          <CuisineCard
            key={cuisine.id}
            cuisine={cuisine}
            onPress={() => goTo(cuisine.country)}
          />
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    height: 830,
    gap: 16,
    marginHorizontal: 15,
    marginTop: 10,
  },
});
