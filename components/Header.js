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
        <Logo size={135} />
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 1,
  },
  menu: {
    position: "absolute",
    right: 24,
  },
});
