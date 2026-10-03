import { Linking, Pressable, StyleSheet } from "react-native";

export default function MenuFooter({ item }) {
  const Icon = item.icon;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.icons,
        pressed && { opacity: 0.5, scale: 0.9 },
      ]}
      onPress={() => Linking.openURL(item.url)}
    >
      <Icon size={30} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
  },
});
