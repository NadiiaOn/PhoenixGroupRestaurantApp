import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  useWindowDimensions,
} from "react-native";
export default function Contact() {
  const { height } = useWindowDimensions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetContactFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={[styles.container, { minHeight: height * 0.9 }]}>
      {/* Introduction */}
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>
          Have a question or want to get in touch? We would love to hear from
          you.
        </Text>
      </View>
      {/* Contact form */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Write your message..."
            placeholderTextColor="#999"
            multiline
            textAlignVertical="top"
          />
        </View>
        <Pressable style={styles.button} onPress={resetContactFields}>
          <Text style={styles.buttonText}>Send Message</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 22,
    paddingVertical: 30,
    backgroundColor: "#f45a45",
    gap: 25,
  },

  header: {
    gap: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#fff",
    opacity: 0.9,
  },

  form: {
    gap: 18,
  },

  inputContainer: {
    gap: 8,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  input: {
    height: 48,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    color: "#333",
    fontSize: 14,
  },

  messageInput: {
    height: 130,
    paddingTop: 12,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "fff",
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 5,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
});
