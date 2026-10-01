import { StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
