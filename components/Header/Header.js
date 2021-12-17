import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 200,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    color: "white",
  },
});
