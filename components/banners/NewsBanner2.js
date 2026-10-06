import { StyleSheet, View, Text, Image, Pressable } from "react-native";
export default function NewsBanner2({ banner }) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{banner.name}</Text>
        <Text style={styles.description}>{banner.description}</Text>
        <Text style={styles.label}>{banner.label}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={banner.image} style={styles.image} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },

  imageContainer: {
    width: "48%",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#91e2ff",
  },

  image: {
    width: "100%",
    height: 210,
    resizeMode: "contain",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    minWidth: 0,
    gap: 7,
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f45a45",
    flexShrink: 1,
  },

  description: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#555",
    flexShrink: 1,
  },

  label: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "#f45a45",
    fontSize: 13,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
  },
});
