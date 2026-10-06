import { Pressable, StyleSheet, Text } from "react-native";
import Fonts from "../constants/Fonts";

export default function NavItem({ item, onPress }) {
  const Icon = item.icon;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Icon size={30} color="#F45A45" />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 14,
    fontFamily: Fonts.headingMedium,
    color: "#F45A45",
  },

  pressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.5,
  },
});
