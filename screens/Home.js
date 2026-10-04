import { StyleSheet, View, Text } from "react-native";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Fonts from "../constants/Fonts";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Navbar />
      <Footer />
      <Text style={styles.title}>
        Test Rubik-Bold: This is a heading in Rubik-Bold font.
      </Text>
      <Text style={styles.titleMedium}>
        Test Rubik-Medium: This is a heading in Rubik-Medium font.
      </Text>
      <Text style={styles.bodyText}>
        Test NunitoSans-Regular: This is a body text in NunitoSans-Regular font.
      </Text>
      <Text style={styles.bodySemiBold}>
        Test NunitoSans-SemiBold: This is a body text in NunitoSans-SemiBold
        font.
      </Text>
      <Text style={styles.bodyBold}>
        Test NunitoSans-Bold: This is a body text in NunitoSans-Bold font.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 24,
  },
  titleMedium: {
    fontFamily: Fonts.headingMedium,
    fontSize: 20,
  },
  bodySemiBold: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 16,
  },
  bodyBold: {
    fontFamily: Fonts.bodyBold,
    fontSize: 16,
  },
  bodyText: {
    fontFamily: Fonts.body,
    fontSize: 16,
  },
});
