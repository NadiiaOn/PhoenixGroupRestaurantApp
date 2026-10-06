import { StyleSheet, View, ScrollView, Text } from "react-native";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Fonts from "../constants/Fonts";

export default function CategoryMenu() {
  const mainCategories = [
    {
      id: 1,
      title: "Starters",
      description: "All our Starters",
      image: require("../assets/categoryCard/Lumpia-bg.png"),
      path: "",
    },
    {
      id: 2,
      title: "Meals",
      description: "All our Meals",
      image: require("../assets/categoryCard/Pyttipanna-bg.png"),
      path: "",
    },
    {
      id: 3,
      title: "Desserts",
      description: "All our Meals",
      image: require("../assets/categoryCard/Tiramisu-bg.png"),
      path: "",
    },
  ];

  // För imorgon 7st är som placeholders
  const subCategories = [
    {
      id: 1,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 2,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 3,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 4,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 5,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 6,
      title: "",
      description: "",
      image: "",
      path: "",
    },
    {
      id: 7,
      title: "",
      description: "",
      image: "",
      path: "",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Main</Text>

        {mainCategories.map((category) => (
          <CategoryCard
            key={category.id}
            item={category}
            onPress={() => goTo(category.path)}
          />
        ))}

        <Text style={styles.sectionTitle}>Sub</Text>

        {subCategories.map((subCategory) => (
          <CategoryCard key={subCategory.id} item={subCategory} />
        ))}
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: Fonts.heading,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    color: "#F45A45",
  },

  breaker: {
    width: "full",
    height: 1.5,
    backgroundColor: "#68686852",
    marginHorizontal: 15,
  },
});
