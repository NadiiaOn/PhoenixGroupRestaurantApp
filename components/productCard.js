import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";

export default function ProductCard({ meal, onPress }) {
  const { name, price, category, description, image, country } = meal;

  // För att det ska fungera både med bild sparade i t.ex /assets men också en direkt länk till en bild på internet
  const imageSource = typeof image === "string" ? { uri: image } : image;

  return (
    <Pressable
      onPress={() => onPress?.(meal)}
      android_ripple={{ color: "rgba(63, 53, 52, 0.08)" }}
      style={({ pressed }) => [
        styles.card,
        pressed && Platform.OS === "ios" && styles.pressed,
      ]}
    >
      {imageSource ? (
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.placeholderIcon}>IMAGE NOT FOUND</Text>
        </View>
      )}

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.price}>{price} kr</Text>
        </View>

        {description ? (
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        ) : null}

        <View style={styles.tagRow}>
          {category ? <Tag label={category} /> : null}
          {country ? <Tag label={country} variant="secondary" /> : null}
        </View>
      </View>
    </Pressable>
  );
}

function Tag({ label, variant = "primary" }) {
  return (
    <View style={[styles.tag, variant === "secondary" && styles.tagSecondary]}>
      <Text
        style={[styles.tagText, variant === "secondary" && styles.tagTextSecondary]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imagePlaceholder: {
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderIcon: {
    fontSize: 40,
  },
  info: {
    padding: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f45a45",
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    backgroundColor: "#f45a45",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagSecondary: {
    backgroundColor: "#f1e4d8",
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  tagTextSecondary: {
    color: "#222",
  },
});