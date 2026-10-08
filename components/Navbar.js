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
import { useState } from "react";
import Restaurant from "../constants/restaurant";
import { openMaps } from "../utils/openMaps";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpening, setIsOpening] = useState(false);
  const navigation = useNavigation();
  const { totalCount } = useCart();

  const navItems = [
    { id: 1, name: "Home", screen: "Home", icon: HouseIcon },
    {
      id: 2,
      name: "Find Us",
      icon: MapPinIcon,
    },
   { id: 3, name: "Menu", screen: "FoodMenu", icon: BowlFoodIcon },
    { id: 4, name: "Order", screen: "OrderScreen", icon: ShoppingCartIcon },
    

  ];

  function goTo(screen) {
    navigation.navigate(screen);
  }

  const handleMapPress = async () => {
    if (isOpening) {
      return;
    }
    setIsOpening(true);

    try {
      await openMaps({
        address: Restaurant.address,
        label: Restaurant.name,
        latitude: Restaurant.latitude,
        longitude: Restaurant.longitude,
      });
    } finally {
      setIsOpening(false);
    }
  };

  return (
    <BlurView intensity={80} tint="prominent" style={styles.navbarContainer}>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          badge={item.name === "Order" && totalCount > 0 ? totalCount : null}
          onPress={() => {
            if (item.name === "Find Us") {
              handleMapPress();
            } else {
              goTo(item.screen);
            }
          }}
        />
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
