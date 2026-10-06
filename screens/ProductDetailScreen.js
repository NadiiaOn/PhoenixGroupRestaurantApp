import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { starters, meals, desserts, drinks } from "../data/Products";

const productLists = { starters, meals, desserts, drinks };

export default function ProductDetailScreen({ route }) {
  const { productId, type } = route.params;
  const product = productLists[type]?.find((p) => p.id === productId);

  if (!product) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Product not found</Text>
      </View>
    );
  }

  const {
    name,
    price,
    category,
    description,
    image,
    country,
    ingredients = [],
    allergies = [],
    vegetarian,
  } = product;

  // För att det ska fungera både med bild sparade i t.ex /assets men också en direkt länk till en bild på internet
  const imageSource = typeof image === "string" ? { uri: image } : image;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {imageSource ? (
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.placeholderText}>Image not found</Text>
        </View>
      )}

      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price} kr</Text>
        </View>

        <View style={styles.tagRow}>
          {category ? <Tag label={category} /> : null}
          {country ? <Tag label={country} variant="secondary" /> : null}
          {vegetarian ? <Tag label="Vegetarian" variant="green" /> : null}
        </View>

        {description ? <Text style={styles.description}>{description}</Text> : null}

        <Section title="Ingredients">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.listItem}>
                • {ingredient}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyText}>No ingredients listed</Text>
          )}
        </Section>

        <Section title="Allergens">
          {allergies.length > 0 ? (
            <View style={styles.tagRow}>
              {allergies.map((allergy) => (
                <Tag key={allergy} label={allergy} variant="warning" />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>No known allergens</Text>
          )}
        </Section>
      </View>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Tag({ label, variant = "primary" }) {
  return (
    <View style={[styles.tag, styles[`tag_${variant}`]]}>
      <Text style={[styles.tagText, styles[`tagText_${variant}`]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: 260,
  },
  imagePlaceholder: {
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 14,
    color: "#999",
  },
  body: {
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  name: {
    flex: 1,
    fontFamily: "Rubik-Bold",
    fontSize: 24,
    color: "#222",
    marginRight: 12,
  },
  price: {
    fontFamily: "Rubik-Medium",
    fontSize: 20,
    color: "#f45a45",
  },
  description: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginTop: 12,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: "Rubik-Bold",
    fontSize: 18,
    color: "#222",
    marginBottom: 8,
  },
  listItem: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
  },
  emptyText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 15,
    color: "#999",
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tag_primary: {
    backgroundColor: "#f45a45",
  },
  tag_secondary: {
    backgroundColor: "#f1e4d8",
  },
  tag_green: {
    backgroundColor: "#dff2e1",
  },
  tag_warning: {
    backgroundColor: "#fff1d6",
  },
  tagText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 12,
  },
  tagText_primary: {
    color: "#fff",
  },
  tagText_secondary: {
    color: "#222",
  },
  tagText_green: {
    color: "#2e7d32",
  },
  tagText_warning: {
    color: "#8a5a00",
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    color: "#999",
  },
});