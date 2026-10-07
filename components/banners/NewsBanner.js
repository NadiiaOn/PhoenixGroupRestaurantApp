import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function NewsBanner({ banner, onPress }) {
  return (
    <View>
      <Pressable style={styles.container} onPress={() => onPress?.(banner)}>
        <View style={styles.imageContainer}>
          <Image source={banner.image} style={styles.image} />
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.label}>{banner.label}</Text>
            <Text style={styles.discount}>{banner.discount} OFF</Text>
          </View>

          <Text style={styles.name}>{banner.name}</Text>
          <Text style={styles.description}>{banner.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#ff9195",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },

  imageContainer: {
    width: "48%",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    minWidth: 0,
    gap: 2,
  },

  label: {
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
    textTransform: "uppercase",
  },

  name: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
    flexShrink: 1,
    textTransform: "uppercase",
  },

  description: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
    color: "#fff",
    flexShrink: 1,
  },

  discount: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    color: "#ff9195",
  },
});
