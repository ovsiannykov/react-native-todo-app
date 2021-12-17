import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header/Header.js";
import ListItem from "./components/ListItem/ListItem.js";
import Form from "./components/Form/Form.js";

export default function App() {
  const [listItem, setListItem] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Стать джуном", key: "2" },
  ]);

  const addTask = (text) => {
    if (!text) {
      Alert.alert("Поле не должно быть пустым!");
    } else {
      setListItem((list) => {
        return [...list, { text: text, key: Math.random() }];
      });
    }
  };

  const deleteTask = (key) => {
    setListItem((list) => {
      return list.filter((setListItem) => setListItem.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addTask={addTask} />
      <View>
        <FlatList
          data={listItem}
          renderItem={({ item }) => (
            <ListItem el={item} deleteTask={deleteTask} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
