import { StyleSheet, View, Image, Text, Pressable } from "react-native";

export default function CuisineCard({ cuisine }) {
  return (
    <View style={styles.shadow}>
      <Pressable style={[styles.card, { backgroundColor: cuisine.background }]}>
        <Image
          source={cuisine?.image}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Image source={cuisine.flag} style={styles.flag} />
          <Text style={styles.title}>{cuisine.title}</Text>
          <Text style={styles.text}>{cuisine.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
  },
  card: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    gap: 8,
    paddingLeft: 16,
  },
  flag: {
    width: 40,
    height: 27,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "100",
  },
  image: {
    width: "50%",
    height: "50%",
    alignSelf: "flex-end",
  },
});
