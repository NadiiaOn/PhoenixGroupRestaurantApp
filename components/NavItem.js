import { Pressable, StyleSheet, Text, View } from "react-native";
import Fonts from "../constants/Fonts";

export default function NavItem({ item, onPress , badge = 0}) {
  const Icon = item.icon;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View>
        <Icon size={30} color="#F45A45" />
 
        {/* Badge som visar antalet maträtter i varukorgen*/}
        {badge > 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge > 9 ? "9+" : badge}</Text>
          </View>
        ) : null}
      </View>
 
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 14,
    fontFamily: Fonts.headingMedium,
    color: "#F45A45",
  },

  pressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.5,
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#F45A45",
    alignItems: "center",
    justifyContent: "center",
  },
 
  badgeText: {
    fontSize: 11,
    fontFamily: Fonts.headingMedium,
    color: "#fff",
  },
});
