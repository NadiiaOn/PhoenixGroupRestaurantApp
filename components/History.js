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
          <Text style={styles.text}>Allt började med en fråga.</Text>
          <Text style={styles.text}>
            I januari 2026 undrade Nadiia, nyinflyttad till Sverige, i en
            matgrupp var man hittar riktigt rågbröd.
          </Text>
          <Text style={styles.text}>
            Tre svarade: kocken Joel, fiskaren Herman och snickaren Viktor.
          </Text>
          <Text style={styles.text}>
            De träffades i Joels lilla kök. Brödet blev bränt, men de pratade
            till gryningen och hade en plan.
          </Text>
          <Text style={styles.text}>
            Till våren öppnade de en butik, och Viktor byggde ett långt bord.
          </Text>
          <Text style={styles.text}>
            Kunderna kom för brödet men stannade på lunch, och snart blev
            butiken en restaurang.
          </Text>
          <Text style={styles.text}>
            Kunderna kom för brödet men stannade på lunch, och snart blev
            butiken en restaurang.
          </Text>
          <Text style={styles.text}>
            Viktors bord står kvar mitt i matsalen. Slå dig ned, här finns
            alltid plats.
          </Text>
          <Text style={styles.text}>Slå dig ned, här finns alltid plats.</Text>
          <Pressable
            style={({ pressed }) => pressed && { opacity: 0.5 }}
            onPress={onClose}
            style={styles.closeButton}
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
    width: "90%",
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: Fonts.headingMedium,
  },
});

export default History;
