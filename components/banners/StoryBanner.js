import { StyleSheet, View, Text, Pressable } from "react-native";
import Logo from "../Logo";
export default function StoryBanner2({ banner }) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Logo size={150} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{banner.name}</Text>
        <Text style={styles.description}>{banner.description}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.established}>Est. {banner.established}</Text>
          <Text style={styles.label}>{banner.label}</Text>
        </View>
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
    minHeight: 210,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
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
    fontSize: 26,
    fontWeight: "700",
    color: "#f45a45",
    flexShrink: 1,
    textTransform: "uppercase",
  },

  description: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "#555",
    flexShrink: 1,
  },

  infoContainer: {
    marginTop: 5,
    gap: 7,
  },

  established: {
    fontSize: 13,
    fontWeight: "600",
    color: "#777",
  },

  label: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "#f45a45",
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
  },
});
