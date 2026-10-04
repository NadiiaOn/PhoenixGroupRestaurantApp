import { StyleSheet, View, Image, Text, Pressable } from "react-native";

export default function CuisineCard({ cuisine }) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.textContainer}>
        <Image source={cuisine.flag} style={styles.flag} />
        <Text style={styles.title}>{cuisine.title}</Text>
        <Text style={styles.text}>{cuisine.description}</Text>
      </View>
      <Image resizeMethod="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
  textContainer: {
    gap: 8,
    paddingLeft: 16,
  },
  flag: {
    width: 50,
    height: 33,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "100",
  },
});
