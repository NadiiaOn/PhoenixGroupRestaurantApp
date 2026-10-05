import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { ListIcon, XIcon } from "phosphor-react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp } from "react-native-reanimated";

import NavLinks from "./NavLinks";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const links = [
    { id: 1, text: "HOME", screen: "Home" },
    { id: 2, text: "FIND US", screen: "Find us" },
    { id: 3, text: "FOOD", screen: "Food" },
    { id: 4, text: "STORY", screen: "Story" },
    { id: 5, text: "ORDER", screen: "Order" },
  ];

  function goTo(screenName) {
    setOpen(false);
    navigation.navigate(screenName);
  }

  return (
    <>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => setOpen(true)}
      >
        <ListIcon size={40} color="#F45A45" />
      </Pressable>
      <Modal
        visible={open}
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Pressable
              style={({ pressed }) => [
                styles.xButton,
                pressed && { opacity: 0.5 },
              ]}
              onPress={() => setOpen(false)}
            >
              <XIcon size={40} color="black" />
            </Pressable>
            {links.map((link, index) => (
              <Animated.View
                key={link.id}
                entering={FadeInUp.delay(index * 100).duration(400)}
              >
                <NavLinks text={link.text} onPress={() => goTo(link.screen)} />
              </Animated.View>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#ffebe9",
    paddingHorizontal: 16,
  },
  menu: {
    marginTop: 70,
  },
  xButton: {
    position: "absolute",
    right: 16,
    top: 0,
    zIndex: 50,
  },
});
