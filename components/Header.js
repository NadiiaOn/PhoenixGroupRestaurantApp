import { Pressable, StyleSheet, View } from "react-native";
import Logo from "./Logo";
import { useNavigation } from "@react-navigation/native";

import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => pressed && { opacity: 0.5 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Logo
            size={135}
            accessibilityLabel="Logo that reads: 4NC - four nations cuisine, Online Food"
          />
        </Pressable>

        <View style={styles.menu}>
          <HamburgerMenu />
        </View>
      </View>

      <View style={styles.bottomBorder} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "col",
  },

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

  bottomBorder: {
    width: "full",
    height: 1.5,
    backgroundColor: "#68686852",
    marginHorizontal: 15,
  },
});
