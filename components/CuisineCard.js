import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { ArrowRightIcon } from "phosphor-react-native";
import Fonts from "../constants/Fonts";

export default function CuisineCard({ cuisine, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.shadow,
        pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={[styles.card, { backgroundColor: cuisine.background }]}>
        <View style={styles.textContainer}>
          <Image source={cuisine.flag} style={styles.flag} />
          <Text style={styles.title}>{cuisine.title}</Text>
          <Text style={styles.text}>{cuisine.description}</Text>
          <ArrowRightIcon size={20} style={{ marginTop: 8 }} />
        </View>
        <Image
          source={cuisine?.image}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 15,
  },
  textContainer: {
    flex: 1,
    gap: 8,
    paddingLeft: 16,
    paddingRight: 8,
  },
  flag: {
    width: 40,
    height: 27,
    borderRadius: 5,
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
    width: "50%",
    height: "55%",
  },
});
