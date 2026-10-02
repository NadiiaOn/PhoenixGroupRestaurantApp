import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { Banners } from "../data/BannerData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import NewsBanner from "../components/banners/NewsBanner";

export default function Home() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  return (
    <View style={styles.container}>
      {/*<Navbar />*/}

      <FlatList
        data={banners.slice(0, 1)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsBanner banner={item} />}
      />

      {/*<Footer />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
