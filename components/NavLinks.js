import { Pressable, StyleSheet, Text } from "react-native";

export default function NavLinks({ text, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 1,
    borderColor: "#F45A45",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",

    paddingVertical: 12,
    color: "#fdb4ab",
  },
});
