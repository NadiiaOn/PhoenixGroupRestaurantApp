import { StyleSheet, View, ScrollView, Text } from "react-native";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Fonts from "../constants/Fonts";

export default function CategoryMenu({ navigation }) {
  const mainCategories = [
    {
      id: 1,
      title: "Starters",
      description: "All our Starters",
      image: require("../assets/indonesian/Lumpia.png"),
      type: "starters",
    },
    {
      id: 2,
      title: "Meals",
      description: "All our Meals",
      image: require("../assets/sweden/pyttipanna.png"),
      type: "meals",
    },
    {
      id: 3,
      title: "Desserts",
      description: "All our Desserts",
      image: require("../assets/italian/Tiramisu.png"),
      type: "desserts",
    },
    {
      id: 4,
      title: "Drinks",
      description: "All our Drinks",
      image: require("../assets/categoryCard/Cola-bg.png"),
      type: "drinks",
    },
  ];

  const subCategories = [
    {
      id: 1,
      title: "Meat",
      description: "All our dishes with meat",
      image: require("../assets/ukrainian/holubtsi.png"),
      path: "",
    },
    {
      id: 2,
      title: "Fish",
      description: "All our dishes with fish",
      image: require("../assets/sweden/gravad-lax.png"),
      path: "",
    },
    {
      id: 3,
      title: "Chicken",
      description: "All our dishes with chicken",
      image: require("../assets/indonesian/Nasi_Goreng.png"),
      path: "",
    },
    {
      id: 4,
      title: "Vegetarian",
      description: "All our vegetarian dishes",
      image: require("../assets/italian/Brushetta.jpeg"),
      path: "",
    },
    {
      id: 5,
      title: "Pasta",
      description: "All our dishes with pasta",
      image: require("../assets/italian/Carbonara.jpg"),
      path: "",
    },
    {
      id: 6,
      title: "Pizza",
      description: "All our pizzas",
      image: require("../assets/italian/Margherita.webp"),
      path: "",
    },
    {
      id: 7,
      title: "Creamy",
      description: "All our desserts with a creamy consistence",
      image: require("../assets/italian/Pannacotta.jpg"),
      path: "",
    },
    {
      id: 8,
      title: "Pastry",
      description: "All our desserts made with pastry or dough",
      image: require("../assets/sweden/semla.png"),
      path: "",
    },
    {
      id: 9,
      title: "Cheesecake",
      description: "All our cheesecakes and curd-based desserts",
      image: require("../assets/ukrainian/lviv-cheesecake.png"),
      path: "",
    },
    {
      id: 10,
      title: "Cake",
      description: "All our cakes and cake-like desserts",
      image: require("../assets/sweden/kladdkaka.png"),
      path: "",
    },
    {
      id: 11,
      title: "Traditional",
      description: "Traditional drinks from our home countries",
      image: require("../assets/drinks/uzvar.png"),
      path: "",
    },
    {
      id: 12,
      title: "Soda",
      description: "All our sodas and soft drinks",
      image: require("../assets/categoryCard/Cola-bg.png"),
      path: "",
    },
    {
      id: 13,
      title: "Hot",
      description: "All our hot drinks",
      image: require("../assets/drinks/espresso.png"),
      path: "",
    },
    {
      id: 14,
      title: "Dessert Drink",
      description: "Sweet drinks to enjoy as a dessert",
      image: require("../assets/drinks/es-teler.png"),
      path: "",
    },
  ];

  function goTo(params) {
    navigation.navigate("ProductCardMenu", params);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Main</Text>

        {mainCategories.map((category) => (
          <CategoryCard
            key={category.id}
            item={category}
            onPress={() => goTo({ type: category.type })}
          />
        ))}

        <Text style={styles.sectionTitle}>Sub</Text>

        {subCategories.map((subCategory) => (
          <CategoryCard
            key={subCategory.id}
            item={subCategory}
            onPress={() => goTo({ subCategory: subCategory.title })}
          />
        ))}
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
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
