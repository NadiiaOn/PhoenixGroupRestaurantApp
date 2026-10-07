import { StyleSheet, View, Text, Pressable } from "react-native";
import Navbar from "../components/Navbar";

export default function FoodMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("CuisineMenu")}>
        <Text>Cuisine</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("CategoryMenu")}>
        <Text>Category</Text>
      </Pressable>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
