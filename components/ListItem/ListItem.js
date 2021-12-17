import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ListItem({ el, deleteTask }) {
  return (
    <TouchableOpacity onPress={() => deleteTask(el.key)}>
      <Text style={styles.item}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    width: 250,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 7,
    textAlign: "center",
  },
});
