import { Pressable, StyleSheet, Text } from "react-native";

export default function NavItem({ item, onPress }) {
  const Icon = item.icon;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Icon size={25} color="#F45A45" />
      <Text style={styles.text}>{item.screen}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F45A45",
  },
  pressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.5,
  },
});
