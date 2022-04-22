import React, { useState } from "react";
import {View, FlatList, Alert} from "react-native";
import Header from "./components/header";
import ListItem from "./components/listItem";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([]);
  let a = false;

  const addHandler = (text) => {
      if (text === "") {
          Alert.alert(null, "Поле не может быть пустым");
      } else {
          setListOfItems((list) => {
              a = true;

              return [
                  { text: text, key: Math.random().toString(36).substring(7)},
                  ...list
              ];
          });
      }
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
        return list.filter(listOfItems => listOfItems.key !== key);
    });
  };

  return (
    <View>
      <Header/>
        <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}
