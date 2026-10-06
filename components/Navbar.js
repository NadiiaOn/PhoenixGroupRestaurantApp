import { StyleSheet } from "react-native";
import {
  HouseIcon,
  MapPinIcon,
  BowlFoodIcon,
  ShoppingCartIcon,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

import NavItem from "./NavItem";

export default function Navbar() {
  const navigation = useNavigation();
  const navItems = [
    { id: 1, name: "Home", screen: "Home", icon: HouseIcon },
    { id: 2, name: "Find Us", screen: "Find us", icon: MapPinIcon },
    { id: 3, name: "Menu", screen: "CuisineMenu", icon: BowlFoodIcon },
    { id: 4, name: "Order", screen: "Order", icon: ShoppingCartIcon },
  ];

  function goTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <BlurView intensity={80} tint="prominent" style={styles.navbarContainer}>
      {navItems.map((item) => (
        <NavItem key={item.id} item={item} onPress={() => goTo(item.screen)} />
      ))}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    height: 65,
    borderWidth: 1,
    borderColor: "rgba(221, 221, 221, 0.8)",
    borderRadius: 50,
    backgroundColor: "rgba(221, 221, 221, 0.7)",
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
