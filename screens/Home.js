import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Banners } from "../data/BannerData";

import NewsBanner from "../components/banners/NewsBanner";
import NewsBanner2 from "../components/banners/NewsBanner2";
import StoryBanner from "../components/banners/StoryBanner";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home({ navigation }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  function handleBannerPress(banner) {
    if (banner.productId) {
      navigation.navigate("ProductDetail", {
        productId: banner.productId,
        type: banner.type,
      });
    } else if (banner.country) {
      navigation.navigate("ProductCardMenu", { country: banner.country });
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={banners}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return <NewsBanner banner={item} onPress={handleBannerPress} />;
          }
          if (index === 1) {
            return <NewsBanner2 banner={item} onPress={handleBannerPress} />;
          }
          if (index === 2) {
            return <StoryBanner banner={item} />;
          }
          return null;
        }}
        ListFooterComponent={
          <>
            <Contact />
          </>
        }
      />

      <Navbar />
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
