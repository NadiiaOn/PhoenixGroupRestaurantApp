import { StyleSheet, View, Text } from "react-native";
import {
  HouseIcon,
  MapPinIcon,
  BowlFoodIcon,
  BookOpenTextIcon,
  ShoppingCartIcon,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

import NavItem from "./NavItem";

export default function Navbar() {
  const navigation = useNavigation();
  const navItem = [
    { id: 1, screen: "Home", icon: HouseIcon },
    { id: 2, screen: "Find us", icon: MapPinIcon },
    { id: 3, screen: "Food", icon: BowlFoodIcon },
    { id: 4, screen: "Story", icon: BookOpenTextIcon },
    { id: 5, screen: "Order", icon: ShoppingCartIcon },
  ];

  function goTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <BlurView intensity={80} tint="light" style={styles.navbarContainer}>
      {navItem.map((item) => (
        <NavItem key={item.id} item={item} onPress={() => goTo(item.screen)} />
      ))}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    height: 65,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    backgroundColor: "rgba(250, 190, 180, 0.25)",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 20,
    right: 16,
    left: 16,
  },
});
