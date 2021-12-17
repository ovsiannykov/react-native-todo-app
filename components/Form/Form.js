import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addTask }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Your task"
        clearButtonMode="always"
      />
      <Button
        title="Add"
        color="black"
        fontWeight="500"
        onPress={() => addTask(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
