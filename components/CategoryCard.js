import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Fonts from "../constants/Fonts";

export default function CategoryCard({ item, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.shadow,
        pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
        <Image source={item?.image} style={styles.image} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    marginHorizontal: 10,
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  textContainer: {
    flex: 1,
    gap: 4,
    paddingLeft: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: Fonts.heading,
  },

  text: {
    fontWeight: "100",
    fontFamily: Fonts.body,
    color: "gray",
  },

  image: {
    width: "100",
    height: "100",
    marginRight: 10,
    borderRadius: 25,
  },
});
