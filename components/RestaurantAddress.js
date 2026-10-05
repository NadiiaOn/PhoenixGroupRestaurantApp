import { useState } from "react";
import { Pressable } from "react-native";
import { openMaps } from "../utils/openMaps";
import { StyleSheet, Text, View } from "react-native";
//import { Fonts } from "../constants/Fonts";
import Ionicons from "@react-native-vector-icons/ionicons";

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
      accessibilityRole="button"
      accessibilityLabel={`Open ${restaurant.name} in maps`}
      style={({ pressed }) => [
        styles.addressContainer,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.locationContainer}>
        <Ionicons name="location" size={22} color="#f45a45" />
        <Text> {restaurant.address}</Text>
      </View>
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
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default RestaurantAddress;
