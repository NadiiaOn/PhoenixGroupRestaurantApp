import { StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
//import RESTAURANT from "../constants/restaurant";
//import RestaurantAddress from "../components/RestaurantAddress";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Navbar />
      <Footer />
      {/* <RestaurantAddress restaurant={RESTAURANT} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
