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
      background: "rgba(60, 152, 92, 0.1)",
      screen: "Byt till Italian screen och ta bort kommentar i goTo()!!",
    },
    {
      id: 2,
      title: "Swedish food",
      description: "Traditional flavors from Sweden",
      image: require("../assets/cusineCard/swedishfood.png"),
      flag: require("../assets/flags/sweden.png"),
      background: "rgba(55, 64, 150, 0.1)",
      screen: "Byt till Swedish screen och ta bort kommentar i goTo()!!",
    },
    {
      id: 3,
      title: "Indonesian food",
      description: "Spicy flavors from Indonesia",
      image: require("../assets/cusineCard/indonesianfood.png"),
      flag: require("../assets/flags/indonesia.png"),
      background: "rgba(151, 77, 77, 0.1)",
      screen: "Byt till Indo screen och ta bort kommentar i goTo()!",
    },

    {
      id: 4,
      title: "Ukrainian food",
      description: "Traditional meals from Ukraine",
      image: require("../assets/cusineCard/ukrainefood.png"),
      flag: require("../assets/flags/ukraine.png"),
      background: "rgba(71, 79, 151, 0.1)",
      screen: "Byt till Ukraine screen och ta bort kommentar i goTo()!",
    },
  ];

  function goTo(screen) {
    // navigation.navigate(screen);
    console.log(screen);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cuisines.map((cuisine) => (
        <CuisineCard
          key={cuisine.id}
          cuisine={cuisine}
          onPress={() => goTo(cuisine.screen)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginHorizontal: 15,
    marginTop: 10,
  },
});
