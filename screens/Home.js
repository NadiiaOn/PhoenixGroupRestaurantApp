import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Banners } from "../data/BannerData";

import NewsBanner from "../components/banners/NewsBanner";
import NewsBanner2 from "../components/banners/NewsBanner2";
import StoryBanner from "../components/banners/StoryBanner";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Navbar /> */}
      <FlatList
        data={banners}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return <NewsBanner banner={item} />;
          }
          if (index === 1) {
            return <NewsBanner2 banner={item} />;
          }
          if (index === 2) {
            return <StoryBanner banner={item} />;
          }
          return null;
        }}
        ListFooterComponent={
          <>
            <Contact />
            <Footer />
          </>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  list: {
    paddingVertical: 10,
  },
});
