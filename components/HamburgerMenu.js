import {
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ListIcon } from "phosphor-react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import {
  UserPlusIcon,
  PhoneCallIcon,
  TimerIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "phosphor-react-native";

import MenuItem from "./MenuItem";
import Logo from "./Logo";
import MenuFooter from "./MenuFooter";
import { OpeningHours } from "../data/OpeningHours";
import Fonts from "../constants/Fonts";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [openLinks, setOpenLinks] = useState(null);
  const navigation = useNavigation();

  function closeMenu() {
    setOpen(false);
    setOpenLinks(null);
  }

  const links = [
    { id: 1, text: "Become a member", icon: UserPlusIcon, screen: "Login" },
    {
      id: 2,
      text: "Contact us",
      icon: PhoneCallIcon,
      info: "+46 70 123 45 67",
      phone: "+46701234567",
    },
    { id: 3, text: "Opening hours", icon: TimerIcon, info: OpeningHours },
  ];

  const footer = [
    {
      id: 1,
      name: "Instagram",
      icon: InstagramLogoIcon,
      url: "https://wwww.instagram.com",
    },
    {
      id: 2,
      name: "Facebook",
      icon: FacebookLogoIcon,
      url: "https://www.facebook.com",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: LinkedinLogoIcon,
      url: "https://www.linkedin.com",
    },
    { id: 4, name: "X", icon: XLogoIcon, url: "https://www.x.com" },
  ];

  return (
    <>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => setOpen(true)}
      >
        <ListIcon size={40} color="#F45A45" />
      </Pressable>
      <Modal
        visible={open}
        transparent
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={closeMenu}
      >
        <View style={styles.backdrop}>
          <Pressable style={StyleSheet.absoluteFill} onPress={closeMenu} />

          {open && (
            <Animated.View
              entering={FadeInLeft.duration(400)}
              style={styles.overlay}
            >
              <View style={styles.menu}>
                <View style={styles.linksContainer}>
                  <View style={styles.logoContainer}>
                    <Logo size={150} />
                  </View>

                  {/* Start: Menu links */}
                  {links.map((link) => (
                    <MenuItem
                      key={link.id}
                      links={link}
                      onPress={() =>
                        setOpenLinks(openLinks === link.id ? null : link.id)
                      }
                      isOpen={link.id === openLinks}
                    />
                  ))}
                  {/* End: Menu links */}
                </View>

                {/* Start: Menu footer */}
                <View style={styles.footerContainer}>
                  <View style={styles.footerIconContainer}>
                    {footer.map((item) => (
                      <MenuFooter key={item.id} item={item} />
                    ))}
                  </View>
                  <Pressable
                    style={({ pressed }) => pressed && { opacity: 0.5 }}
                    onPress={() =>
                      Linking.openURL("https://example.com/privacy")
                    }
                  >
                    <Text style={styles.footerText}>Privacy & terms</Text>
                  </Pressable>
                </View>
                {/* End: Menu footer */}
              </View>
            </Animated.View>
          )}
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  overlay: {
    height: "100%",
    width: "80%",
    backgroundColor: "black",
    paddingHorizontal: 16,
  },
  menu: {
    flex: 1,
    marginTop: 70,
  },
  xButton: {
    position: "absolute",
    right: 16,
    top: 0,
    zIndex: 50,
  },
  linksContainer: {
    gap: 24,
  },
  logoContainer: {
    borderBottomWidth: 1,
    borderColor: "white",
    paddingBottom: 25,
    alignItems: "center",
  },
  footerContainer: {
    marginTop: "auto",
    paddingBottom: 40,
    alignItems: "center",
    gap: 8,
  },
  footerIconContainer: {
    flexDirection: "row",
    gap: 20,
  },
  footerText: {
    color: "white",
    fontFamily: Fonts.bodySemiBold,
  },
});
