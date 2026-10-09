import { StyleSheet, View, Text, Pressable } from "react-native";
import Navbar from "../components/Navbar";
import Fonts from "../constants/Fonts";
import { FlagIcon, BowlFoodIcon } from "phosphor-react-native";

export default function FoodMenu({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Main Menu</Text>
        <Pressable
          style={styles.optionButton}
          onPress={() => navigation.navigate("CuisineMenu")}
        >
          <Text style={styles.buttonText}>Cuisine</Text>
          <FlagIcon size={24} color="#f45a45" />
        </Pressable>
        <Pressable
          style={styles.optionButton}
          onPress={() => navigation.navigate("CategoryMenu")}
        >
          <Text style={styles.buttonText}>Category</Text>
          <BowlFoodIcon size={24} color="#f45a45" />
        </Pressable>
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontFamily: Fonts.heading,
    color: "#f45a45",
    textAlign: "center",
  },

  container: {
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    gap: 20,
    marginHorizontal: 15,
    marginBottom: 90,
  },

  optionButton: {
    flexDirection: "row",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    gap: 4,
    borderWidth: 2,
    borderColor: "rgba(182, 182, 182, 0.5)",
  },

  buttonText: {
    fontSize: 18,
    letterSpacing: 0.6,
    fontFamily: Fonts.headingMedium,
    textAlign: "center",
  },
});
