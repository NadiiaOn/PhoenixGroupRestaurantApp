import { SectionList, View, Text, StyleSheet } from "react-native";
import { starters, meals, desserts, drinks } from "../data/Products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const allSections = [
  { title: "Starters", type: "starters", products: starters },
  { title: "Main courses", type: "meals", products: meals },
  { title: "Desserts", type: "desserts", products: desserts },
  { title: "Drinks", type: "drinks", products: drinks },
];

export default function ProductCardMenuScreen({ route, navigation }) {
  const { country, subCategory, type } = route.params ?? {};

  const sections = allSections
    .filter((section) => !type || section.type === type)
    .map((section) => ({
      title: section.title,
      type: section.type,
      data: section.products.filter((p) => {
        const matchesCountry = !country || p.country === country;
        const matchesSub = !subCategory || p.subCategory === subCategory;
        return matchesCountry && matchesSub;
      }),
    }))
    .filter((section) => section.data.length > 0);

  function handlePress(product, type) {
    navigation.navigate("ProductDetail", { productId: product.id, type });
  }

  const emptyLabel =
    [subCategory, country].filter(Boolean).join(" from ") || "this selection";

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <SectionList
          style={styles.list}
          contentContainerStyle={styles.content}
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
          renderItem={({ item, section }) => (
            <ProductCard
              meal={item}
              onPress={(product) => handlePress(product, section.type)}
            />
          )}
          stickySectionHeadersEnabled={false}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>
                No dishes found for {emptyLabel}
              </Text>
            </View>
          }
        />
      </View>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    paddingBottom: 24,
  },

  sectionTitle: {
    fontFamily: "Rubik-Bold",
    fontSize: 22,
    color: "#222",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 4,
  },

  empty: {
    padding: 32,
    alignItems: "center",
  },

  emptyText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    color: "#999",
  },
});
