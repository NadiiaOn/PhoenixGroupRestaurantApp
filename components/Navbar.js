import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View>
      <Text style={styles.title}>Navb</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontWeight: 600,
    fontSize: 24,
    color: "#f45a45",
  },
});
