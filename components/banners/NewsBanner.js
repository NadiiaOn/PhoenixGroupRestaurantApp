import { StyleSheet, View, Text, Image } from "react-native";

export default function NewsBanner({ banner }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={banner.image} />
      </View>
      <View>
        <Text>{banner.label}</Text>
        <Text>{banner.name}</Text>
        <Text>{banner.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
