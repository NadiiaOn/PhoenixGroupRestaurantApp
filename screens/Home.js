import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Test HOME</Text>
      <Footer />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
