import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import Fonts from "../constants/Fonts";

function History({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Our history</Text>
          <Text style={styles.text}>It all started with a question.</Text>
          <Text style={styles.text}>
            In January 2026, Nadiia, who had just moved to Sweden, asked in a
            food group where to find real rye bread.
          </Text>
          <Text style={styles.text}>
            Three people answered: Joel the chef, Herman the fisherman and
            Viktor the carpenter.
          </Text>
          <Text style={styles.text}>
            They met in Joel's small kitchen. The bread got burnt, but they
            talked until dawn and had a plan.
          </Text>
          <Text style={styles.text}>
            By spring they had opened a shop, and Viktor built a long table.
          </Text>
          <Text style={styles.text}>
            Customers came for the bread but stayed for lunch, and soon the shop
            became a restaurant.
          </Text>
          <Text style={styles.text}>
            Customers came for the bread but stayed for lunch, and soon the shop
            became a restaurant.
          </Text>
          <Text style={styles.text}>
            Viktor's table still stands in the middle of the dining room.
          </Text>
          <Text style={styles.text}>Sit down, there's always room here.</Text>
          <Pressable
            style={({ pressed }) => [
              styles.closeButton,
              pressed && { opacity: 0.5 },
            ]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "95%",
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.headingMedium,
    marginVertical: 20,
    justifySelf: "center",
    alignSelf: "center",
    color: "#f45a45",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.body,
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
    textAlign: "justify",
  },
  closeButton: {
    backgroundColor: "#f45a45",
    opacity: 0.95,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
    pressed: {
      opacity: 0.5,
    },
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: Fonts.headingMedium,
  },
});

export default History;
