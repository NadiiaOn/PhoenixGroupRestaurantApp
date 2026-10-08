import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Fonts from "../constants/Fonts";

export default function MenuItem({ links, onPress, isOpen }) {
  const Icon = links.icon;

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      {/* Start: Link */}
      <View style={styles.linkContainer}>
        <Icon size={25} color="white" weight="bold" />
        <Text style={styles.text}>{links.text}</Text>
      </View>
      {/* End: Link */}

      {/* Start: Link info */}
      {isOpen &&
        (Array.isArray(links.info) ? (
          <View>
            {links.info.map((item) => (
              <View key={item.day} style={styles.linkContainer}>
                <Text style={[styles.textInfo, styles.dayText]}>
                  {item.day}
                </Text>
                <Text style={styles.textInfo}>{item.time}</Text>
              </View>
            ))}
          </View>
        ) : (
          links.info && (
            <Pressable onPress={() => Linking.openURL(`tel:${links.phone}`)}>
              <Text style={styles.textInfo}>{links.info}</Text>
            </Pressable>
          )
        ))}

      {/* End: Link info */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {},
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: Fonts.bodySemiBold,
  },
  textInfo: {
    marginTop: 8,
    color: "white",
    marginTop: 12,
    marginLeft: 30,
    fontFamily: Fonts.body,
  },
  dayText: {
    width: 80,
  },
});
