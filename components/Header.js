import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";
import { useNavigation } from "@react-navigation/native";

import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Logo size={150} />
      </Pressable>

      <View style={styles.menu}>
        <HamburgerMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 150,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingHorizontal: 16,
  },
  menu: {
    position: "absolute",
    right: 24,
  },
});
