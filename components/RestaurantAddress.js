import { useState } from "react";
import { Pressable } from "react-native";
import { openMaps } from "../utils/openMaps";
import { StyleSheet, Text } from "react-native";
//import { Fonts } from "../constants/Fonts";

function RestaurantAddress({ restaurant }) {
  const [isOpening, setIsOpening] = useState(false);

  const handlePress = async () => {
    // Prevent multiple presses while the map is opening
    if (isOpening) {
      return;
    }
    setIsOpening(true);

    try {
      await openMaps({
        address: restaurant.address,
        label: restaurant.name,
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
      });
    } finally {
      setIsOpening(false);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={isOpening}
      accessibilityRole="link"
      accessibilityLabel={`Open ${restaurant.name} in maps`}
      style={({ pressed }) => [
        styles.addressContainer,
        pressed && styles.pressed,
      ]}
    >
      <Text> 📍 {restaurant.address}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  addressText: {
    fontSize: 14,
    color: "#007AFF", // iOS link color
      textDecorationLine: "underline",
    //fontFamily: Fonts.NunitoSans_600SemiBold,
  },
});

export default RestaurantAddress;
